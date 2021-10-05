import React from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'


const Header = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)

    const history = useHistory()

    const { setAuth } = useActions()

    const logout = () => {
        setAuth(false)
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
    }

    return (
        <Layout.Header >
            <Menu theme="dark" mode="horizontal" selectable={false} className='menu' >
                { isAuth 
                    ? <Menu.Item key='logout' onClick={ logout }>Logout</Menu.Item> 
                    : <Menu.Item key='login' onClick={() => history.push('/login')}>Login</Menu.Item> 
                }
            </Menu>
        </Layout.Header>
    )
}

export default Header