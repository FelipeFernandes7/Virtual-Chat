import { FormEvent, useState } from "react";
import {
  Container,
  ContainerForm,
  DivBtn,
  EmailField,
  FormRegister,
  PasswordField,
  TitleRegister,
} from "./styles";
import "./responsiveRegister.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [confPassword, setConfPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e:FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Campo e-mail obrigatório", { theme: "colored" });
      return;
    }
    if (!password || !confPassword) {
      toast.error("Campo senha e confirmar senha obrigatório", {
        theme: "colored",
      });
      return;
    }
    if (password || confPassword || email) {
      toast.success("Cadastrado com sucesso!", { theme: "colored" });
      return;
    }
    setTimeout(() => {
      navigate('/');
    }, 4000);
  };
  return (
    <>
      <Container className="containerResponsive">
        <FormRegister className="responsiveForm">
          <TitleRegister>
            <h1>Cadastrar</h1>
          </TitleRegister>
          <ContainerForm>
            <EmailField>
              <input
                type={"email"}
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@gmail.com"
              />
            </EmailField>
            <PasswordField>
              <input
                type={"password"}
                name="password"
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </PasswordField>
            <PasswordField>
              <input
                type={"password"}
                name="password"
                placeholder="Confirmar Senha"
                value={confPassword}
                onChange={(event) => setConfPassword(event.target.value)}
              />
            </PasswordField>
            <DivBtn>
              <button onClick={handleRegister}>Entrar</button>
            </DivBtn>
          </ContainerForm>
        </FormRegister>
      </Container>
    </>
  );
}
