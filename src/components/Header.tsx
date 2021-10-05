import React from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'


const Header = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)

    const history = useHistory()

    return (
        <Layout.Header >
            <Menu theme="dark" mode="horizontal" selectable={false} className='menu' >
                { isAuth 
                    ? <Menu.Item key='logout'>Logout</Menu.Item> 
                    : <Menu.Item key='login' onClick={() => history.push('/login')}>Login</Menu.Item> 
                }
            </Menu>
        </Layout.Header>
    )
}

export default Header