import axios from "axios";

const patientsApi = axios.create({
  baseURL: "http://localhost:3001/api/v1/patients/",
});

export const getAllPacientes = () => {
  return patientsApi.get("/");
};

export const createPacientes = (pacientes) => {
  return patientsApi.post("/", pacientes);
};

export const getPacienteById = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};
