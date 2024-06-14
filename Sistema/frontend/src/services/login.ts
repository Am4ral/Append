import axios from "axios";

export async function login(data: any) {
  const response = await axios.post("http://localhost:8080/auth/login", data);
  return response;
}