const canvas = document.getElementById("Fireworks");
const context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

rockets = [];
particles = [];

const num_of_rockets = 10;
const rocket_gravity = 0.2;
const min_rocket_yv = 4;
const max_rocket_yv = 16;

const particles_per = 200;
const min_particle_netspeed = 0.01;
const max_particle_netspeed = 5;
const particle_constant_yv = 1;
const particle_air_friction_coefficient = 0.05; 
const particle_decay_rate = 0.015;

for (let i = 0; i < num_of_rockets; i++) {
    rockets.push(new Rocket());
}

const draw = () => {

    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rockets.length; i++) {
        rockets[i].move();
        rockets[i].check_for_explode();
        rockets[i].show();
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].move();
        particles[i].die();
        particles[i].show();
    }
    console.log(particles.length);
}

setInterval(draw, 20);