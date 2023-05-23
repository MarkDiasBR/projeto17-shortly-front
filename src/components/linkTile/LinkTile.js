import Trash from "../../assets/Trash.js";
// import { getRedirected } from "../../services/serverRequisitions.user.js";
import { Container } from "./styled.js";
import { Link } from "react-router-dom";
// { url, shortenedUrl, clicks }
// to={`${process.env.REACT_APP_API_URL}/u/${shortUrl}`} target="_blank"

export default function LinkTile({url, id, shortUrl, visitCount, handleClick, handleDelete}) {

    return (
        <Container>
            <Link onClick={(event)=>handleClick(event, shortUrl)} to={`http://shortly.com/u/${shortUrl}`}>
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
            <button onClick={()=>handleDelete(id)}>
                <Trash />
            </button>
        </Container>
    )
}