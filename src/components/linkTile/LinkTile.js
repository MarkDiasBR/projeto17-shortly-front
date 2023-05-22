import Trash from "../../assets/Trash.js";
// import { getRedirected } from "../../services/serverRequisitions.user.js";
import { Container } from "./styled.js";
import { Link } from "react-router-dom";
// { url, shortenedUrl, clicks }

export default function LinkTile({url, shortUrl, visitCount}) {
    return (
        <Container>
            <Link to={`${process.env.REACT_APP_API_URL}/u/${shortUrl}`}>
                <div>
                    <p>{url}</p>
                </div>
                <div>
                    <p>{shortUrl}</p>
                </div>
                <div>
                    <p>
                    Quantidade de visitantes: {visitCount}
                    </p>
                </div>
            </Link>
            <button>
                <Trash />
            </button>
        </Container>
    )
}