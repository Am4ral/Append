import axios from "axios";

export async function register(data: object) {
  const response = await axios.post("http://localhost:8080/auth/register", (data));
  return response;
}