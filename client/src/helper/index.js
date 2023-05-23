import axios from 'axios';
const port=5173;
/** register user function */
export async function registerUser(credentials){
  try {
    const { data: { msg } } = await axios.post(`http://localhost:${port}/api/register`, credentials);
    return msg;
  } catch (error) {
    return  error;
  }
}

/** login function */
export async function verifyPassword({ email, password }){
  try {
    const { data } = await axios.post(`http://localhost:${port}/api/login`, { email, password });
    return data;
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}
