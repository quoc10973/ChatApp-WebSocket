import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3200"); // Kết nối với server WebSocket

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]); // spread operator, add new message to the end of the array
        });

        socket.on("user-joined", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        socket.on("user-left", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off("message");
            socket.off("user-joined");
            socket.off("user-left");
        };
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            socket.emit("newMessage", input);
            setInput("");
        }
    };

    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md">
                {messages.map((msg, index) => (
                    <div key={index} className="p-2 border-b border-gray-200">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="flex mt-4">
                <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
