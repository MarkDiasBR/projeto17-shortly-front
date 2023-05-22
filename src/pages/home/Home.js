import { Header, Container, ContentContainer, FormContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom";
import LinkTile from "../../components/linkTile/LinkTile.js";
import { logout } from "../../services/serverRequisitions.user.js";

export default function Home() {

    const name = localStorage.getItem("name");

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