import React from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import { Layout } from 'antd'
import Header from './components/Header'

const App = () => {

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