
class Particle {
    constructor(i, x, y, R, G, B) {
        this.i = i;
        this.x = x;
        this.y = y;
        this.r = 1;
        this.netv = Math.random() * (max_particle_netspeed - min_particle_netspeed) + min_particle_netspeed;
        this.angle = Math.random() * 2 * Math.PI;
        this.xv = this.netv * Math.cos(this.angle);
        this.yv = this.netv * Math.sin(this.angle);
        this.R = R;
        this.G = G;
        this.B = B;
        this.alpha = 1;
    }

    show() {
        context.fillStyle = `rgba(${this.R}, ${this.G}, ${this.B}, ${this.alpha})`;
        context.beginPath();
        context.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
        context.fill();
        this.alpha -= particle_decay_rate;
    }

    move() {
        this.xv *= 1 - particle_air_friction_coefficient;
        this.x += this.xv;
        this.yv *= 1 - particle_air_friction_coefficient;
        this.y += this.yv + particle_constant_yv;
    }

    die() {
        if (this.alpha < 0) {
            particles.splice(this.i, 1);
        }
    }

}