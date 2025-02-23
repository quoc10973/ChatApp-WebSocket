import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage'
import ChatRoom from './page/ChatRoom';
import App from './App';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<App />}>
            </Route>
            <Route path="/login" element={<LoginPage />}>
            </Route>
            <Route path="/chat" element={<ChatRoom />}>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
