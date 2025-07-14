import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const defaultTemplates = {
  71: `# Program Python
print("Hello, World!")`,
  63: `// JavaScript Example
console.log("Hello, World!");`,
  62: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
  54: `#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}`,
  50: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  68: `<?php
echo "Hello, World!";
?>`
};

const Compiler = () => {
  const [language, setLanguage] = useState("71"); // Default: Python
  const [languages, setLanguages] = useState([]);
  const [sourceCode, setSourceCode] = useState(defaultTemplates["71"]);
  const [output, setOutput] = useState("");
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch("https://judge0-ce.p.rapidapi.com/languages", {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_JUDGE_API_KEY,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        });
        const allLangs = await res.json();

        const latestLangsMap = new Map();
        allLangs.forEach((lang) => {
          const baseName = lang.name.split(" ")[0];
          if (!latestLangsMap.has(baseName)) {
            latestLangsMap.set(baseName, lang);
          } else {
            const existing = latestLangsMap.get(baseName);
            const v1 = parseFloat(existing.name.replace(/[^0-9.]/g, ""));
            const v2 = parseFloat(lang.name.replace(/[^0-9.]/g, ""));
            if (!isNaN(v1) && !isNaN(v2) && v2 > v1) {
              latestLangsMap.set(baseName, lang);
            }
          }
        });

        setLanguages(Array.from(latestLangsMap.values()));
      } catch (err) {
        console.error("Gagal mengambil daftar bahasa:", err);
      }
    };

    fetchLanguages();
  }, []);

  useEffect(() => {
    if (defaultTemplates[language]) {
      setSourceCode(defaultTemplates[language]);
    } else {
      setSourceCode("");
    }
  }, [language]);

  const getMonacoLanguage = (langId) => {
    switch (parseInt(langId)) {
      case 54: return "cpp";
      case 71: return "python";
      case 63: return "javascript";
      case 62: return "java";
      case 68: return "php";
      case 50: return "c";
      default: return "plaintext";
    }
  };

  const handleRun = async () => {
    setLoading(true);
    setOutput("");
    setDetails({});

    try {
      const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": import.meta.env.VITE_JUDGE_API_KEY,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
          body: JSON.stringify({
            language_id: language,
            source_code: sourceCode,
          }),
        }
      );

      const { token } = await response.json();

      const fetchResult = async () => {
        const result = await fetch(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_JUDGE_API_KEY,
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            },
          }
        );
        const data = await result.json();

        if (data.status?.id <= 2) {
          setTimeout(fetchResult, 1500);
        } else {
          const resultOutput =
            data.stdout ||
            data.compile_output ||
            data.stderr ||
            "Status: " + data.status.description;

          setOutput(resultOutput);
          setDetails({
            time: data.time,
            memory: data.memory,
            status: data.status.description,
          });
          setLoading(false);
        }
      };

      fetchResult();
    } catch (err) {
      setOutput("Terjadi kesalahan: " + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#F4F6F8] text-gray-800 flex-col flex-1 overflow-y-auto ml-64">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex flex-col flex-[2] p-6 space-y-4 overflow-auto">
          <h1 className="text-2xl font-bold">Compiler & AI Assistant</h1>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-lg font-semibold">Bahasa</span>
            <select
              className="border rounded-md px-3 py-1 text-sm"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button
              className="flex items-center gap-1 px-4 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm shadow"
              onClick={handleRun}
              disabled={loading}
            >
              <span className="material-icons">play_arrow</span>
              {loading ? "Running..." : "Run"}
            </button>
          </div>

          <div className="bg-black text-white rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Input:</h3>
            <Editor
              className="rounded-lg"
              height="430px"
              language={getMonacoLanguage(language)}
              theme="vs-dark"
              value={sourceCode}
              onChange={(value) => setSourceCode(value || "")}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                automaticLayout: true,
                lineNumbers: "on",
              }}
            />
          </div>

          <div className="bg-black text-white rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Output:</h3>
            <pre className="whitespace-pre-wrap">{output}</pre>
            {details.status && (
              <div className="mt-2 text-sm text-gray-300">
                <p>Status: {details.status}</p>
                <p>Waktu Eksekusi: {details.time ?? "–"} detik</p>
                <p>Memori: {details.memory ?? "–"} KB</p>
              </div>
            )}
          </div>
        </section>

        <section className="flex flex-col flex-[1] bg-white border-l border-gray-200 p-4 space-y-4">
          <h2 className="text-xl font-bold">AI Assistant</h2>
          <div className="flex-1 overflow-y-auto space-y-3 px-1">
            <Bubble type="ai" text="Halo! Ada yang bisa saya bantu dengan kodenya?" />
          </div>
          <div className="relative mt-auto">
            <input
              type="text"
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ketik pesan Anda..."
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-white bg-blue-600 rounded-r-full hover:bg-blue-700">
              <span className="material-icons">send</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

const Bubble = ({ type, text }) => {
  const base = "px-4 py-2 rounded-lg text-sm max-w-[90%] whitespace-pre-wrap";
  const style =
    type === "user"
      ? "bg-blue-500 text-white self-end rounded-br-none"
      : "bg-gray-100 text-gray-800 self-start rounded-bl-none";
  return (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`${base} ${style}`}>{text}</div>
    </div>
  );
};

export default Compiler;
