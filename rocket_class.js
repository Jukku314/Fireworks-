

class Rocket {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.yv = -((max_rocket_yv - min_rocket_yv) * Math.random() + min_rocket_yv);
        this.r = 2;
        this.R = Math.random() * 255;
        this.G = Math.random() * 255;
        this.B = Math.random() * 255;
    }

    show() {
        context.fillStyle = `rgb(${this.R}, ${this.G}, ${this.B})`;
        context.beginPath();
        context.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
        context.fill();
    }

    move() {
        this.yv += rocket_gravity;
        this.y += this.yv;
    }

    check_for_explode() {
        if (this.yv > 0) {
            // explode particles
            for (let p = 0; p < particles_per; p++) {
                particles.push(new Particle(p, this.x, this.y, this.R, this.G, this.B))
            }
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.yv = -((max_rocket_yv - min_rocket_yv) * Math.random() + min_rocket_yv);
            this.r = 2;
            this.R = Math.random() * 255;
            this.G = Math.random() * 255;
            this.B = Math.random() * 255;
        }
    }

}