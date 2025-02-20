import axios from "axios";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  User,
} from "../types/auth";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";


export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await axios.post(`${API_BASE}/auth/local`, credentials);
    return data;
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const registerData = {
      username: credentials?.email,
      email: credentials?.email,
      password: credentials?.password,
    };

    const { data } = await axios.post(
      `${API_BASE}/auth/local/register`,
      registerData
    );
    return data;
  },

  async getMe(jwt: string): Promise<User> {
    const { data } = await axios.get(`${API_BASE}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return data;
  },
};
