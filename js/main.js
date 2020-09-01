window.addEventListener('resize', main);
window.addEventListener('load', main);

var granimInstance = new Granim({
    element: '#granim-canvas',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#f1e5e8', '#e7edff'],
                ['#cde8fa', '#f2f5e3'],
                ['#edebfc', '#f1e5e8'],
            ],
            transitionSpeed: 2000
        }
    }
});

function main() {
    var canvasWrapper = document.querySelector('.canvas-wrapper');

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

    var shareButton = document.getElementById('share-btn');

    if (navigator.share) {
        shareButton.classList.add("active");
        shareButton.addEventListener('click', function () {
            navigator.share({
                title: 'Follow the link to contact information \n Maryna Kisil',
                text: 'Follow the link to contact information \n Maryna Kisil',
                url: 'https://danilkrivoshey.github.io/fluidweb-card/'
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(console.error);
        });
    }

    var scene = document.getElementById("parallax");
    var parallax = new Parallax(scene, {
        relativeInput: true,
    });

    if (!window.matchMedia('(max-width: 1024px').matches) {
        canvasWrapper.classList.add('remove');
    } else {
        canvasWrapper.classList.remove('remove');
    }
}
