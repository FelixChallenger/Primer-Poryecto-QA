# Proyecto de Inicio de Sesión con Pruebas Automatizadas

Este proyecto incluye una página de inicio de sesión básica desarrollada en HTML, CSS y JavaScript, junto con pruebas automatizadas usando Selenium y Node.js. Es ideal para demostrar habilidades en desarrollo frontend básico y automatización de pruebas para aseguramiento de calidad.

## Características
- **Formulario de inicio de sesión** con validación de campos vacíos.
- **Mensajes de error** al ingresar credenciales incorrectas.
- **Pruebas automatizadas** para verificar la funcionalidad de inicio de sesión utilizando Selenium WebDriver.

## Estructura del Proyecto...

- `index.html`: Página de inicio de sesión.
- `style.css`: Estilos básicos para la página de inicio de sesión.
- `script.js`: Funcionalidad JavaScript para validar el formulario.
- `tests/`: Carpeta de pruebas.
  - `manual/test-cases.md`: Casos de prueba manuales.
  - `Automated/login-test.js`: Archivo de pruebas automatizadas con Selenium.

## Prerrequisitos
Para ejecutar este proyecto y sus pruebas, necesitarás:
- **Node.js** (instalación recomendada: [Node.js](https://nodejs.org/))
- **Git** (para clonar el repositorio, opcional)
- **Navegador Chrome** (o el navegador que prefieras, junto con su respectivo WebDriver)

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL del repositorio>
   cd project-login
   ```

2. **Instalar Node.js y dependencias del proyecto**
   Asegúrate de tener Node.js instalado. Luego, en la carpeta del proyecto, instala las dependencias:

   ```bash
   npm init -y
   npm install selenium-webdriver
   ```

3. **Configurar el WebDriver para Chrome**
   - Descarga el [ChromeDriver](https://sites.google.com/chromium.org/driver/) adecuado para tu versión de Chrome.
   - Descomprime el archivo y coloca el ejecutable en la carpeta del proyecto (o en cualquier carpeta accesible en tu sistema).

4. **Actualizar la PATH del Sistema (opcional)**
   Si deseas que ChromeDriver esté disponible en cualquier terminal, agrega la carpeta donde lo colocaste a la variable PATH de tu sistema.

## Ejecución de Pruebas Automatizadas

1. **Abrir la terminal** y navegar hasta la carpeta `tests`.

2. **Ejecutar el script de prueba con Node.js**:
   ```sh
   node login-test.js
   ```

3. **Resultados de las pruebas**:
   - El terminal mostrará los resultados de las pruebas, indicando si cada una ha pasado o fallado.

## Casos de Prueba

- **Inicio de sesión exitoso**: Verifica que el formulario de inicio de sesión funcione con credenciales válidas.
- **Error en credenciales**: Prueba la respuesta del formulario con credenciales incorrectas.
- **Campos vacíos**: Asegura que el formulario no se envía si los campos están vacíos.

## Futuras Mejoras
Este proyecto es una base sobre la cual se puede mejorar agregando:
- Pruebas para navegadores adicionales.
- Más casos de prueba para robustecer la validación del formulario.
```

