function handleFormSubmit(event) {
    event.preventDefault();
    const messageEl = document.getElementById('form-message');
    messageEl.textContent = 'Obrigado pelo contato! Responderemos você em breve.';
    messageEl.classList.remove('hidden');
    
    setTimeout(() => {
        // Limpa o formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('mensagem').value = '';
        
        // Esconde a mensagem
        messageEl.classList.add('hidden');
    }, 5000);
}

// Inicializa a biblioteca de animação (AOS)
// Isso faz as animações "data-aos" funcionarem
document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
      duration: 800, // Duração da animação em ms
      once: true, // Animar apenas uma vez
  });
});