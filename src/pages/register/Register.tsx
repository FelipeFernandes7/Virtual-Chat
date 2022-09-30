import { FormEvent, useEffect, useRef, useState } from "react";
import chatAnimate from "../../lottie/chatAnimation.json";

import {
  Container,
  ContainerForm,
  DivBtn,
  EmailField,
  FormRegister,
  NameField,
  PasswordField,
  TitleRegister,
} from "./styles";
import "./responsiveRegister.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Aside, ContainerLottie, IconLottie, Title } from "../login/styles";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import firebase from "firebase/compat";
import { auth } from "../../firebase/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};
export function Register() {
  const iconRef = useRef<LottieRefCurrentProps | null>(null);
  const [confPassword, setConfPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const enterWithEmailAndPassword = async (e: FormEvent) => {
    e.preventDefault();
    if (!displayName) {
      toast.warning("Campo nome obrigatório");
      return;
    }
    if (!email) {
      toast.warning("Campo e-mail obrigatório");
      return;
    }
    if (!password || !confPassword) {
      toast.warning("Campo senha e confirmar senha obrigatórios");
      return;
    }
    if (password || email || displayName) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log("usuário", user);
        });
      toast.success("Cadastrado com sucesso!", { theme: "colored" });
    }
    setTimeout(() => {
      navigate("/");
    }, 3000);
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
            <NameField>
              <input
                type={"text"}
                name="displayName"
                value={displayName}
                onChange={(event) => setDisplayName(event.target.value)}
                placeholder="Nome usuário"
              />
            </NameField>
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
              {password.length === 5 ? (
                <>
                  <input
                    type={"password"}
                    name="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <p>a senha deve conter pelo menos 6 caractéris</p>
                </>
              ) : (
                <input
                  type={"password"}
                  name="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              )}
            </PasswordField>
            <PasswordField>
              {confPassword !== password ? (
                <>
                  <input
                    type={"password"}
                    name="password"
                    placeholder="Senha"
                    value={confPassword}
                    onChange={(event) => setConfPassword(event.target.value)}
                  />
                  <p>a senhas não coincidem</p>
                </>
              ) : (
                <input
                  type={"password"}
                  name="password"
                  placeholder="Senha"
                  value={confPassword}
                  onChange={(event) => setConfPassword(event.target.value)}
                />
              )}
            </PasswordField>
            <DivBtn>
              {password.length < 6 ||
              confPassword.length < 6 ||
              password !== confPassword ? (
                <button
                  className="disabled"
                  disabled
                  onClick={enterWithEmailAndPassword}
                >
                  Entrar
                </button>
              ) : (
                <button onClick={enterWithEmailAndPassword}>Entrar</button>
              )}
            </DivBtn>
          </ContainerForm>
        </FormRegister>
      </Container>
    </>
  );
}
