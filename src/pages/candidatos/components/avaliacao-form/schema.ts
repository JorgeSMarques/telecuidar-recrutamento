import { z } from 'zod'

export const avaliacaoSchema = z.object({
  valores: z.object({
    humanizacao: z.object({
      valor: z
        .number({ required_error: 'Obrigatório' })
        .min(1, 'Este campo é obrigatório.')
        .default(0),
      exp: z.string().max(200, 'Máximo de 200 caracteres').optional(),
    }),
    racionalidade: z.object({
      valor: z
        .number({ required_error: 'Obrigatório' })
        .min(1, 'Este campo é obrigatório.')
        .default(0),
      exp: z.string().max(200, 'Máximo de 200 caracteres').optional(),
    }),
    economicidade: z.object({
      valor: z
        .number({ required_error: 'Obrigatório' })
        .min(1, 'Este campo é obrigatório.')
        .default(0),
      exp: z.string().max(200, 'Máximo de 200 caracteres').optional(),
    }),
    competencia: z.object({
      valor: z
        .number({ required_error: 'Obrigatório' })
        .min(1, 'Este campo é obrigatório.')
        .default(0),
      exp: z.string().max(200, 'Máximo de 200 caracteres').optional(),
    }),
    cidadania: z.object({
      valor: z
        .number({ required_error: 'Obrigatório' })
        .min(1, 'Este campo é obrigatório.')
        .default(0),
      exp: z.string().max(200, 'Máximo de 200 caracteres').optional(),
    }),
  }),
  competencia: z.object({
    experiencia: z
      .string()
      .min(10, 'Deve ter no mínimo 10 caracteres.')
      .max(500, 'Máximo de 500 caracteres permitido.')
      .default(''),
    experienciaSus: z
      .string()
      .min(10, 'Deve ter no mínimo 10 caracteres.')
      .max(500, 'Máximo de 500 caracteres permitido.')
      .default(''),
    formacao: z
      .string()
      .min(10, 'Deve ter no mínimo 10 caracteres.')
      .max(500, 'Máximo de 500 caracteres permitido.')
      .default(''),
    telemedicina: z
      .string()
      .min(10, 'Deve ter no mínimo 10 caracteres.')
      .max(500, 'Máximo de 500 caracteres permitido.')
      .default(''),
  }),
})

export type AvaliacaoFormData = z.infer<typeof avaliacaoSchema>
