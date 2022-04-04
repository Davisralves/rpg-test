const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const map = new Image();
map.src = './img/test-map-rpg.png';
const player = new Image();
player.src = './img/player/playerDown.png';

class Sprite {
  constructor(position, image) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const position = {x: -1800, y: -980};
const background = new Sprite(position, map);

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  }
}
  let lastKey = '';
function animate() {
  window.requestAnimationFrame(animate);
  const centerWidth = canvas.width / 2 - (player.width / 4) / 2; 
  const centerHeight = canvas.height / 2 - player.height / 2; 
  background.draw();
  c.drawImage(
  player,
  0,
  0,
  player.width / 4,
  player.height,
  centerWidth, 
  centerHeight,
  player.width / 4,
  player.height);
  if(keys.w.pressed && lastKey === 'w') background.position.y += 3
  if(keys.a.pressed && lastKey === 'a') background.position.x += 3
  if(keys.s.pressed && lastKey === 's') background.position.y -= 3
  if(keys.d.pressed && lastKey === 'd') background.position.x -= 3
}

animate();

window.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'w':
      lastKey = 'w';
      return keys.w.pressed = true;
    case 'a':
      lastKey = 'a';
      return keys.a.pressed = true;
    case 's': 
      lastKey = 's';
      return keys.s.pressed = true;
    case 'd': 
      lastKey = 'd';
      return keys.d.pressed = true;
  }
})

window.addEventListener('keyup', (e) => {
  switch(e.key) {
    case 'w':
      return keys.w.pressed = false;
    case 'a':
      return keys.a.pressed = false;
    case 's': 
      return keys.s.pressed = false;
    case 'd': 
      return keys.d.pressed = false;
  }
})