import { useNavigate } from 'react-router-dom'
import { Button, CardContainer } from "./styles"

interface interfProps {
    id: string,
    titulo: string;
    valor: string;
    promo: string;
    imagemp: string | null
}

export const Card = (props: interfProps) => {

    const navigate = useNavigate();
    const caminho = 'https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/'

    return (
        <CardContainer>
            {/* Se a imagem existir, carrega. */}
            {
                props.imagemp &&
                <img src={caminho + props.imagemp} />
            }
            {/* Se não, exibe uma mensagem */}
            {
                !props.imagemp &&
                <h1 style={{ paddingTop: '30px', color: 'red' }}>Sem Imagem</h1>
            }

            <h3>{props.titulo}</h3>
            <p style={{
                textDecoration: 'line-through'
            }}>R$ {props.valor}</p>
            <strong style={{
                color: 'red'
            }}>R$ {props.promo}</strong>
            <Button
                onClick={() => {
                    navigate('/produto/' + props.id)
                }}
            >
                <h3 style={{
                    color: "#fff"
                }}>Detalhes</h3>
            </Button>

        </CardContainer>
    )
}
