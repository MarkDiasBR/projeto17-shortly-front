import { Header, Container, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom/dist/index.js";

export default function SignUp() {
    return (
        <Container>
            <Header>
                <Link>
                    <p>
                        Entrar
                    </p>
                </Link>
                <p>Cadastre-se</p>
            </Header>
            <Logo />
            <FormContainer id="signup-form">
                <input placeholder="Nome" />
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <input placeholder="Confirmar senha" />
                <button for="signup-form" type="submit">Criar Conta</button>
            </FormContainer>
        </Container>
    )
}