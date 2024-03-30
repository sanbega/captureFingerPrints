import axios from "axios";

const BASE_URL =
  "https://2af3-2800-484-387b-6600-6e80-7e7e-d8ea-8a66.ngrok-free.app";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("algo salio mal", error);
    throw error;
  }
};
//ngrok http
// Agrega más funciones de API aquí según sea necesario
