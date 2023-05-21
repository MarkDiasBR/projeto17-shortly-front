import { Header, Container, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { signUp } from "../../services/serverRequisitions.js";

export default function SignIn() {
    // const [form, setForm] = useState({email: "", name: "", password: "" });
    // const [disabledInput, setDisabledInput] = useState(false);

    // const navigate = useNavigate()

    return (
        <Container>
            <Header>
                <Link to="/ranking-not-signed-in">
                    <p>Ranking</p>
                </Link>
                <Link >
                    <p>Descobrir</p>
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
                <button htmlFor="signup-form" type="submit">Entrar</button>
            </FormContainer>
        </Container>
    )
}