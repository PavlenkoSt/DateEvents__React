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
    }
}

export default UserApi