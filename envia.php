<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pegue os dados do formulário
    $name = htmlspecialchars($_POST['full_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Validação básica (você pode adicionar mais validações se necessário)
    if (empty($name) || empty($email) || empty($message)) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }

    // Envie um email (configure as variáveis conforme necessário)
    $to = "gato.novo18@gmail.com";
    $subject = "Nova mensagem de $name";
    $body = "Nome: $name\nEmail: $email\nTelefone: $phone\n\nMensagem:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
}
?>
