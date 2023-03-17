import { Button, CardContainer } from "./styles"

interface interfProps {
    titulo: string;
}

export const Card = (props: interfProps) => {
    return (
        <CardContainer>
            <img src="https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/cozinhap.jpg" />
            <h3>{props.titulo}</h3>
            <p style={{
                textDecoration: 'line-through'
            }}> 300,00</p>
            <strong style={{
                color: 'red'
            }}> 200,00</strong>
            <Button>
                <h3 style={{
                    color: "#fff"
                }}>Detalhes</h3>
            </Button>

        </CardContainer>
    )
}
