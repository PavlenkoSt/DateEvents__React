import { Form, Input, Button, Checkbox } from 'antd'
import UserApi from '../api/UserApi'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

type FormDataType = {
    username: string,
    password: string,
    remember: boolean
}

const LoginForm = () => {

    const onFinish = (formData: FormDataType) => {
        setLoading(true)

        setTimeout(async () => {
            const user = await UserApi.auth(formData.username, formData.password)
            if (user) {
                setAuth(true)
                if(formData.remember){
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', formData.username)
                }
            } else {
                setError('Username or password uncorrect! Try again!')
            }
            setLoading(false)
        }, 1000)
    }

    const { error, isLoading } = useTypedSelector(state => state.authReducer)

    const { setAuth, setLoading, setError } = useActions()

    return (
        <>
            { error && <h2 className='error'>{ error }</h2> } 
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isLoading} >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default LoginForm