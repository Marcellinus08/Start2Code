import Header from "../../member/fragments/homepage/Header";
import { supabase } from "../../../supabaseClient";
import { useEffect, useState } from "react";

const ContentAdmin = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const [newUser, setNewUser] = useState({
    username: "",
    full_name: "",
    email: "",
    telepon: "",
    password: "",
    role: "member",
  });

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) console.error("Gagal mengambil data:", error.message);
    else setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChangeNew = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async () => {
    if (!newUser.username || !newUser.password)
      return alert("Username dan Password wajib diisi");

    const { error: userError } = await supabase.from("users").insert(newUser);
    if (userError) return alert("Gagal tambah user: " + userError.message);

    const { error: roleError } = await supabase.from("roles").insert({
      username: newUser.username,
      role_name: newUser.role,
    });
    if (roleError) return alert("Gagal tambah role: " + roleError.message);

    setNewUser({
      username: "",
      full_name: "",
      email: "",
      telepon: "",
      password: "",
      role: "member",
    });

    fetchUsers();
  };

  const handleDelete = async (username) => {
    if (confirm(`Hapus user ${username}?`)) {
      await supabase.from("users").delete().eq("username", username);
      await supabase.from("roles").delete().eq("username", username);
      fetchUsers();
    }
  };

  const handleEdit = (user) => setEditUser(user);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("users")
      .update({
        full_name: editUser.full_name,
        email: editUser.email,
        telepon: editUser.telepon,
        role: editUser.role,
      })
      .eq("username", editUser.username);

    if (error) return alert("Gagal update user: " + error.message);

    await supabase
      .from("roles")
      .update({ role_name: editUser.role })
      .eq("username", editUser.username);

    setEditUser(null);
    fetchUsers();
  };

  const filteredUsers = users.filter((user) => {
    const matchRole = filterRole === "all" || user.role === filterRole;
    const matchSearch =
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.full_name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRole && matchSearch;
  });

  return (
    <main className="flex-1 p-8 ml-64 bg-[#F0F9FF] min-h-screen">
      <Header hello="User Management" letsgo="Silakan pilih menu untuk mengelola sistem." />

      {/* TAMBAH USER */}
      <section className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <h3 className="text-xl font-bold text-[#4285F4] mb-4">➕ Tambah User Baru</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["username", "full_name", "email", "telepon", "password"].map((field) => (
            <input
              key={field}
              name={field}
              value={newUser[field]}
              onChange={handleChangeNew}
              placeholder={field === "full_name" ? "Nama Lengkap" : field.charAt(0).toUpperCase() + field.slice(1)}
              type={field === "password" ? "password" : "text"}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
            />
          ))}
          <select
            name="role"
            value={newUser.role}
            onChange={handleChangeNew}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
          >
            <option value="member">Member</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          className="mt-4 bg-[#4285F4] text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          onClick={handleAddUser}
        >
          Tambah
        </button>
      </section>

      {/* LIST USER */}
      <section className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#4285F4] mb-4">📋 Daftar User</h2>
        <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="🔍 Cari user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
          />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="border border-gray-300 rounded-lg p-3  pr-8 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
          >
            <option value="all">Semua Role</option>
            <option value="member">Member</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="overflow-auto rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#e9f1fd] text-[#333] font-semibold">
              <tr>
                <th className="p-3">Username</th>
                <th className="p-3">Nama Lengkap</th>
                <th className="p-3">Email</th>
                <th className="p-3">Telepon</th>
                <th className="p-3">Role</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) =>
                editUser?.username === user.username ? (
                  <tr key={user.username} className="bg-yellow-100">
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">
                      <input
                        value={editUser.full_name}
                        onChange={(e) =>
                          setEditUser({ ...editUser, full_name: e.target.value })
                        }
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        value={editUser.email}
                        onChange={(e) =>
                          setEditUser({ ...editUser, email: e.target.value })
                        }
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        value={editUser.telepon}
                        onChange={(e) =>
                          setEditUser({ ...editUser, telepon: e.target.value })
                        }
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={editUser.role}
                        onChange={(e) =>
                          setEditUser({ ...editUser, role: e.target.value })
                        }
                        className="border p-2 pr-3 rounded"
                      >
                        <option value="member">member</option>
                        <option value="mentor">mentor</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td className="flex p-3 space-x-2 m-auto">
                      <button
                        onClick={() => setEditUser(null)}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-full"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleUpdate}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full"
                      >
                        Simpan
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr key={user.username} className="hover:bg-gray-50">
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">{user.full_name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.telepon}</td>
                    <td className="p-3 capitalize">{user.role}</td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.username)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ContentAdmin;
