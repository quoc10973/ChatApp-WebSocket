import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../axios/axios.api"; // Hàm gọi API

const LoginPage = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook điều hướng

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset lỗi trước khi gọi API

        try {
            const response = await login(userName, password);
            console.log("Đăng nhập thành công:", response);

            // Điều hướng tới /chat và gửi state từ response
            navigate("/chat", { state: { user: response } });
        } catch (err) {
            console.error("Lỗi đăng nhập:", err.response?.data?.message || err.message);
            setError(err.response?.data?.message || "Đăng nhập thất bại!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Đăng nhập</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Tên đăng nhập</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
