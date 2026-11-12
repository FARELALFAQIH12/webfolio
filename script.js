
// ===============================
// NAVBAR MOBILE
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    menuToggle.textContent =
        navMenu.classList.contains("show") ? "✕" : "☰";

});


// Menutup menu setelah memilih navigasi

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuToggle.textContent = "☰";

    });

});


// ===============================
// PILIH PAKET HARGA
// ===============================

const packageButtons = document.querySelectorAll(".choose-package");

const packageSelect = document.getElementById("customerPackage");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPackage = button.dataset.package;

        packageSelect.value = selectedPackage;

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// FORM PEMESANAN WHATSAPP
// ===============================

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();

    const email = document.getElementById("customerEmail").value.trim();

    const selectedPackage = packageSelect.value;

    const message = document.getElementById("customerMessage").value.trim();


    if (!name || !email || !selectedPackage || !message) {

        alert("Mohon lengkapi seluruh formulir!");

        return;

    }


    // GANTI DENGAN NOMOR WHATSAPP ANDA
    // Gunakan kode negara tanpa tanda + dan tanpa angka 0 di depan.

    const whatsappNumber = "6285165529568";


    const text =

`Halo PortoCraft Studio!

Saya ingin memesan jasa pembuatan website portofolio.

Nama: ${name}

Email: ${email}

Paket: ${selectedPackage}

Deskripsi kebutuhan:
${message}

Mohon informasi lebih lanjut.

Terima kasih.`;


    const whatsappURL =

        "https://wa.me/" + whatsappNumber +

        "?text=" + encodeURIComponent(text);


    window.open(whatsappURL, "_blank");

});


// ===============================
// TAHUN OTOMATIS FOOTER
// ===============================

document.getElementById("year").textContent =

    new Date().getFullYear();


// ===============================
// ANIMASI SCROLL
// ===============================

const revealElements = document.querySelectorAll(

    ".hero-text, .hero-visual, .about-box, .service-card, .portfolio-card, .price-card, .contact-form"

);


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.12

});


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
