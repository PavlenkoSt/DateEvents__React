import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import AddEventForm from '../components/AddEventForm'
import EventCalendar from '../components/EventCalendar'

const Event = () => {

    const [ isModalVisible, setIsModalVisible ] = useState(false)

    return (
        <div>
            <EventCalendar/>
            <Button 
                className='btn' 
                onClick={ () => setIsModalVisible(true) }
            >Add event</Button>
            <Modal 
                visible={ isModalVisible } 
                footer={ null } 
                onCancel={ () => setIsModalVisible(false) }
            >
                <AddEventForm
                    setIsModalVisible={ setIsModalVisible }
                />
            </Modal>
        </div>
    )
}

export default Event
