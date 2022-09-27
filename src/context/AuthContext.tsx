import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import create from "zustand";

interface Props {
  email: string;
  password: string;
}

export const useStore = create((set) => ({
  handleLogin: async (event: FormEvent, data: Props) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    event.preventDefault();
    if (!password && !password) {
      toast.error("Campo email e senha obrigatório", { theme: "colored" });
      return;
    }
    if (!email) {
      toast.error("Campo email obrigatório", { theme: "colored" });
      return;
    }
    if (!password) {
      toast.error("Campo senha obrigatório", { theme: "colored" });
      return;
    }
    if (email !== data.email) {
      toast.error("Email não encontrado", { theme: "colored" });
      return;
    }
    if (password !== data.password) {
      toast.error("Senha ou email invalidos", { theme: "colored" });
      return;
    }
  },
}));
