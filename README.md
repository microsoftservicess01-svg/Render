Encrypted Video Chat - Full Render-ready Project
------------------------------------------------

Files:
- backend/       (Node.js backend, serves API and static frontend)
- frontend/static (frontend pages: signup.html, login.html, public.html, private.html, shared.js)
- Dockerfile     (builds app for Render)
- render.yaml    (Render blueprint for single Docker service)

Quick deploy:
1. Set environment variables on Render (Backend service):
   - JWT_SECRET = <strong secret>
   - ADMIN_KEY = <admin key for signup>
2. Build & deploy on Render (select this repo and dockerfile).
3. Open app URL, go to /signup.html to create a user.

Notes:
- This project uses an in-memory store (not persistent). Add a DB for production.
- WebRTC is not included here — media calls can be added later with signaling via socket.io and RTCPeerConnection.
