import React, { useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../components/Card'
import { Menu } from '../../components/Menu'

export const Home = () => {


    useEffect(() => {
        // axios.get()
    }, [])

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
                    <Card
                        titulo="Jorge Marco"
                    />

                </div>

            </div>
        </>
    )
}
