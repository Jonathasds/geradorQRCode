const input = document.querySelector('input');
const qrcode = document.querySelector('#qrcode')


function gerarQr() {
    genQRCode()
}

function limpar() {
    if (!input.value, !qrcode.src) return
    input.value = ' '
    qrcode.src = ' '
}

function genQRCode() {
    if (!input.value) return;
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}