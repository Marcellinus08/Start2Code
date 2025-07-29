import Header from "../../member/fragments/homepage/Header";
import { supabase } from "../../../supabaseClient";
import { useEffect, useState } from "react";
const ContentAdmin = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const [newUser, setNewUser] = useState({
    username: "",
    full_name: "",
    email: "",
    telepon: "",
    password: "",
    role: "member",
  });

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) {
      console.error("Gagal mengambil data:", error.message);
    } else {
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChangeNew = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async () => {
    if (!newUser.username || !newUser.password) return alert("Username dan Password wajib diisi");

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

  const roleOrder = { member: 1, mentor: 2, admin: 3 };

  const filteredUsers = users
    .filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc
        ? roleOrder[a.role] - roleOrder[b.role]
        : roleOrder[b.role] - roleOrder[a.role]
    );


  return (
    <main className="flex-1 p-8 overflow-y-auto ml-64">
        <Header hello="Panel Admin" letsgo="Kelola dan awasi semua aktivitas platform dengan mudah."></Header>
            <section className="mb-10">
                {/* Tambah User */}
                <h3 className="text-xl font-semibold mb-2">➕ Tambah User Baru</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <input name="username" value={newUser.username} onChange={handleChangeNew} placeholder="Username" className="border p-2" />
                    <input name="full_name" value={newUser.full_name} onChange={handleChangeNew} placeholder="Nama Lengkap" className="border p-2" />
                    <input name="email" value={newUser.email} onChange={handleChangeNew} placeholder="Email" className="border p-2" />
                    <input name="telepon" value={newUser.telepon} onChange={handleChangeNew} placeholder="Telepon" className="border p-2" />
                    <input name="password" value={newUser.password} onChange={handleChangeNew} placeholder="Password" type="password" className="border p-2" />
                    <select name="role" value={newUser.role} onChange={handleChangeNew} className="border p-2">
                    <option value="member">Member</option>
                    <option value="mentor">Mentor</option>
                    <option value="admin">Admin</option>
                    </select>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAddUser}>Tambah</button>
            </section>
            <section className="mb-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">📋 Daftar User</h2>
                    {/* Search and Sort */}
                    <div className="flex justify-between items-center mb-4">
                        <input
                        type="text"
                        placeholder="🔍 Cari user..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border p-2 rounded w-1/2"
                        />
                        <button
                        onClick={() => setSortAsc(!sortAsc)}
                        className="bg-gray-200 px-4 py-2 rounded ml-4"
                        >
                        Sort Role {sortAsc ? "⬆️ A-Z" : "⬇️ Z-A"}
                        </button>
                    </div>

                    <table className="w-full border border-gray-300 mb-6">
                        <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="border p-2">Username</th>
                            <th className="border p-2">Nama Lengkap</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Telepon</th>
                            <th className="border p-2">Role</th>
                            <th className="border p-2">Aksi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredUsers.map((user) =>
                            editUser?.username === user.username ? (
                            <tr key={user.username} className="bg-yellow-50">
                                <td className="border p-2">{user.username}</td>
                                <td className="border p-2">
                                <input value={editUser.full_name} onChange={(e) => setEditUser({ ...editUser, full_name: e.target.value })} className="w-full border p-1" />
                                </td>
                                <td className="border p-2">
                                <input value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} className="w-full border p-1" />
                                </td>
                                <td className="border p-2">
                                <input value={editUser.telepon} onChange={(e) => setEditUser({ ...editUser, telepon: e.target.value })} className="w-full border p-1" />
                                </td>
                                <td className="border p-2">
                                <select value={editUser.role} onChange={(e) => setEditUser({ ...editUser, role: e.target.value })} className="w-full border p-1">
                                    <option value="member">member</option>
                                    <option value="mentor">mentor</option>
                                    <option value="admin">admin</option>
                                </select>
                                </td>
                                <td className="border p-2 space-x-2">
                                <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleUpdate}>Simpan</button>
                                <button className="bg-gray-400 text-white px-2 py-1 rounded" onClick={() => setEditUser(null)}>Batal</button>
                                </td>
                            </tr>
                            ) : (
                            <tr key={user.username}>
                                <td className="border p-2">{user.username}</td>
                                <td className="border p-2">{user.full_name}</td>
                                <td className="border p-2">{user.email}</td>
                                <td className="border p-2">{user.telepon}</td>
                                <td className="border p-2">{user.role}</td>
                                <td className="border p-2 space-x-2">
                                <button className="bg-yellow-400 text-white px-2 py-1 rounded" onClick={() => handleEdit(user)}>Edit</button>
                                <button className="bg-red-600 text-white px-2 py-1 rounded" onClick={() => handleDelete(user.username)}>Hapus</button>
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