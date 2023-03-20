import { Menu } from '../../components/Menu'
import Card from '../../components/Card'
import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'

export const Home = () => {

    useEffect(() => {
        //axios.get
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
                    <Card titulo="Fogão" />

                </div>

            </div>

            <Footer />
        </>
    )
}
