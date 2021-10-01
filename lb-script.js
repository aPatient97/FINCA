//lightbox - images enlarge on click

//Create the div, asign it an ID of lightbox and append it to the body of the page
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

//add class of active to the lightbox
// lightbox.classList.add('active');

//select all images, run a loop to add the active class to imgs once clicked upon

const images = document.querySelectorAll('img');

images.forEach(image =>  {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const newImg = document.createElement('img'); //Create image and set the source as the same as original image
        newImg.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        };
        newImg.classList.add('newImg');
        lightbox.appendChild(newImg);

    })
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
})




