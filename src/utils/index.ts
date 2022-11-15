import axios from 'axios'
export const whiteList = [
    "/",
    "/about",
    "/landing",
    "/login",
    "/register",
]
const local = `http://127.0.0.1:3434`
const hosted = `https://travella.onrender.com`

const host = process.env.NODE_ENV === 'development' ? local : hosted

export const api = axios.create({
    baseURL: host
})

