import React from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'


const Header = () => {

    const isAuth = false

    const history = useHistory()

    return (
        <Layout.Header >
            <Menu theme="dark" mode="horizontal" selectable={false} className='menu' >
                { isAuth 
                    ? <Menu.Item>Logout</Menu.Item> 
                    : <Menu.Item onClick={() => history.push('/login')}>Login</Menu.Item> 
                }
            </Menu>
        </Layout.Header>
    )
}

export default Header