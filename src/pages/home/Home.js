import { Header, Container, ContentContainer, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LinkTile from "../../components/linkTile/LinkTile.js";
import { logout } from "../../services/serverRequisitions.user.js";
import { shortenUrl } from "../../services/serverRequisitions.auth.js";
import { getAllLinks } from "../../services/serverRequisitions.auth.js";

export default function Home() {
    const [form, setForm] = useState({url: ''});
    const [disabledInput, setDisabledInput] = useState(false);
    const [shortenedUrls, setShortenedUrls] = useState([]);

    const name = localStorage.getItem("name");
    
    useEffect(() => {
        const asyncWrapper = async () => {
            
            try {
                const links = await getAllLinks();
                console.log(links)
                setShortenedUrls(links);
            } catch (error) {
                console.log('erro')
            }
        }
    
        asyncWrapper();
    }, [])
    
    

    function handleForm(event) {
        const {name, value} = event.target;
    
        setForm({...form, [name]: value});
    }

    async function handleSubmit(event) {
        console.log("submit")

        event.preventDefault();

        setDisabledInput(true);

        await shortenUrl(form);

        const links = await getAllLinks();
        // console.log(links)
        setShortenedUrls(links);

        setDisabledInput(false);
    }

    return (
        <Container>
            <Header>   
                <p>Seja bem-vindo(a), {name}!</p>
                <div>
                    <p>Home</p>
                    <Link >
                        <p>Links</p>
                    </Link>
                    <Link to="/ranking">
                        <p>Ranking</p>
                    </Link>
                    <Link >
                        <p>Descobrir</p>
                    </Link>
                    <Link onClick={logout} to="/sign-in">
                        <p>Sair</p>
                    </Link>
                </div>
            </Header>    

            <Logo />
            <FormContainer onSubmit={handleSubmit}>
                <input 
                    name="url" 
                    type="url" 
                    placeholder="Links que cabem no bolso" 
                    autoComplete="off"
                    onChange={handleForm}
                    disabled={disabledInput}
                    required 
                />
                <button type="submit">Encurtar link</button>
            </FormContainer>            
            <ContentContainer>
                {shortenedUrls ? shortenedUrls.map(elem => (
                    <LinkTile
                        key={elem.id}
                        url={elem.url}
                        shortUrl={elem.shortUrl}
                        visitCount={elem.visitCount}
                    />
                )) : ''}
            </ContentContainer>
        </Container>
    )
}