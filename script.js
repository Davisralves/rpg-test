const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image();
image.src = './img/empty.png';
image.onload = () => c.drawImage(image, -700, -500);


console.log(canvas);