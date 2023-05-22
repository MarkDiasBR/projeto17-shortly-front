import { Header, Container, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/serverRequisitions.js";

export default function SignUp() {
    const [form, setForm] = useState({ email: "", name: "", password: "", confirmPassword: "" });
    const [disabledInput, setDisabledInput] = useState(false);
  
    const navigate = useNavigate();

    const password = useRef();
    const confirmPassword = useRef();
    if (password.current?.value!==confirmPassword.current?.value) {
        confirmPassword.current?.setCustomValidity('Senhas não conferem.');
    } else {
        confirmPassword.current?.setCustomValidity('');
    }

    function handleForm(event) {
        const {name, value} = event.target;

        setForm({...form, [name]: value});    
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
    
        setDisabledInput(true);

        const signupPromise = await signUp(form);

        setDisabledInput(signupPromise.proceed);

        if (signupPromise.proceed) {
            navigate("/sign-in")
        }
    }

    return (
        <Container>
            <Header>
                <Link to="/ranking-not-signed-in">
                    <p>
                        Ranking
                    </p>
                </Link>
                <Link >
                    <p>Descobrir</p>
                </Link>
                <Link to="/sign-in">
                    <p>
                        Entrar
                    </p>
                </Link>
                <p>Cadastre-se</p>
            </Header>
            <Logo />
            <FormContainer onSubmit={handleSubmit}>
                <input 
                    name="name"
                    type="text"
                    autoComplete="on"
                    placeholder="Nome" 
                    onChange={handleForm}
                    disabled={disabledInput}
                    required
                />
                <input 
                    name="email"
                    type="email"
                    autoComplete="on"
                    placeholder="E-mail" 
                    onChange={handleForm} 
                    disabled={disabledInput} 
                    required  
                />
                <input
                    ref={password}
                    name="password"
                    type="password"
                    autoComplete="on"
                    placeholder="Senha" 
                    onChange={handleForm} 
                    disabled={disabledInput}
                    required
                />
                <input 
                    ref={confirmPassword}
                    name="confirmPassword"
                    type="password"
                    autoComplete="on"
                    placeholder="Confirmar senha" 
                    onChange={handleForm} 
                    disabled={disabledInput} 
                    required
                />
                <button 
                    type="submit"
                    disabled={disabledInput}
                >
                    Criar Conta
                </button>
            </FormContainer>
        </Container>
    )
}