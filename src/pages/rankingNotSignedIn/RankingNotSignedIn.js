import { Header, Container, ContentContainer, TitleContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom/dist/index.js";
import Trophy from "../../assets/Trophy.js";

export default function RankingNotSignedIn() {
    return (
        <Container>
            <Header>
                <p>Ranking</p>
                <Link >
                    <p>Descobrir</p>
                </Link>
                <Link to="/sign-in">
                    <p>Entrar</p>
                </Link>
                <Link to="/sign-up">
                    <p>Cadastre-se</p>
                </Link>
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
            <TitleContainer>
                <Link to="/sign-up">
                    <p>
                        Crie sua conta para usar nosso serviço!
                    </p>
                </Link>
            </TitleContainer>
        </Container>
    )
}