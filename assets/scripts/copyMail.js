//para Copiar el texto del correo
function copiarTexto() {
    let copiedMail = document.getElementById("mailText");
    let tempInput = document.createElement("textarea");
    tempInput.value = copiedMail.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    //TODO: añadir elementos que digan Copiar (hover) y copiado (una vez
    //realizada la acción)
  }