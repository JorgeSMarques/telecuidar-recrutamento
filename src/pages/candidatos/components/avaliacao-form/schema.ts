import { z } from 'zod'

export const avaliacaoSchema = z.object({
  valores: z.object({
    humanizacao: z.object({
      valor: z.number().min(1, 'Obrigatório').default(0),
      exp: z.string().max(200).optional(),
    }),
    racionalidade: z.object({
      valor: z.number().min(1, 'Obrigatório').default(0),
      exp: z.string().max(200).optional(),
    }),
    economicidade: z.object({
      valor: z.number().min(1, 'Obrigatório').default(0),
      exp: z.string().max(200).optional(),
    }),
    competencia: z.object({
      valor: z.number().min(1, 'Obrigatório').default(0),
      exp: z.string().max(200).optional(),
    }),
    cidadania: z.object({
      valor: z.number().min(1, 'Obrigatório').default(0),
      exp: z.string().max(200).optional(),
    }),
  }),
  competencia: z.object({
    experiencia: z
      .string()
      .min(10, 'Mínimo 10 caracteres')
      .max(500, 'Máximo 500 caracteres')
      .default(''),
    experienciaSus: z
      .string()
      .min(10, 'Mínimo 10 caracteres')
      .max(500, 'Máximo 500 caracteres')
      .default(''),
    formacao: z
      .string()
      .min(10, 'Mínimo 10 caracteres')
      .max(500, 'Máximo 500 caracteres')
      .default(''),
    telemedicina: z
      .string()
      .min(10, 'Mínimo 10 caracteres')
      .max(500, 'Máximo 500 caracteres')
      .default(''),
  }),
})

export type AvaliacaoFormData = z.infer<typeof avaliacaoSchema>
