# Chat App (React Native + Node.js + Socket.IO + MongoDB)

This project is a real-time chat app with:
- React Native (Expo) as frontend (/mobile)
- Node.js + Express + Socket.IO backend (/server)
- MongoDB database
- JWT Authentication (Login / Register)
- Real-time chat (Socket.IO)
- Messages stored in DB

---------------------------------------
PROJECT STRUCTURE
---------------------------------------
chat-app/
 ├── server/      <-- Backend (Node.js)
 └── mobile/      <-- Frontend (React Native / Expo)

---------------------------------------
SETUP & INSTALLATION
---------------------------------------

1️⃣ Clone the project
---------------------
git clone https://github.com/YOUR_USERNAME/chat-app.git
cd chat-app

2️⃣ Backend Setup (server/)
---------------------------
cd server
npm install

Create file: .env
Inside .env paste:

PORT=4000
MONGO_URI=mongodb+srv://sanjyotUser:12345678@sanjyot.n8nhdgu.mongodb.net/chatApp?retryWrites=true&w=majority
JWT_SECRET=supersecretkey
CLIENT_URL=http://localhost:19006

Start backend:
npm run dev

Expected output:
Server running on port 4000
MongoDB connected

3️⃣ Mobile App Setup (mobile/)
-------------------------------
cd ../mobile/chat-mobile
npm install
npx expo start

Scan the QR from Expo Go (Android/iPhone)

IMPORTANT:
Update mobile/src/api/api.js and set your local IP

Example:
baseURL: "http://192.168.0.105:4000"

(Your phone and laptop must be on same Wi-Fi)

---------------------------------------
API ENDPOINTS
---------------------------------------

Auth:
POST /auth/register
POST /auth/login

Users:
GET /users

Messages / Conversations (Socket.IO + REST)

---------------------------------------
SOCKET EVENTS
---------------------------------------
message:send     -> send message
message:new      -> receive new message
typing:start     -> show typing
typing:stop      -> stop typing
message:read     -> mark as read

---------------------------------------
SAMPLE TEST USERS
---------------------------------------
email: user1@example.com
password: 1234

email: user2@example.com
password: 5678

---------------------------------------
TECH USED
---------------------------------------
Frontend: React Native, Expo, Axios, Socket.IO client
Backend: Node.js, Express, Socket.IO, JWT, MongoDB, Mongoose

---------------------------------------
DELIVERABLE CHECKLIST
---------------------------------------
✅ /mobile folder (React Native app)
✅ /server folder (Node backend)
✅ README with setup & instructions
✅ Demo video link (< 5 min)


