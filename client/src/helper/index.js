import axios from "axios";

const port = 5173;

const instance = axios.create({
  baseURL: `http://localhost:${port}/api`,
});

instance.interceptors.request.use(
  (config) => {
    // Set the Content-Type header
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Check if Content-Type header is correct
    if (response.headers['content-type'] !== 'application/json; charset=utf-8') {
      throw new Error('Incorrect Content-Type header in response');
    }

    // Check if response data is present
    if (response.data === null || response.data === undefined) {
      throw new Error('No data found in the response');
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Register user function
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
    } = await instance.post("/register", credentials);
    return msg;
  } catch (error) {
    return error;
  }
}

// Login function
export async function verifyPassword({ email, password }) {
  try {
    const { data } = await instance.post("/login", { email, password });
    return data;
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}
