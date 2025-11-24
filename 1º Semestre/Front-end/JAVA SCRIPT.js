<!-- JavaScript -->
    <script>
        // Função para mostrar mensagem ao clicar nos botões
        function mostrarMensagem(esporte) {
            alert("Você clicou em mais informações sobre " + esporte + "!");
        }

        // Validação do formulário de contato
        document.getElementById("formContato").addEventListener("submit", function(event) {
            event.preventDefault(); // impede envio automático

            let nome = document.getElementById("nome").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensagem = document.getElementById("mensagem").value.trim();

            if (nome === "" || email === "" || mensagem === "") {
                document.getElementById("msgContato").textContent = "⚠️ Preencha todos os campos!";
                document.getElementById("msgContato").style.color = "red";
            } else {
                document.getElementById("msgContato").textContent = "✅ Mensagem enviada com sucesso!";
                document.getElementById("msgContato").style.color = "green";
            }
        });