// Mendapatkan elemen-elemen modal
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var caption = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Menambahkan event listener pada gambar
var images = document.querySelectorAll('.gallery-img');

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
    };
});

// Menutup modal saat klik tombol close
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Menutup modal saat klik di luar gambar
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
