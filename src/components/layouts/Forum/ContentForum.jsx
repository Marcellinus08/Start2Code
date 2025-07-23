import Header from "../../fragments/modulpage/submodul/Header";

const ContentForum = () => {
    return (
        <main className="flex-1 p-8 overflow-y-auto ml-64">
            <Header
                title="Forum Diskusi"
                desc="Punya pertanyaan atau ide? Ayo diskusikan bareng komunitas!"
            />

            <div className="flex-1 overflow-y-scroll h-125 p-4 space-y-6 bg-white rounded-xl shadow-inner">

                {/* Pesan Ahmad Fauzi */}
                <div className="flex items-start gap-3">
                    <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQsHiQx0JeHnLHvH97bgZyDCHejmkuNIWYfhlJ_69L80fwDl9nvdSAaW2xLOw2tmvR4llTWMHjc--STtPfI-ChuBHdHEJhlsotUagtZGoJhifmQEWen1dTqpXxBh1uZlqeRQxEvJQtMk788aa5rbxwoF_ZUES8XssorGW-i7vzxOrC29kRnUW374EvzfztXOx8BAeUvVAgnPCpjvv73AHLN-ThgvAEdczX6lS4pbz0ekd62-EFR1bHdJmGaoVkqNBgTpvuSWDudRan" alt="Avatar Ahmad Fauzi" />
                    <div>
                        <div className="flex items-baseline gap-2">
                            <p className="font-semibold text-gray-800">Ahmad Fauzi</p>
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Member</span>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-xl mt-1 max-w-md">
                            <p>Halo semua, saya masih bingung nih soal centering div di CSS. Udah coba <code>margin: auto;</code> tapi kadang gak berhasil. Ada cara lain yang lebih jitu gak ya? Terutama buat centering vertikal juga.</p>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                            <p className="text-xs text-gray-400">13.45</p>
                            <button className="reply-btn text-sm text-blue-600 flex items-center gap-1">
                                <span className="material-icons text-sm">reply</span> Balas
                            </button>
                        </div>
                    </div>
                </div>

                {/* Balasan Sabrina Yuanti (kanan) */}
                <div className="flex items-start gap-3 justify-end">
                    <div className="text-right">
                        <div className="flex items-baseline gap-2 justify-end">
                            <p className="font-semibold text-gray-800">Sabrina Yuanti</p>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Member</span>
                        </div>
                        <div className="bg-blue-500 text-white p-4 rounded-xl mt-1 max-w-md text-left">
                            <p>
                                Halo Ahmad! Cara paling modern dan efektif sekarang itu pakai Flexbox atau Grid. Coba deh pakai ini di container div-nya:
                                <br /><br />
                                <code>display: flex;</code><br />
                                <code>justify-content: center;</code> (horizontal)<br />
                                <code>align-items: center;</code> (vertikal)
                                <br /><br />
                                Itu dijamin langsung ke tengah deh, baik horizontal maupun vertikal.
                            </p>
                        </div>
                        <div className="flex items-center justify-end gap-3 mt-1">
                            <p className="text-xs text-gray-200">14.05</p>
                            <button className="reply-btn text-sm text-white flex items-center gap-1 hover:text-yellow-200">
                                <span className="material-icons text-sm">reply</span> Balas
                            </button>
                        </div>
                    </div>
                    <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsVLdsreqFV6gE-iaeo2tbo_9VQnLl2Aa1axBE66LlE4aUnjerdiH6xNbScWmcjyQ9iUha0JDqzrp9bm_8Bmrud5EO-nx-bp9HVavll20Q6kS0_vnKm997edYRSuyMCcDlTsumvehoBXd4zCrgmKLjCdbncXz7baajEMvWM_05yggm82rSJ1EIY7PdCUKTG6HF5Qct_TfIG7BmeIHHVhZ5anEozR7QCpVELwBgy7pa6U7dDtp-xyq_GQP1MgeqzxiORvWr3eGQOi0_" />
                </div>

                {/* Balasan Budi ke Sabrina */}
                <div className="ml-10 border-l-2 border-gray-200 pl-5">
                    <div className="flex items-start gap-3">
                        <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1WzsGYNG9RF79XP0UUf5vu5q2arhuHY78srXTESBMcEsQUiEGG7e6tYpuT_XABAuAev87T6HfwrMsgSrDJeQfhIDnPc-emFxgeTbQcyhIr4ggjU76svn8554WF7zYnLFIoTgskt5_kgkD3wq9v8InWxnt_QgMczCZ9QxFIsSNmvCz6nwzvBE_mZzJK0BhjT1ziv5O26kMlwkxqzdsKehdnAWfx--Cx7czaXbkl8MNyZPWU94bxFaYcXPJUy17iZBIcTUoOLHxENUU" alt="Avatar Budi" />
                        <div>
                            <div className="flex items-baseline gap-2">
                                <p className="font-semibold text-gray-800">Budi Santoso</p>
                                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Member</span>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-lg mt-1 text-sm text-gray-600 max-w-md">
                                Balasan untuk <span className="font-semibold text-blue-600">@Sabrina Yuanti</span>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl mt-1 max-w-md">
                                <p>Betul kata Sabrina, Flexbox itu sakti banget buat layout. Kalau kasusnya lebih kompleks dan butuh kontrol baris dan kolom, bisa coba CSS Grid juga. Tapi untuk sekedar centering, Flexbox udah lebih dari cukup dan gampang diingat.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <p className="text-xs text-gray-400">15.00</p>
                                <button className="reply-btn text-sm text-blue-600 flex items-center gap-1">
                                    <span className="material-icons text-sm">reply</span> Balas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Balasan akhir dari Ahmad Fauzi */}
                <div className="flex items-start gap-3">
                    <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQsHiQx0JeHnLHvH97bgZyDCHejmkuNIWYfhlJ_69L80fwDl9nvdSAaW2xLOw2tmvR4llTWMHjc--STtPfI-ChuBHdHEJhlsotUagtZGoJhifmQEWen1dTqpXxBh1uZlqeRQxEvJQtMk788aa5rbxwoF_ZUES8XssorGW-i7vzxOrC29kRnUW374EvzfztXOx8BAeUvVAgnPCpjvv73AHLN-ThgvAEdczX6lS4pbz0ekd62-EFR1bHdJmGaoVkqNBgTpvuSWDudRan" alt="Avatar Ahmad Fauzi" />
                    <div>
                        <div className="flex items-baseline gap-2">
                            <p className="font-semibold text-gray-800">Ahmad Fauzi</p>
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Member</span>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-xl mt-1 max-w-md">
                            <p>Wah, makasih banyak Sabrina dan Budi! Langsung saya coba dan berhasil. Keren banget! Ternyata segampang itu ya, hehe.</p>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                            <p className="text-xs text-gray-400">15.40</p>
                            <button className="reply-btn text-sm text-blue-600 flex items-center gap-1">
                                <span className="material-icons text-sm">reply</span> Balas
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Form input */}
            <div className="mt-6">
                <div className="relative flex">
                    <input
                        className="w-full pl-4 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ketik balasan Anda..."
                        type="text"
                    />
                    <button className="m-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                        <span className="material-icons">send</span>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ContentForum;
