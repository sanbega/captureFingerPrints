import axios from "axios";

const BASE_URL = "http://localhost:4000"; // Cambia esto a la URL de tu servidor

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("algo salio mal", error)
    throw error;
  }
};
//ngrok http
// Agrega más funciones de API aquí según sea necesario
