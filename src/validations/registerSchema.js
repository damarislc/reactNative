import { object, ref, string } from "yup";

export const registerSchema = object({
  confirmPassword: string()
    .required("Es requerido")
    .oneOf([ref("password"), null], "las contraseñas no coinciden"),
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
