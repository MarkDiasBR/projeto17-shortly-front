import { Header, Container, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/serverRequisitions.js";

export default function SignUp() {
    const [form, setForm] = useState({email: "", name: "", password: "" });
    const [disabledInput, setDisabledInput] = useState(false)
  
    const navigate = useNavigate()

    async function handleForm(event) {
        const {name, value} = event.target
    
        const passwordConfirm = document.querySelector("#pass2-signin");
        if (passwordConfirm.value !== document.querySelector("#pass1-signin").value) {
          passwordConfirm.setCustomValidity('Senhas não conferem.');
        } else {
          passwordConfirm.setCustomValidity('');
        }
        
        const newForm = {...form, [name]: value};
        setForm(newForm)
    
        console.log(newForm)
    }
    
    async function handleSubmit(event) {
        event.preventDefault()
        
        console.log("submit")
    
        setDisabledInput(true)
    
        try {
          await signUp(form)
          navigate("/") 
        } catch (err) {
          console.log(err.response.data)
          setDisabledInput(false)
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
                    placeholder="Nome" 
                    onChange={handleForm}
                    disabled={disabledInput}
                    required
                />
                <input 
                    name="email"
                    type="email"
                    placeholder="E-mail" 
                    onChange={handleForm} 
                    disabled={disabledInput} 
                    required  
                />
                <input 
                    id="pass1-signin"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Senha" 
                    onChange={handleForm} 
                    disabled={disabledInput}
                    required 
                />
                <input 
                    id="pass2-signin"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
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