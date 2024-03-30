const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Aquí realizarías la lógica de comparación con tus datos de autenticación
  // En un entorno de producción, esto debe ser reemplazado por una base de datos o servicio de autenticación

  if (email === "usuario@example.com" && password === "contraseña123") {
    res.json({ success: true, message: "Inicio de sesión exitoso" });
  } else {
    res.status(401).json({ success: false, message: "Credenciales inválidas" });
  }
});

app.get("/", function (req, res) {
  res.send("Welcome to the project");
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
