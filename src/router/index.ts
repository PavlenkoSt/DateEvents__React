import { FC } from "react"
import Event from "../pages/Event"
import Login from "../pages/Login"

type RouterType = {
    path: string
    component: FC
    exact?: boolean
}

type RootRouterType = {
    auth: RouterType[]
    noAuth: RouterType[]
}

const router: RootRouterType = {
    auth: [
        { path: '/', component: Event, exact: true }
    ],

    noAuth: [
        { path: '/login', component: Login, exact: true }
    ]
}

export default router