/*!
 * Script para copiar o E-mail
 */

function copyEmail() {
    navigator.clipboard.writeText("pb948697@gmail.com");
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
