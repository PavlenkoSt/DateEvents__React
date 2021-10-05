import React, { useEffect } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import { Layout } from 'antd'
import Header from './components/Header'
import { useActions } from './hooks/useActions'

const App = () => {

    const { setAuth } = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setAuth(true)
        }
    }, [])

    return (
        <Layout>
            <Header/>
            <Layout.Content className='content'>            
                <AppRouter/>
            </Layout.Content>
        </Layout>
    )
}

export default App