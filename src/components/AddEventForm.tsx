import { Button, DatePicker, Form, Input, Select } from "antd"
import { Moment } from "moment"
import { FC } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"


type AddEventFormPropsType = {
    setIsModalVisible: (status: boolean) => void
}

const AddEventForm: FC<AddEventFormPropsType> = ({ setIsModalVisible }) => {

    const onFinish = (values: any) => {
        console.log(values)
        setIsModalVisible(false)
    }

    const onChangeDate = (date: Moment | null) => {
        console.log(date);
        
    }

    const { guests } = useTypedSelector(state => state.eventReducer)

    return (
        <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item>
                <h2>Add new event</h2>
            </Form.Item>
            <Form.Item
                label="Event description"
                name="description"
                rules={[{ required: true, message: 'Please input event description!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Date picker"
                name="date"
                rules={[{ required: true, message: 'Please pick date' }]}
            >
                <DatePicker onChange={ onChangeDate } />
            </Form.Item>
            <Form.Item
                label="Select guest"
                name="guest"
                rules={[{ required: true, message: 'Please select guest' }]}
            >
                <Select>
                    { guests.map(guest => <Select.Option value={ guest } key={ guest } >{ guest }</Select.Option>) }
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Add</Button>
            </Form.Item>
        </Form>
    )
}

export default AddEventForm