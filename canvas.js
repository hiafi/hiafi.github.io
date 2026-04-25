var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;

function drawArena(ctx, image) {
  if (image && image.complete && image.naturalWidth > 0) {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  } else {
    ctx.fillStyle = '#2a2a4a';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.strokeStyle = '#4a4a8a';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 220, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawZone(ctx, x, y, color) {
  ctx.beginPath();
  ctx.arc(x, y, ZONE_RADIUS, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawQuestion(ctx, text) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.fillRect(0, 0, CANVAS_WIDTH, 48);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, CANVAS_WIDTH / 2, 24);
}

function drawFeedback(ctx, message, correctAnswer) {
  drawZone(ctx, correctAnswer.x, correctAnswer.y, 'rgba(0, 220, 0, 0.85)');
  ctx.fillStyle = 'rgba(180, 0, 0, 0.75)';
  ctx.fillRect(0, 0, CANVAS_WIDTH, 48);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(message, CANVAS_WIDTH / 2, 24);
}

var MARKER_COLORS = { A: '#e74c3c', B: '#f1c40f', C: '#3498db', D: '#9b59b6', 1: '#e74c3c', 2: '#f1c40f', 3: '#3498db', 4: '#9b59b6' };
var MARKER_SIZE = 18;

function drawMarkers(ctx, markers) {
  var keys = Object.keys(markers);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var m = markers[key];
    var color = MARKER_COLORS[key] || '#ffffff';
    var isSquare = key === '1' || key === '2' || key === '3' || key === '4';
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    if (isSquare) {
      ctx.fillRect(m.x - MARKER_SIZE, m.y - MARKER_SIZE, MARKER_SIZE * 2, MARKER_SIZE * 2);
      ctx.strokeRect(m.x - MARKER_SIZE, m.y - MARKER_SIZE, MARKER_SIZE * 2, MARKER_SIZE * 2);
    } else {
      ctx.beginPath();
      ctx.arc(m.x, m.y, MARKER_SIZE, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(key, m.x, m.y);
  }
}

function drawSpots(ctx, spots) {
  for (var i = 0; i < spots.length; i++) {
    var s = spots[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, ZONE_RADIUS / 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function drawScoring(ctx, streak, successRate) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
  ctx.fillRect(0, CANVAS_HEIGHT - 36, CANVAS_WIDTH, 36);
  ctx.fillStyle = '#ffffff';
  ctx.font = '14px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(
    'Streak: ' + streak + '  |  Success: ' + successRate + '%',
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT - 18
  );
}
