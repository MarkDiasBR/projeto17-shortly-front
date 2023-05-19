import { Header, Container, ContentContainer, TitleContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom/dist/index.js";
import Trophy from "../../assets/Trophy.js";

export default function Ranking() {
    return (
        <Container>
            <Header>   
                <p>Seja bem-vindo(a), $USER!</p>
                <div>
                    <Link to="/">
                    <p>Home</p>
                    </Link>
                    <p>Ranking</p>
                    <Link >
                        <p>Sair</p>
                    </Link>
                </div>
            </Header>    
            <Logo />
            <TitleContainer>
                <Trophy />
                <p>Ranking</p>
            </TitleContainer>            
            <ContentContainer>
                <p>
                    <span>5. DEFINITIVAMENTE_NAO_E_UM_BOT</span> - 12345252 links - 37.707 visualizações                    
                </p>
                <p>
                    <span>5. DEFINITIVAMENTE_NAO_E_UM_BOT</span> - 12345252 links - 37.707 visualizações                    
                </p>
                <p>
                    <span>5. DEFINITIVAMENTE_NAO_E_UM_BOT</span> - 12345252 links - 37.707 visualizações                    
                </p>
                <p>
                    <span>5. DEFINITIVAMENTE_NAO_E_UM_BOT</span> - 12345252 links - 37.707 visualizações                    
                </p>
                <p>
                    <span>5. DEFINITIVAMENTE_NAO_E_UM_BOT</span> - 12345252 links - 37.707 visualizações                    
                </p>
            </ContentContainer>
        </Container>
    )
}