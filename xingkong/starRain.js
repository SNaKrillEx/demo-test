const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

let stars = [];
for (let i = 0; i < 100; i++) {
    stars[i] = new Star();
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
        if (stars[i].size <= 0.2) {
            stars[i] = new Star();
        } else {
            break; // 如果星星的大小小于等于0.2，则重新生成一个新的星星，否则跳出循环。
        }
    }
    requestAnimationFrame(drawStars); // 使用requestAnimationFrame实现动画效果。
}

drawStars(); // 调用drawStars函数开始绘制星空雨。
