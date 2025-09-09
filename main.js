// Arquivo principal do site DSMTV
// Aqui será implementada a lógica de interatividade e exportação de relatórios

// Função para exportar relatório (exemplo simples)
function exportarRelatorio() {
    const conteudo = document.getElementById('conteudo-relatorio').innerText;
    const blob = new Blob([conteudo], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'relatorio_dsmtv.txt';
    link.click();
}

// Função para abrir WhatsApp
function entrarWhatsapp() {
    window.open('https://wa.me/48 996753619', '_blank');
}

// Função para abrir email
function entrarEmail() {
    window.open('lucasmendes.dl15@gmail.com', '_blank');
}

// Exemplo de interatividade: alternar abas
function mostrarAba(aba) {
    document.querySelectorAll('.aba').forEach(el => el.style.display = 'none');
    document.getElementById(aba).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarAba('canais');
});
