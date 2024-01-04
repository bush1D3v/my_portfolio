import axios from "axios";

import { ContactProps } from "../schemas";

export default async function contactSubmit(
  data: ContactProps,
): Promise<boolean> {
  try {
    await axios.post("https://formspree.io/f/xzbnbrdj", {
      nome: data.nome,
      email: data.email,
      mensagem: data.mensagem
    });

    return true;
  } catch (error) {
    alert("Erro no envio da mensagem! Tente novamente mais tarde.");
    return false;
  }
}
