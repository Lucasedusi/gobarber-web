import React from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SingUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="goBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="name" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="forgot">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SingUp;
