import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const FormRegister = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
  
export const TitleRegister = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 200;
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

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const EmailField = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
`
export const NameField = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
   p{
    text-align: left;
    color: red;
    font-size: 12px;
    margin-top: 5px;
   }
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
