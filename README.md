# Chat App - WebSocket (Socket.io)

## Introduction
This project is a real-time messaging application to learn fundamental Websocket using **React (frontend)** and **NestJS with Socket.io lib (backend)**.

## Technologies
- **Frontend**: React, React Router, Tailwind CSS, Socket.io-client
- **Backend**: NestJS, Socket.io

## Installation
### 1. Clone the repository
```bash
git clone https://github.com/your-repo/chat-app.git
cd chat-app
```

### 2. Install dependencies
```bash
cd frontend && npm install
cd ../backend && npm install
```

### 3. Run the application
```bash
cd backend && npm run start:dev
cd ../frontend && npm run dev  # http://localhost:5173
```

## WebSocket API
### Client Events
- `user-joined`: When a user joins the chat
- `user-left`: When a user leaves the chat
- `newMessage`: Send a message

### Server Events
- `message`: Receive & broadcast messages
- `user-joined`: Notify when a user joins
- `user-left`: Notify when a user leaves

🚀 **Happy coding!**

