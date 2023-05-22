import { Header, Container, TitleContainer } from "./styled.js";
import Logo from "../../assets/Logo.js";
import { Link } from "react-router-dom/dist/index.js";
import Trophy from "../../assets/Trophy.js";
import RankingStats from "../../components/rankingStats/RankingStats.js";
import { logout } from "../../services/serverRequisitions.user.js";

export default function Ranking() {

    const name = localStorage.getItem("name");

    return (
        <Container>
            <Header>   
                <p>Seja bem-vindo(a), {name}!</p>
                <div>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link >
                        <p>Links</p>
                    </Link>
                    <p>Ranking</p>
                    <Link >
                        <p>Descobrir</p>
                    </Link>
                    <Link onClick={logout} to="/sign-in">
                        <p>Sair</p>
                    </Link>
                </div>
            </Header>    
            <Logo />
            <TitleContainer>
                <Trophy />
                <p>Ranking</p>
            </TitleContainer>            
            <RankingStats />
            {/* <ContentContainer>
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
            </ContentContainer> */}
        </Container>
    )
}