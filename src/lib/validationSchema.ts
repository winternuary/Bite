import { z } from "zod";

export const uploadSchema = z.object({
  title: z.string().min(1, "*제품 이름은 필수입니다."),
  description: z.string().min(1, "*설명은 필수입니다."),
  price: z
    .string()
    .min(1, "*가격을 입력해주세요.")
    .refine((val) => !isNaN(Number(val)), "*숫자로 입력해주세요."),
  people: z
    .string()
    .min(1, "*인원수를 입력해주세요.")
    .refine((val) => !isNaN(Number(val)), "*숫자로 입력해주세요."),
  link: z.string().optional(),
});
