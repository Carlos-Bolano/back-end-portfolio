import { z } from "zod";

export const personSchema = z.object({
  name: z
    .string({
      required_error: "nombre es requerido",
    })
    .min(2, { message: "nombre debe ser por lo menos de 2 caracteres" }),
  message: z.string({
    required_error: "mensaje es requerida",
  }),
  email: z
    .string({
      required_error: "email es requerido",
    })
    .email({
      message: "email invalido",
    }),
});
