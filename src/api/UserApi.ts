import axios from "axios"
import { UserType } from "../models/UserType"

const UserApi = {
    auth: async (username: string, password: string) => {
        const responce = await axios.get<UserType[]>('./users.json')
        const user = responce.data.find((user) => user.username === username && user.password === password)  
        
        if(user){
            return user
        }

        return null
    },
    getAllUsernames: async (username: string) => {
        const responce = await axios.get<UserType[]>('./users.json')
        const filteredUsers = responce.data.filter(user => user.username !== username)

        const usernames = filteredUsers.map(user => user.username)

        return usernames
    }
}

export default UserApi