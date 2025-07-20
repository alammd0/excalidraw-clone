import { HTTP_URL } from "@/config";
import axios from "axios";

// Signup Request

type PropsTypes = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export async function signupUser({
  username,
  name,
  password,
  email,
}: PropsTypes) {
  const res = await axios.post(`${HTTP_URL}/api/v1/auth/signup`, {
    username,
    name,
    email,
    password,
  });

  return res.data;
}

// Login Request

export async function loginUser({ email, password }: PropsTypes) {
  const res = await axios.post(`${HTTP_URL}/api/v1/auth/login`, {
    email,
    password,
  });
  console.log(res.data);
  return res.data;
}
