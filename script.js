const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const map = new Image();
map.src = './img/test-map-rpg.png';
const player = new Image();
player.src = './img/player/playerDown.png';
map.onload = () => {
c.drawImage(map, -700, -500);
  player.onload = () => c.drawImage(
  player,
  0,
  0,
  player.width / 4,
  player.height,
  centerWidth, 
  centerHeight,
  player.width / 4,
  player.height);
const centerWidth = canvas.width / 2 - (player.width / 4) / 2; 
const centerHeight = canvas.height / 2 - player.height / 2; 
  } 