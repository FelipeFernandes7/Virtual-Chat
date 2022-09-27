import chatAnimate from "../../lottie/chatAnimation.json";
import {
  Aside,
  Container,
  ContainerForm,
  ContainerLottie,
  DivBtn,
  EmailField,
  Form,
  IconLottie,
  PasswordField,
  Title,
  TitleLogin,
} from "./styles";
import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Link } from "react-router-dom";

export function Login() {
  const iconRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <>
      <Container>
        <Aside>
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

        <Form>
          <TitleLogin>
            <h1>Login</h1>
          </TitleLogin>
          <ContainerForm>
            <EmailField>
              <input
                type={"email"}
                name="email"
                placeholder="example@gmail.com"
              />
            </EmailField>
            <PasswordField>
              <input type={"password"} name="password" placeholder="Senha" />
            </PasswordField>
            <DivBtn>
              <button>Entrar</button>
            </DivBtn>
          </ContainerForm>
            <Link className="link" to={''} >Registrar</Link>
        </Form>
      </Container>
    </>
  );
}
