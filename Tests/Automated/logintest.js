// Importa Selenium WebDriver
const { Builder, By, until } = require('selenium-webdriver');

async function runLoginTest() {
  // Crea una nueva instancia del navegador (Chrome, en este caso)
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Abre la página de inicio de sesión
    await driver.get('https://felixchallenger.github.io/Primer-Poryecto-QA/'); 

    // Localiza e ingresa el nombre de usuario
    await driver.findElement(By.id('username')).sendKeys('testuser');

    // Localiza e ingresa la contraseña
    await driver.findElement(By.id('password')).sendKeys('testpass');

    // Localiza y hace clic en el botón de inicio de sesión
    await driver.findElement(By.id('loginButton')).click();

    // Espera hasta que aparezca un mensaje de bienvenida o la redirección
    //let successMessage = await driver.wait(
      //until.elementLocated(By.id('welcomeMessage')), 5000
    //);

    //Obtén el texto del mensaje de bienvenida y verifica que sea correcto
    let messageText = await successMessage.getText();
    if (messageText === "Welcome") {
      console.log("Prueba de inicio de sesión exitosa.");
    } else {
      console.log("Error: El mensaje de bienvenida no coincide.");
    }
  } catch (error) {
    console.log("La prueba falló: ", error);
  } finally {
    // Cierra el navegador
    await driver.quit();
    console.log("La prueba no falló =D");
  }
}

// Ejecuta la prueba
runLoginTest();
