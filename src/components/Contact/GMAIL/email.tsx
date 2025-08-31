import React, { useState } from "react";
import emailjs from "emailjs-com";

export function contactEmail() {
     const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "seu_service_id",
      "seu_template_id",
      { message },
      "sua_public_key"
    )
    .then(() => alert("Mensagem enviada com sucesso!"))
    .catch(() => alert("Erro ao enviar mensagem"));
  };

};