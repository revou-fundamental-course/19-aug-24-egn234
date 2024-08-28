// Banner
let currentIndex = 0;
let intervalId;

function showSlide(index) {
    const carouselInner = document.querySelector('.banner-inner');
    const totalSlides = document.querySelectorAll('.banner-item').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function autoSlide() {
    intervalId = setInterval(nextSlide, 3000);
}

autoSlide();

// Form Function and Validation
function displayFormResult(event) {
    event.preventDefault();

    const now = new Date();
    const timestamp = now.toLocaleString();

    let name, birthDate, gender, message;
    try {
        name = document.getElementById('nama').value;
        birthDate = document.getElementById('tgl_lahir').value;
        gender = document.querySelector('input[name="jk"]:checked').value;
        message = document.getElementById('pesan').value;
    } catch (error) {
        if (error.message.includes('null')) {
            alert('Harap isi semua form nya terlebih dahulu');
            return;
        }
        throw error;
    }

    // doublecheck validation if there's an error after the try block
    if (!name || !birthDate || !gender || !message) {
        alert('Harap isi semua form nya terlebih dahulu');
        return;
    }

    const result = `
        <b>Timestamp</b>: ${now.toUTCString()}<br><br><br><br>
        <b>Nama</b>: ${name}<br>
        <b>Tanggal Lahir</b>: ${birthDate}<br>
        <b>Jenis Kelamin</b>: ${gender}<br>
        <b>Pesan</b>: ${message}<br>
    `;
    document.getElementById('form-result').innerHTML = result;
}

// document.getElementById('submitForm').addEventListener('click', displayFormResult);
