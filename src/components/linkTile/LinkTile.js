import Trash from "../../assets/Trash.js"
import { Container } from "./styled.js"

// { url, shortenedUrl, clicks }

export default function LinkTile() {
    return (
        <Container>
            <div>
                <p>https://www.driven.com.br</p>
            </div>
            <div>
                <p>dni29m</p>
            </div>
            <div>
                <p>
                Quantidade de visitantes: 123456789
                </p>
            </div>
            <button>
                <Trash />
            </button>
        </Container>
    )
}