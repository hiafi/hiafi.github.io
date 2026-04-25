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
