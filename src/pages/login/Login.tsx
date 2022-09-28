import chatAnimate from "../../lottie/chatAnimation.json";
import { FormEvent, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
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
import iconGoogle from "../../assets/google.png";
import "./responsive.scss";

export function Login() {
  const iconRef = useRef<LottieRefCurrentProps | null>(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Campo email e senha obrigatórios", { theme: "colored" });
      return;
    }
  };

  async function handleCreateRoom(e:FormEvent) {
    e.preventDefault()
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/home");
  }
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

        <Form className="responsiveForm">
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
            <DivBtn>
              <button className="btnGoogle" onClick={handleCreateRoom}>
                <img src={iconGoogle} alt="Google" /> Entrar com o Google
              </button>
            </DivBtn>
          </ContainerForm>
          <Link className="link" to={"/register"}>
            Registrar
          </Link>
        </Form>
      </Container>
    </>
  );
}
