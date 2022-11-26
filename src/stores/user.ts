import { api } from './../utils/index';
import { getCookie } from '@/utils/cookies';
import { defineStore } from 'pinia';
import type { UserInfo } from '@/utils/types';

interface State {
    userList: UserInfo[]
    user: UserInfo | null,
    token: string | null,
}

export const useUserStore = defineStore('user', {
    state: (): State => ({
        userList: [],
        user: null,
        token: getCookie('access_token'),
    }),

    getters: {
        getUserList: (state: State) => state.userList,
        getUser: (state: State) => state.user,
    },

    actions: {
        async fetchUserList() {
            const userList = await fetchUserList();
            this.userList = userList;
        },

        async fetchCurUser() {
            if( this.token === '' || this.token === null)
                return null;
            const user: UserInfo | null = await fetchCurUser(this.token);
            this.user = user;
            return user;
        },
        setUser(user: any){
            this.user = user;
        }
    }
})

function fetchUserList() {
    return 1 as any;
}


async function fetchCurUser(token: string | null) {
    try {
        const res = await api.get('/users/user/me', {
            headers: {
                "Authorization": token
            }
        })
        return res.data.data??null
    } catch (error) {
        console.log(error);
        return null
    }
}
