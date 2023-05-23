import { Container } from "./styled.js";
import { getRanking } from "../../services/serverRequisitions.user.js";
import { useEffect, useState } from "react";

// A ideia é justamente fazer esse componente carregar automaticamente, a cada F5
// fazer a requisição dos 5 usuários com mais visualizações combinadas

export default function RankingStats() {
    const [ranking, setRanking] = useState([])

    useEffect(() => {
        console.log("b")
        const asyncWrapper = async () => {
            try {
                const myarray = await getRanking();
                const subarray = myarray.slice(0,5);
                setRanking(subarray);
            } catch (err) {
                console.error(err);
            }
        }
            
        asyncWrapper();
    }, [])

    return (
        <Container>
            {ranking?.map((element, index)=>{
                console.log("1");
                return (
                    <p>
                        <span>{index+1}. {element.name}</span> - {element.linksCount} links - {element.visitCount} visualizações                    
                    </p>
                )
            })}
        </Container>
    )
}