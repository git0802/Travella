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

export const mixArray = (arr: any[]) => {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}


export const saveToLocal = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocal = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || 'null')
}

export const removeFromLocal = (key: string) => {
    localStorage.removeItem(key)
}
