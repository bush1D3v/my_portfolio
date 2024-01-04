import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().min(3, { message: "Este campo deve possuir pelo menos 3 letras" })
    .max(50, { message: "Este campo deve possuir no máximo 50 letras" }),
  email: z.string().email("Este não é um e-mail válido"),
  mensagem: z.string().min(50, "Este campo deve possuir pelo menos 50 letras")
    .max(500, "Este campo deve possuir no máximo 500 letras"),
});

export type ContactProps = z.infer<typeof contactSchema>;
