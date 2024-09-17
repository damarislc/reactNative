# e-Commerce Ferrek - React Native

Aplicación móvil utilizando React Native para un negocio de ferretería.

## Tecnología utilizada

- **Firebase Realtime Database** para el almacenamiento de la aplicación.
- **Firebase Authentication** para gestoinar el acceso de lo usuarios creando el registro e inicio se sesión con correo y contraseña.
- **Redux** para gestionar los esados de la aplicación.
- **React Native Navigation Stack** para la navegación de las pantallas.
- **React Native Bottom Taps** para el menu de navegación por pestañas.
- **SQLite** para almacenar la sesión vigente.
- **Expo Location** para gestionar la ubicación del usuario.
- **Expo Picker Image** para tomar la imagen del perfil.

## Instalación

1. Clonar el repositorio con el comando: `git clone https://github.com/damarislc/reactNative.git`
2. Intalar las dependencias: `npm install`
3. Ejecuta la aplicación: `npm start`

## Menu de la aplicación

La aplicación cuenta con 4 secciones principales:

- **Inicio:** sección donde se encuentran todos los artículos a comprar, divididos por categorías.
- **Carrito:** sección donde se encuentra los artículos añadidos al carrito, antes de comprarlos.
- **Ordenes:** sección donde se encuentras todas las órdenes de las compras realizadas.
- **Perfil:** perfil del usuario que contiene la foto y ubicación del mismo.

A su vez, la aplicación cuenta con la pantalla de logueo y registro para cuando no se ha iniciado sesión en la aplicación.

### Pantalla de Registro

La pantalla cuenta con 3 campos:

- email
- password
- confirmar password

Los campos contienen las siguientes validaciones:

- Si el email no es válido, manda un mensaje de error.
- La contraseña debe contener al menos 6 caracteres, una mayuscula, una minuscula y un numero.
- Las contraseñas deben coincidir.
- Todos los campos son obligatorios.
- Si el email ya está registrado, manda un mensaje de que ya se registró.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726602982/React%20Native/Captura_de_pantalla_2024-09-17_155540_ajpiau.png" width="300" alt="Imagen">

### Pantalla de Inicio de sesión

La pantalla cuenta con 2 campos:

- email
- password

La contraseña está por defecto configurada para que no se vea el texto pero podemos cambiarlo con el ícono del "ojo" para darle visibilidad.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726603269/React%20Native/Captura_de_pantalla_2024-09-17_160100_lsse7x.png" width="300" alt="Imagen">

### Pantalla de Inicio

En esta pantalla se muestra el listado de todas las categorías del negocio.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726603428/React%20Native/Captura_de_pantalla_2024-09-17_160339_vafv4s.png" width="300" alt="Imagen">

Al seleccionar una categoría, te mueve a los productos de dicha categoría.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726603508/React%20Native/Captura_de_pantalla_2024-09-17_160458_j4vmbb.png" width="300" alt="Imagen">

Y al seleccionar un producto, podemos ver el detalle del mismo.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726603555/React%20Native/Captura_de_pantalla_2024-09-17_160548_v6bxrr.png" width="300" alt="Imagen">

### Pantalla de Carrito

A esta pantalla podemos llegar al seleccionar del menú inferior el botón de "Carrito", cuando este está vacío, nos muestra un mesaje de que no hay productos en el.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726603643/React%20Native/Captura_de_pantalla_2024-09-17_160716_t49kk8.png" width="300" alt="Imagen">

También, al estar dentro del detalle de un producto y darle clic al botón de "Comprar", inmediatamente nos mueve a la pantalla del carrito con dicho producto en el.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726603723/React%20Native/Captura_de_pantalla_2024-09-17_160824_f7sosd.png" width="300" alt="Imagen">

Si quisieramos agregar otro producto del mismo, hay que regresar al producto y añadirlo nuevamente. (Se tiene contemplado un contador dentro del carrito para una versión futura.)
Y en el carrito podemos ver que se suma la cantidad del producto y el total del carrito.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726603865/React%20Native/Captura_de_pantalla_2024-09-17_161006_e5gm3n.png" width="300" alt="Imagen">

### Pantalla de Ordenes

La pantalla de Órdenes se llega a través del botón de Ordenes del menú inferior, si no existe ninguna órden, nos mostrará un mensaje de que no se ha realizado ninguna.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604095/React%20Native/Captura_de_pantalla_2024-09-17_161447_zxzxut.png" width="300" alt="Imagen">

Podemos finalizar una orden al confirmar la compra dentro del carrito, y esta nos mandará directamente a la pantalla de las órdenes.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604194/React%20Native/Captura_de_pantalla_2024-09-17_161615_o3buvg.png" width="300" alt="Imagen">

Podemos ver el detalle de la orden al hacer clic en el ícono de ver detalle de la orden.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604238/React%20Native/Captura_de_pantalla_2024-09-17_161711_elxjid.png" width="300" alt="Imagen">

### Pantalla de Perfil

Esta pantalla se llega al hacer clic en el botón de Perfil del menú inferior.

Recién se crea la cuenta, el perfil no contendrá imágen ni ubicación.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604369/React%20Native/Captura_de_pantalla_2024-09-17_161916_wweirh.png" width="300" alt="Imagen">

Podemos añadir una imagen haciendo clic en el botón de "Cambiar imagen" y nos llevará a la pantalla para elegir "Tomar foto".

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604432/React%20Native/Captura_de_pantalla_2024-09-17_162026_eadkgc.png" width="300" alt="Imagen">

La primera vez que se acceda a esta funcionalidad, nos pregunstará que queremos permitir que la aplicación haga fotos y que si queremos permitir el acceso a contenido multimedia. Hay que darle en el botón "Permitir"

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604518/React%20Native/Captura_de_pantalla_2024-09-17_162058_lbkkoi.png" width="300" alt="Imagen">

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604568/React%20Native/Captura_de_pantalla_2024-09-17_162242_sias7o.png" width="300" alt="Imagen">

Una vez tomada la foto, nos eseñará una imagen previa para saber si confirmar o tomar nuevamente, al darle en "Confirmar, nos guardará la imagen en nuestro perfil.

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604699/React%20Native/Captura_de_pantalla_2024-09-17_162444_r4hokr.png" width="300" alt="Imagen">
<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726604702/React%20Native/Captura_de_pantalla_2024-09-17_162452_hkprn9.png" width="300" alt="Imagen">

Para agregar una ubicación, hay que hacer clic en el botón "Agregar ubicación". La primera vez que acceda a la aplicación preguntará si queremos darle los permisos y seleccionaremos "Permitir". Una vez cargada la ubicación, nos enseñará un mapa con la ubicación encontrada. (Tacheando la dirección por cuestiones de privacidad)

<img src="https://res.cloudinary.com/doxztm7ed/image/upload/v1726605625/React%20Native/WhatsApp_Image_2024-09-17_at_4.39.32_PM_iclidk.jpg" width="300" alt="Imagen">
