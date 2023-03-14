import { Menu } from '../../components/Menu'

export const Home = () => {
    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%'
                }}
            >
                <h2>Produtos em destaque</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <div
                        style={{
                            maxWidth: '18rem',
                            margin: '10px',
                            border: '1px solid #D2D2D2',
                            textAlign: 'center',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <img src="https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/cozinhap.jpg" />
                        <h3>Titulo</h3>
                        <p style={{
                            textDecoration: 'line-through'
                        }}> 300,00</p>
                        <strong style={{
                            color: 'red'
                        }}> 200,00</strong>
                        <button
                            style={{
                                border: '0',
                                padding: '15px',
                                borderRadius: '8px',
                                backgroundColor: 'blue',//utilizar variavel styled components
                                marginTop: '10px',
                            }}
                        >
                            <h3 style={{
                                color: "#fff"
                            }}>Detalhes</h3>
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}
