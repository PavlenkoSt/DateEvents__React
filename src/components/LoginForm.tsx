import { Form, Input, Button, Checkbox } from 'antd';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
        
        setLoading(true)

        setTimeout(() => {
            setAuth(true)
            setLoading(false)
        }, 1000)
    }

    const { setAuth, setLoading } = useActions()

    const { error, isLoading } = useTypedSelector(state => state.authReducer)

    return (
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
    )
}

export default LoginForm