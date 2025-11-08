// === NEW: Go Live and Stop Live handling ===
socket.on('go-live', ({ id }) => {
  socket.broadcast.emit('live-started', { id });
  console.log(`🔴 ${id} started live broadcast`);
});

socket.on('stop-live', ({ id }) => {
  socket.broadcast.emit('live-stopped', { id });
  console.log(`⏹️ ${id} stopped broadcast`);
});

// Relay signaling data for live stream
socket.on('public-signal', (data) => {
  if (data.to === 'all') {
    socket.broadcast.emit('public-signal', { from: socket.id, ...data });
  } else {
    socket.to(data.to).emit('public-signal', { from: socket.id, ...data });
  }
});
