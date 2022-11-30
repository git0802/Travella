import { api, getFromLocal, saveToLocal } from './../utils/index';
import { getCookie } from '@/utils/cookies';
import { defineStore } from 'pinia';
import type { UserInfo } from '@/utils/types';

interface State {
    userList: UserInfo[]
    user: UserInfo | null,
    token: string | null,
    isGuest: boolean,
}

export const useUserStore = defineStore('user', {
    state: (): State => ({
        userList: [],
        user: null,
        token: getCookie('access_token'),
        isGuest: getFromLocal('isGuest') ?? false,
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
            if (this.token === '' || this.token === null) {
                this.user = null;
                return null;
            }
            const user: UserInfo | null = await fetchCurUser(this.token);
            this.user = user;
            return user;
        },
        setUser(user: any) {
            this.user = user;
        },

        async updateInfo(info: UserInfo) {
            this.user = info;
            try {
                const res = await api.patch(`/users/${info._id}`, info, {
                    headers: {
                        "Authorization": this.token
                    }
                });
                return res.data.data;
            } catch (error) {
                console.log(error);
                return null;
            }
        },

        async updatePasword(oldPassword: string, newPassword: string) {
            try {
                const res = await api.patch(`/users/user/me/updatepassword`, { oldPassword, newPassword }, {
                    headers: {
                        "Authorization": this.token
                    }
                });
                console.log(res);
                return { data: res.data.data, success: true };
            } catch (error: any) {
                console.log(error);
                return { error: error.response?.data?.message ?? 'Something went wrong', success: false };
            }
        },

        handleGuest(action: string) {
            switch (action) {
                case 'add':
                    this.isGuest = true;
                    saveToLocal('isGuest', true);
                    break;
                case 'remove':
                    this.isGuest = false;
                    localStorage.removeItem('isGuest');
                    break;
                default:
                    break;
            }
        },

        continueAsGuest() {
            this.handleGuest('add');
            window.location.href = '/dashboard';
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
        return res.data.data ?? null
    } catch (error) {
        console.log(error);
        return null
    }
}
