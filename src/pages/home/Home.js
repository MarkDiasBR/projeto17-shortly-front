import { Header, Container, ContentContainer, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom/dist/index.js";
import LinkTile from "../../components/linkTile/LinkTile.js";

export default function Home() {
    return (
        <Container>
            <Header>   
                <p>Seja bem-vindo(a), $USER!</p>
                <div>
                    <p>Home</p>
                    <Link to="/ranking">
                        <p>Ranking</p>
                    </Link>
                    <Link >
                        <p>Sair</p>
                    </Link>
                </div>
            </Header>    

            <Logo />
            <FormContainer id="signup-form">
                <input placeholder="Links que cabem no bolso" />
                <button htmlFor="signup-form" type="submit">Encurtar link</button>
            </FormContainer>            
            <ContentContainer>
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
                <LinkTile />
            </ContentContainer>
        </Container>
    )
}