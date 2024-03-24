const varioImage = document.getElementById('varioImage');
function openLink() {
    // Fungsi untuk membuka link, disesuaikan dengan kebutuhan Anda
    window.open('https://www.gridoto.com/read/223645608/seken-keren-honda-vario-150-led-old-pionir-skutik-sporty-150-cc-yang-harga-bekasnya-mulai-rp-15-jutaan', '_blank');
}
function showDescription() {
    var description = document.getElementById("description");
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}
function toggleMusic() {
    var bgMusic = document.getElementById("bgMusic");
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
}