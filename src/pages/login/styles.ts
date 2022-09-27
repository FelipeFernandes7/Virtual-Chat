import styled from "styled-components";
import banner from "../../assets/bannerChat.jpg";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .link {
    padding: 10px;
    text-align: center;
    color: #fff;
    font-size: 15px;
    text-decoration: none;
    font-weight: 400;
    margin-top: 30px;
    width: 20rem;
    background: rgb(0, 103, 173);
    background: linear-gradient(
      to bottom,
      rgba(0, 103, 173, 1) 36%,
      rgba(32, 128, 242, 1) 70%,
      rgba(23, 103, 204, 1) 97%
    );
    border-radius: 8px;
  }
  .link:hover {
    transition: all linear 0.3s ease;
    background: linear-gradient(
      to top,
      rgba(0, 103, 173, 1) 36%,
      rgba(32, 128, 242, 1) 70%,
      rgba(23, 103, 204, 1) 97%
    );
  }
`;
export const Title = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
export const TitleLogin = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 200;
  }
`;
export const Aside = styled.aside`
  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 50%;
  flex: 7;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;
  h1 {
    color: #fff;
  }
`;
export const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  button {
    text-align: center;
    font-size: 15px;
    color: #fff;
    font-family: "Poppins";
    font-weight: 600;
    width: 20rem;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: rgb(131, 16, 16);
    background: linear-gradient(
      to bottom,
      rgba(131, 16, 16, 1) 29%,
      rgba(186, 8, 45, 1) 99%
    );
    cursor: pointer;
  }
  button:hover {
    background: linear-gradient(
      to top,
      rgba(131, 16, 16, 1) 29%,
      rgba(186, 8, 45, 1) 99%
    );
  }
`;

export const IconLottie = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const ContainerLottie = styled.div``;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const EmailField = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    color: #fff;
    padding: 9px;
    border: 1px solid #fff;
    border-radius: 8px;
    width: 20rem;
    background: transparent;
    ::placeholder {
      color: #ecf0f1;
      padding-left: 5px;
    }
  }
`;
export const PasswordField = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  input {
    color: #fff;
    padding: 9px;
    border: 1px solid #fff;
    border-radius: 8px;
    width: 20rem;
    background: transparent;
    ::placeholder {
      color: #ecf0f1;
      padding-left: 5px;
    }
  }
`;
