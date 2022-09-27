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
import { FormEvent, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export function Login() {
  const iconRef = useRef<LottieRefCurrentProps | null>(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (!email) {
      toast.error("Campo email obrigatório", { theme: "colored" });
    }
    if (!password) {
      toast.error("Campo senha obrigatório", { theme: "colored" });
      return;
    }
    if (!password && !password) {
      toast.error("Campo email e senha obrigatório", { theme: "colored" });
      return;
    }
  };
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
            <DivBtn>
              <button onClick={handleLogin}>Entrar</button>
            </DivBtn>
          </ContainerForm>
          <Link className="link" to={""}>
            Registrar
          </Link>
        </Form>
      </Container>
    </>
  );
}
