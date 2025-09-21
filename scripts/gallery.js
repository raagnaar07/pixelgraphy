function openPhoto(src) {
  document.getElementById('viewer-img').src = src;
  document.getElementById('photo-viewer').classList.remove('hidden');
}

function closeViewer() {
  document.getElementById('photo-viewer').classList.add('hidden');
}
