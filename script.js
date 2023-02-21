// get location button onclick
const openLocation = document.querySelector('.get-location');
openLocation.addEventListener('click', () => {
    window.location.href = 'https://goo.gl/maps/oHbVDXoPLiLwnfFV6';
});

// copy number mandiri bank virtual account button onclick
const btnCopyMandiri = document.querySelector('.btn-mandiri');
const btnTextMandiri = `<i class="fa-solid fa-copy"></i> Salin Nomor`;
const copiedTextMandiri = `<i class="fa-solid fa-copy"></i> Berhasil Di Salin`;

const spaceTextMandiri = setInterval(function () {
    btnCopyMandiri.addEventListener('click', function () {
        const mandiriNumber = document.querySelector('.mandiri-number').innerHTML;
        navigator.clipboard.writeText(mandiriNumber);

        btnCopyMandiri.innerHTML = copiedTextMandiri;
    });

    if (btnTextMandiri != copiedTextMandiri) {
        clearInterval();
        btnCopyMandiri.innerHTML = btnTextMandiri;
    };

}, 2000);

// copy number bni bank virtual account button onclick
const btnCopyBni = document.querySelector('.btn-bni');
const btnTextBni = `<i class="fa-solid fa-copy"></i> Salin Nomor`;
const copiedTextBni = `<i class="fa-solid fa-copy"></i> Berhasil Di Salin`;

const spaceTextBni = setInterval(function () {
    btnCopyBni.addEventListener('click', function () {
        const bniNumber = document.querySelector('.bni-number').innerHTML;
        navigator.clipboard.writeText(bniNumber);

        btnCopyBni.innerHTML = copiedTextBni;
    });

    if (btnTextBni != copiedTextBni) {
        clearInterval();
        btnCopyBni.innerHTML = btnTextBni;
    };

}, 2000);

// copy number bca bank virtual account button onclick
const btnCopyBca = document.querySelector('.btn-bca');
const btnTextBca = `<i class="fa-solid fa-copy"></i> Salin Nomor`;
const copyTextBca = `<i class="fa-solid fa-copy"></i> Berhasil Di Salin`;

const spaceTextBca = setInterval(function () {
    btnCopyBca.addEventListener('click', function () {
        const bcaNumber = document.querySelector('.bca-number').innerHTML;
        navigator.clipboard.writeText(bcaNumber);

        btnCopyBca.innerHTML = copyTextBca;
    });

    if (btnTextBca != copyTextBca) {
        clearInterval();
        btnCopyBca.innerHTML = btnTextBca;
    };

}, 2000);

// copy number bri bank virtual account button onclick
const btnCopyBri = document.querySelector('.btn-bri');
const btnTextBri = `<i class="fa-solid fa-copy"></i> Salin Nomor`;
const copyTextBri = `<i class="fa-solid fa-copy"></i> Berhasil Di Salin`;

const spaceTextBri = setInterval(function () {
    btnCopyBri.addEventListener('click', function () {
        const briNumber = document.querySelector('.bri-number').innerHTML;
        navigator.clipboard.writeText(briNumber);

        btnCopyBri.innerHTML = copyTextBri;
    });

    if (btnTextBri != copyTextBri) {
        clearInterval();
        btnCopyBri.innerHTML = btnTextBri;
    };

}, 2000);

// copyright year info
function displayCopyright() {
    let years = document.querySelector('.years'),
        date = new Date(), year;
    year = date.getFullYear();

    years.innerHTML = `${year}`;
}
displayCopyright();