function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
  
    // Clear previous error message
    errorMessage.style.display = "none";
    errorMessage.textContent = "";
  
    // Hardcoded correct credentials for demo purposes
    const correctUsername = "user";
    const correctPassword = "password123";
  
    // Check if fields are empty
    if (!username || !password) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please fill in both fields.";
      return;
    }
  
    // Validate credentials
    if (username === correctUsername && password === correctPassword) {
      alert("Login successful!");
      // Redirect to another page or update the UI as needed
    } else {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Incorrect username or password.";
    }
  }
  