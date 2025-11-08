const API_BASE = window.API_BASE || "https://new-chat-bot-4.onrender.com";
let token = null;
let myId = null;

async function api(path, method='GET', body) {
  const res = await fetch(API_BASE + '/api/' + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  return res.json();
}

function generateUUID() {
  return 'u' + Math.random().toString(36).slice(2, 10);
}
