const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");
/* eventos */

/* gerar codigo qr code*/

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
   
    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "gerando codigo ...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load" , () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "codigo criado!";
    });
}

qrCodeBtn.addEventListener("keydown" , () => {
    generateQrCode();
});

qrCodeInput.addEventListener("click" , (e) => {
    if (e.code === "Enter"){
        generateQrCode();

    }
    
});

//limpar area do QR Code
qrCodeInput.addEventListener("keyup" , () => {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";

})