import { object, string } from "yup";

export const loginSchema = object({
  password: string()
    .required("La contraseña es requerida")
    .min(6, "Minimo debe de tener 6 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Debe contener al menos una mayuscula, una minuscula y un numero"
    ),
  email: string()
    .required("El email es requerido")
    .email("Tiene que ser un email valido"),
});
