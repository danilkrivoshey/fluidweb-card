window.addEventListener('resize', main);
window.addEventListener('load', main);

function main() {
    var canvasWrapper = document.querySelector('.canvas-wrapper');
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

    if (!window.matchMedia('(max-width: 1024px').matches) {
        var scene = document.getElementById("parallax");
        var parallax = new Parallax(scene, {
            relativeInput: true,
        });

        canvasWrapper.classList.add('remove');
    } else {
        canvasWrapper.classList.remove('remove');

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

        var shareButton = document.getElementById('share-btn');

        if (navigator.share && navigator.canShare) {
            shareButton.classList.add("active");
            shareButton.addEventListener('click', function () {
                navigator.share({
                    title: 'WebShare API Demo',
                    url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
                }).then(() => {
                    console.log('Thanks for sharing!');
                }).catch(console.error);
            });
        }
    }
}
