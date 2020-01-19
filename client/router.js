import Auth from "./pages/Auth";
import Friends from "./pages/Friends";

export default [
    {path: '/auth', component: Auth},
    {path: '/friends', component: Friends},
    {path: '/*', redirect: '/friends'}
]