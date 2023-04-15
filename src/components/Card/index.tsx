import { useNavigate } from 'react-router-dom'
import { Button, CardContainer } from "./styles"

interface interfProps {
    "id": string,
    "nome": string,
    "valor": string,
    "promo": string,
    "imagem": string | null,
}

function formataPreco(preco: number) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

export const Card = (props: interfProps) => {

    const navigate = useNavigate();

    const caminho = 'https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/'

    return (
        <CardContainer>
            {
                props.imagem &&
                <img src={caminho + props.imagem} />
            }
            {/* // "cozinhap.jpg" /> */}
            <h3>{props.nome}</h3>
            <p style={{
                textDecoration: 'line-through'
            }}> {formataPreco(Number(props.valor))}</p>
            <strong style={{
                color: 'red'
            }}> {formataPreco(Number(props.promo))}</strong>
            <Button
                onClick={() => {
                    navigate('/produto/' +
                        props.id
                    )
                }}
            >
                <h3 style={{
                    color: "#fff"
                }}>Detalhes</h3>
            </Button>

        </CardContainer>
    )
}
