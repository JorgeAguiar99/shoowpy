import { CardContainer, CardPriceBefore, CardPriceActual, CardButton, CardButtonText } from './styles';

interface dados {
    titulo: string;
}

function Card(props: dados) {
    return (
        <>
            <CardContainer>
                <img src="https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/cozinhap.jpg" />
                <h3>{props.titulo}</h3>
                <CardPriceBefore>300,00</CardPriceBefore>
                <CardPriceActual>200,00</CardPriceActual>
                <CardButton>
                    <CardButtonText>Detalhes</CardButtonText>
                </CardButton>
            </CardContainer>
        </>
    )
}

export default Card;
