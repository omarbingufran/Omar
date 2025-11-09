const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
const particleCount = window.innerWidth < 768 ? 40 : 90; 
const maxDistance = 130; 
const pink = "rgba(255, 84, 220, 0.85)";
const white = "rgba(255, 255, 255, 0.2)";
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = white;
        ctx.shadowBlur = 12;
        ctx.shadowColor = pink;
        ctx.fill();
    }
}
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}
function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < maxDistance) {
                ctx.strokeStyle = "rgba(255, 84, 127, 0.30)"; 
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
}
animate();