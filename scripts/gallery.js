const gallery = document.getElementById('gallery');

const imageList = [
  'DSC05936.jpg',
  'DSC09107.jpg',
  'DSC09544.jpg',
  'DSC09866.jpg',
  'DSC05837.jpg',
  'DSC05838.jpg',
  'DSC05840.jpg'
];

imageList.forEach(filename => {
  const img = document.createElement('img');
  img.src = `images/${filename}`;
  img.alt = filename;
  gallery.appendChild(img);
});