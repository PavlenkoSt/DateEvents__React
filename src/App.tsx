import React from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import { Layout } from 'antd'

const App = () => {
    return (
        <Layout>
            <Layout.Content>            
                <AppRouter/>
            </Layout.Content>
        </Layout>
    )
}

export default App
