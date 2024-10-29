document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrixCanvas');
    console.log('Canvas element:', canvas);
    if (!canvas) {
        console.error('Matrix canvas element not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    console.log('Canvas context:', ctx);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width/fontSize;

    const rainDrops = [];

    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for(let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i*fontSize, rainDrops[i]*fontSize);
            
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    setInterval(draw, 30);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});