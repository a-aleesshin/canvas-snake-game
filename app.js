const game = {
    start: function () {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        const bg = new Image();
        bg.src = 'img/background.png';
        bg.addEventListener('load', () => {
            window.requestAnimationFrame(() => {
                context.drawImage(bg, 0, 0);
            });
        });

        console.log(bg);
    }
};

game.start();
