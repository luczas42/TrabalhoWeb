document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    alert("Mensagem enviada com sucesso!"); // Exibe o popup
  });
