import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from './styles'

interface interfData {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "promoNumber": string,
    "imagemg": string,
    "imagemp": string
}

export const Produto = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const caminho = 'https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/';

    const [dataProduto, setProduto] = useState<interfData>();

    useEffect(() => {
        axios.get('http://localhost:3001/produtos?id=' + id)
            .then((response) => {
                setProduto(response.data[0])
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [id])

    return (
        <>
            <Menu />
            <div
                style={{
                    paddingTop: 20,
                    paddingBottom: 40,
                    paddingLeft: '6%',
                    paddingRight: '6%'
                }}
            >
                <>
                    <h2>Produto: </h2>
                    <Row>
                        <Col4>
                            <img
                                style={{
                                    width: '100%'
                                }}
                                src={caminho + dataProduto?.imagemg}
                            />
                        </Col4>
                        <Col6>
                            <h3>{dataProduto?.nome}</h3>
                            <p
                                style={{
                                    textDecoration: 'line-through'
                                }}
                            >
                                {`R$ ${dataProduto?.valor}`}
                            </p>
                            <p
                                style={{
                                    fontWeight: 'bold',
                                    color: 'red'
                                }}
                            >
                                {`R$ ${dataProduto?.promo}`}
                            </p>
                            <form action="">
                                <Input
                                    type="number"
                                    name="quantidade"
                                    defaultValue={1}
                                    min="1"
                                    required
                                />
                                <Button
                                    type="submit"
                                >
                                    <TextButton>
                                        Adicionar ao Carrinho
                                    </TextButton>
                                </Button>
                            </form>
                        </Col6>
                    </Row>
                </>
            </div>
        </>
    )
}
