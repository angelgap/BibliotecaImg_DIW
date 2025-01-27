let images = document.querySelectorAll('.image img');
let modal = document.getElementById('modal');
let modalImg = document.getElementById('modalImage');
let closeBtn = document.querySelector('.close');


images.forEach(image => {
    image.onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
});


closeBtn.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
