import { Header, Container, ContentContainer, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LinkTile from "../../components/linkTile/LinkTile.js";
import { logout, getRedirected } from "../../services/serverRequisitions.user.js";
import { shortenUrl, getAllLinks, deleteLink, getUserName } from "../../services/serverRequisitions.auth.js";

export default function Home() {
    const [form, setForm] = useState({url: ''});
    const [disabledInput, setDisabledInput] = useState(false);
    const [shortenedUrls, setShortenedUrls] = useState([]);
    const [name, setName] = useState('');
    console.log("braaaap")

    useEffect(() => {
        const asyncWrapper = async () => {
                
            try {
                const namePromise = await getUserName();
                setName(namePromise)

                const links = await getAllLinks();
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
        setShortenedUrls(links);

        setDisabledInput(false);
    }

    async function handleClick(event, shortUrl) {
        event.preventDefault();

        try {
            const url = await getRedirected(shortUrl);
            window.open(url, '_blank');

        } catch (err) {
            console.error(err);
        } finally {
            const links = await getAllLinks();
            setShortenedUrls(links);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteLink(id);
        } catch (err) {
            console.error(err)
        } finally {
            const links = await getAllLinks();
            setShortenedUrls(links);
        }
    }

    return (
        <Container>
            <Header>   
                <p>Seja bem-vindo(a){name ? `, ${name}!` : ''}</p>
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
                        id={elem.id}
                        url={elem.url}
                        shortUrl={elem.shortUrl}
                        visitCount={elem.visitCount}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                    />
                )) : ''}
            </ContentContainer>
        </Container>
    )
}