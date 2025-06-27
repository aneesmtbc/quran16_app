// Font size adjustment
document.getElementById('font-size').addEventListener('input', function(event) {
  const fontSize = event.target.value;
  document.getElementById('quran-lines').style.fontSize = `${fontSize}px`;
});

// Zoom In and Zoom Out functions
function zoomIn() {
  let currentSize = parseInt(window.getComputedStyle(document.getElementById('quran-lines')).fontSize);
  document.getElementById('quran-lines').style.fontSize = `${currentSize + 2}px`;
}

function zoomOut() {
  let currentSize = parseInt(window.getComputedStyle(document.getElementById('quran-lines')).fontSize);
  document.getElementById('quran-lines').style.fontSize = `${currentSize - 2}px`;
}
