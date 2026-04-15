function celebrate() {
    // Adding zIndex: 9999 ensures it floats ABOVE your HTML and Canvas
    confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.7 },
        colors: ['#ff0077','#92ff83', '#00f2ff','#FAFF75', '#ffffff'],
        zIndex: 9999 
    });
}
window.addEventListener('keydown', e => { if(e.key.toLowerCase()==='p') celebrate(); });