import { Header, Container, ContentContainer, TitleContainer } from "./styled.js";
import RankingStats from "../../components/rankingStats/RankingStats.js";
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
                <Link to="/sign-up">
                    <p>Cadastre-se</p>
                </Link>
                <Link to="/sign-in">
                    <p>Entrar</p>
                </Link>
            </Header>   
            <Logo />
            <TitleContainer>
                <Trophy />
                <p>Ranking</p>
            </TitleContainer>            
            <RankingStats />
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