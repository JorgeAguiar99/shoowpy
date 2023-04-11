import { Menu } from "../../components/Menu"
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles"

export const Carrinho = () => {

    const [dataCarrinho, setDataCarrinho] = useState<Array<interfProdutos>>([])
    const [valorTotal, setValorTotal] = useState<number>(0)

    const atualizaValorTotal = useCallback(
        (carrinho: Array<interfProdutos>) => {
        let total = 0

        carrinho.forEach((produto) => {
            total = produto.total + total
        })
        setValorTotal(total)

    },[])
    // function atualizaValorTotal(
    //     carrinho: Array<interfProdutos>
    // ) {
    //     let total = 0


    //     carrinho.forEach((produto) => {
    //         total = produto.total + total
    //     })
    //     setValorTotal(total)

    //     console.log(valorTotal)

    // }

    useEffect(() => {
        let lsCarrinho = localStorage.getItem(
            '@shoowpy:carrinho'
        )
        let carrinho: any = null

        if (typeof lsCarrinho === 'string') {
            carrinho = JSON.parse(lsCarrinho)
        }

        if (carrinho) {
            setDataCarrinho(carrinho)
            atualizaValorTotal(carrinho)
        }

    }, [])

    function removerProdutoCarrinho(id: string) {
        let carrinho = dataCarrinho.filter((produto) => (
            produto.id !== id
        ))

        localStorage.setItem(
            '@shoowpy:carrinho',
            JSON.stringify(carrinho)
        )

        setDataCarrinho(carrinho)
        atualizaValorTotal(carrinho)
    }

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

                {
                    dataCarrinho.length > 0 &&
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button
                            type='button'
                        >
                            <TextButton>Limpar carrinho</TextButton>
                        </Button>
                        <Button
                            type='button'
                            bgColor='green'
                        >
                            <TextButton>Finalizar pedido</TextButton>
                        </Button>
                    </div>
                }
            </div>
        </>
    )
}
