import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container, Form, ButtoSigIn, ButtoTextSigIn } from "./styles";
import { FiLock, FiMail } from "react-icons/fi"

export function SignUp() {
  return (
    <Container>
      <Logo />

      <Form>
        <h3>
          Crie sua conta
        </h3>

        <div className="name">
          <label className="labels" htmlFor="name">
            Seu Nome
          </label>
          <Input
            placeholder="Nome: John Doe"
            type="text"
          />
        </div>

        <div className="email">
          <label className="labels" htmlFor="email">
            Email
          </label>
          <Input
            placeholder="Email: exemplo@exemplo.com.br"
            type="text"
            icon={FiMail}
          />
        </div>

        <div className="password">
          <label className="labels" htmlFor="password">
            Senha
          </label>
          <Input
            placeholder="Email: exemplo@exemplo.com.br"
            type="password"
            icon={FiLock}
          />
        </div>

        <ButtoSigIn
          title="Criar Conta"
        />

        <ButtoTextSigIn
          title="Já tenho uma conta"
        />
      </Form>
    </Container>
  )
}