var R = 0;
var G = 0;
var B = 0;

document.getElementById('Rrange').addEventListener('input' ev => {
  R = document.getElementById('Rrange').value;
  setHex();
})
document.getElementById('Rinput').addEventListener('input' ev => {
  R = document.getElementById('Rinput').value;
  setHex();
})
document.getElementById('Grange').addEventListener('input' ev => {
  G = document.getElementById('Grange').value;
  setHex();
})
document.getElementById('Ginput').addEventListener('input' ev => {
  G = document.getElementById('Ginput').value;
  setHex();
})
document.getElementById('Brange').addEventListener('input' ev => {
  B = document.getElementById('Brange').value;
  setHex();
})
document.getElementById('Binput').addEventListener('input' ev => {
  B = document.getElementById('Binput').value;
  setHex();
})

function setHex() {
  document.getElementById('Rrange').value = R.toString(16);
  document.getElementById('Rinput').value = R.toString(16);
  document.getElementById('Grange').value = G.toString(16);
  document.getElementById('Ginput').value = G.toString(16);
  document.getElementById('Brange').value = B.toString(16);
  document.getElementById('Binput').value = B.toString(16);
}
