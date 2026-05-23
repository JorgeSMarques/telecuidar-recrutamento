export const validators = {
  required: (val: any): { isValid: boolean; message: string } => ({
    isValid: val !== undefined && val !== null && String(val).trim() !== '',
    message: 'Campo obrigatório',
  }),
  email: (val: string): { isValid: boolean; message: string } => ({
    isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: 'E-mail deve ser válido',
  }),
  phoneBR: (val: string): { isValid: boolean; message: string } => ({
    isValid: /^\(\d{2}\) \d{4,5}-\d{4}$/.test(val),
    message: 'Deve ser no formato (XX) XXXXX-XXXX',
  }),
  linkedin: (val: string): { isValid: boolean; message: string } => ({
    isValid: val === '' || /^https:\/\/(www\.)?linkedin\.com/.test(val),
    message: 'URL deve ser do LinkedIn',
  }),
  numberRange: (
    val: number,
    min: number = 0,
    max: number = 10,
  ): { isValid: boolean; message: string } => ({
    isValid: val >= min && val <= max,
    message: `O valor deve estar entre ${min} e ${max}`,
  }),
  minDate: (
    val: string,
    minDate: Date = new Date('2026-05-24T00:00:00'),
  ): { isValid: boolean; message: string } => ({
    isValid: new Date(val) >= minDate,
    message: 'Data não pode ser no passado',
  }),
  time: (val: string): { isValid: boolean; message: string } => ({
    isValid: /^([01]\d|2[0-3]):([0-5]\d)$/.test(val),
    message: 'Hora deve estar no formato HH:mm',
  }),
  length: (
    val: string,
    min: number = 0,
    max: number = Infinity,
  ): { isValid: boolean; message: string } => ({
    isValid: val.length >= min && val.length <= max,
    message: `Tamanho deve ter entre ${min} e ${max} caracteres`,
  }),
}
