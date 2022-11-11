import { defineStore } from 'pinia';
import { ref, computed } from 'vue';


interface State {
    userList: UserInfo[]
    user: UserInfo | null
}

export const useUserStore = defineStore('user', {
    state: (): State => ({
        userList: [],
        user: null,
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

        async fetchUser(id: number) {
            const user: UserInfo | null = await fetchUser(id);
            this.user = user;
        },
    }
})

interface UserInfo {
    name: string
    age: number,
    email: string
}

function fetchUserList() {
    return 1 as any;
}


function fetchUser(id: number) {
    return 1 as any;
}
