var scene = document.getElementById("parallax");
var parallax = new Parallax(scene, {
    relativeInput: true,
});

var shareButton = document.getElementById('share-btn');
// var shareDialog = document.querySelector('.share-dialog');
// var shareDialogCopyStatus = shareDialog.querySelector('.share-dialog__copy');
// var shareDialogSocNetBtn = shareDialog.querySelectorAll('.share-dialog__button');
// var shareDialogMainLink = shareDialog.querySelector('.share-dialog__main-link');
// var closeButton = document.querySelector('.share-dialog .close-btn');

// var overlay = document.querySelector('.overlay');

if (navigator.share) {
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

// closeButton.addEventListener('click', function () {
//     shareDialog.classList.remove('is-open');
//     overlay.classList.remove('active');
// });

// shareDialogMainLink.addEventListener('click', function (e) {
//     var link = shareDialogMainLink.textContent;
//     copyLinkHandler(e, link);
// });

// for (var i = 0; i < shareDialogSocNetBtn.length; i++) {
//     var btn = shareDialogSocNetBtn[i];

//     btn.addEventListener('click', function (e) {
//         var link = btn.dataset.netLink;
//         copyLinkHandler(e, link);
//     });
// }

// function copyLinkHandler(e, link) {
//     e.preventDefault();
//     // Create a dummy input to copy the string array inside it
//     var dummy = document.createElement("input");
//     // Add it to the document
//     document.body.appendChild(dummy);
//     // Set its ID
//     dummy.setAttribute("id", "dummy_id");
//     // Output the array into it
//     document.getElementById("dummy_id").value = link;
//     // Select it
//     dummy.select();
//     // Copy its contents
//     document.execCommand("copy");
//     // Remove it as its not needed anymore
//     document.body.removeChild(dummy);

//     shareDialogCopyStatus.classList.add('show');

//     setTimeout(function () {
//         shareDialogCopyStatus.classList.remove('show');
//     }, 1500);
// }