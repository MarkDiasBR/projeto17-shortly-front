import { Header, Container, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signIn } from "../../services/serverRequisitions.js";

export default function SignIn() {
    const [form, setForm] = useState({email: "", password: "" });
    const [disabledInput, setDisabledInput] = useState(false);
    const navigate = useNavigate();

    function handleForm(event) {
        const {name, value} = event.target;
    
        setForm({...form, [name]: value});
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        setDisabledInput(true)

        const signinPromise = await signIn(form);

        setDisabledInput(signinPromise.proceed);

        if (signinPromise.proceed) {
            navigate("/")
        }
    }

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
            <FormContainer onSubmit={handleSubmit}>
                <input 
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    autoComplete="on"
                    onChange={handleForm}
                    disabled={disabledInput}
                    required 
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Senha"
                    autoComplete="on"
                    onChange={handleForm} 
                    disabled={disabledInput} 
                    required
                />
                <button 
                    type="submit" 
                    disabled={disabledInput}
                >
                    Entrar
                </button>
            </FormContainer>
        </Container>
    )
}