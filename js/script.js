const projectCarousels = document.querySelectorAll("[data-carousel]");

projectCarousels.forEach(function (carousel) {
    const images = carousel.querySelectorAll(".project-image");
    const previousButton = carousel.querySelector(".previous");
    const nextButton = carousel.querySelector(".next");
    const counter = carousel.querySelector(".carousel-count");
    let currentImage = 0;

    function showImage(imageIndex) {
        currentImage = (imageIndex + images.length) % images.length;

        images.forEach(function (image, index) {
            image.classList.toggle("active", index === currentImage);
        });

        counter.textContent = (currentImage + 1) + " / " + images.length;
    }

    previousButton.addEventListener("click", function () {
        showImage(currentImage - 1);
    });

    nextButton.addEventListener("click", function () {
        showImage(currentImage + 1);
    });
});
