# Prueba Tecnica React

## Vite Project
***
Project created with Vite

## Installation
***
If you want clone this project. 
```
$ git clone https://github.com/Dan33311/prueba-tecnica-react.git
$ cd ../path/to/the/file
$ npm install
$ npm run dev
```

## Technologies
***
A list of technologies used within the project:

* [React Router](https://reactrouter.com/) - React Router v6
* [dayjs](https://day.js.org/) - Fast 2kB alternative to Moment.js with the same modern API
* [Bootstrap](https://getbootstrap.com/) - The most popular CSS Framework for developing responsive and mobile-first websites.
* [Bootstrap Icons](https://icons.getbootstrap.com/) - Open source icon library

## Mis notas
***
### Vista 1
***
✅ Validaciones en los input
⚠ Para indicar hora especifica: (00horas:00minutos) (formato 24h)
* Primero se debe seleccionar la fecha (dia), despues volver al input de fecha,
* Ya se podra configurar la hora, seguir estas recomendaciones ->
* Para indicar minutos: Colocar el cursor a la izquierda de minutos, ingresar numero de 0 - 5, colocar el cursor a la izquierda de minutos nuevamente, ingresar numero de 0 - 9,
* Para indicar hora: Colocar el cursor a la izquierda de hora, ingresar numero de 0 - 2, colocar el cursor a la izquierda de hora nuevamente, ingresar numero de 0 - 9*, dependiendo.

✅ Redireccionamiento a vista 2

### Vista 2
***
✅ Mensaje de bienvenida
✅ Contador
💬 Redireccionamiento: Al momento de terminar el conteo, no es posible redireccionar a vista 3, el componente `components/CountdownTimer/CountdownTimerUtils` no me permitio utilizar Hooks.

### Vista 3
***
`Para poder visualizar esta vista, se debe cambiar dos lineas en el codigo -> archivo FormComponent.jsx -> handleFormSubmit -> comentar linea 74 navigate('/countdown') -> descomentar linea 75 navigate('/about') -> ir a vista 1, completar el formulario y al submit te redirigira a vista 3`

✅ Visualizacion de informacion mediante la API `https://restcountries.com `
💬 mostrar imagenes por la API `https://serpapi.com` pendiente

### Requerimientos Técnicos:
***
✅ 1. Uso de datetimepicker
✅ 2. Realizar validación del formulario 
✅ 3. Utilizar React router v6
✅ 4. Emplear redux o context api
✅ 5. Emplear solo componentes funcionales y custom hooks
💬 6. El {developerApiKey}
✅ 7. Usar vite.js
✅ 8. La app debe ser responsive

### Criterios de aceptación
***
💬 Trabajando en ellos, ya que el error de no poder usar Hooks en el archivo de countdownTimer, no me permite cumplir los criterios por el momento.

<!-- Side information: Running on Heroku that will allow us to use the application. -->

<!-- https://markdown-fighting-games-events.herokuapp.com/ -->