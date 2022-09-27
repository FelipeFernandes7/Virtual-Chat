import { FormEvent, useRef, useState } from "react";
import chatAnimate from "../../lottie/chatAnimation.json";

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
import { Aside, ContainerLottie, IconLottie, Title } from "../login/styles";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export function Register() {
  const iconRef = useRef<LottieRefCurrentProps | null>(null);
  const [confPassword, setConfPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.warning("Campo e-mail obrigatório");
      return;
    }
    if (!password || !confPassword) {
      toast.warning("Campo senha e confirmar senha obrigatório");
      return;
    }

    if (password !== confPassword) {
      toast.warning("as senhas não se coincidem");
      return;
    }

    if (password || confPassword || email) {
      toast.success("Cadastrado com sucesso!", { theme: "colored" });
      return;
    }
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };
  return (
    <>
      <Container className="containerResponsive">
        <Aside className="responsiveAside">
          <Title>
            <h1>My chat online</h1>
          </Title>
          <IconLottie>
            <ContainerLottie>
              <Lottie
                className="lottie"
                lottieRef={iconRef}
                style={{ width: 500, height: 400, marginBottom: 10 }}
                animationData={chatAnimate}
                loop={true}
                autoplay={true}
              />
            </ContainerLottie>
          </IconLottie>
          <strong>Feito para você se divertir e passar o tempo</strong>
        </Aside>
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
