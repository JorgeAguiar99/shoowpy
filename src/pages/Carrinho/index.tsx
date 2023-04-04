import { Menu } from "../../components/Menu"
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles"

export const Carrinho = () => {
    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                    marginTop: 20,
                    marginBottom: 40
                }}
            >
                <h2>Carrinho de Compras</h2>

                <Table>
                    <thead>
                        <THtr>
                            <THTh style={{ minWidth: 300 }}>Nome do Produto</THTh>
                            <THTh>Quantidade</THTh>
                            <THTh>Vlr. Unit.</THTh>
                            <THTh>Vlr. Total</THTh>
                            <THTh>Ações</THTh>
                        </THtr>
                    </thead>
                    <tbody>
                        <TBTr>
                            <Td>Mouse</Td>
                            <Td>1</Td>
                            <Td>2,00</Td>
                            <Td>2,00</Td>
                            <Td>
                                <Button
                                    type="button"
                                >
                                    <TextButton>
                                        Lixo
                                    </TextButton>
                                </Button>
                            </Td>
                        </TBTr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
