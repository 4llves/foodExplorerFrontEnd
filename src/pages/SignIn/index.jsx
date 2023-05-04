import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container, Form, ButtoSigIn, ButtoTextSigIn } from "./styles";
import { FiMail } from "react-icons/fi"

export function SignIn() {
  return (
    <Container>
      <Form>
        <Logo />

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
            icon={FiMail}
          />
        </div>

        <ButtoSigIn
          title="Entrar"
        />

        <ButtoTextSigIn
          title="Criar uma conta"
        />
      </Form>
    </Container>
  )
}