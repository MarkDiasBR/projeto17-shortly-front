import { Header, Container, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom/dist/index.js";

export default function SignIn() {
    return (
        <Container>
            <Header>
                <Link to="/ranking-not-signed-in">
                    <p>Ranking</p>
                </Link>
                <p>Entrar</p>
                <Link to="/sign-up">
                    <p>Cadastre-se</p>
                </Link>
            </Header>
            <Logo />
            <FormContainer id="signup-form">
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <button for="signup-form" type="submit">Entrar</button>
            </FormContainer>
        </Container>
    )
}