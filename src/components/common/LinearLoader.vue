<template>
    <div class="w-full h-[4px] absolute top-0 left-0">
        <v-progress-linear v-model="value" color="#411ef8" />
        <div v-if="stream" class="absolute top-0 z-10 w-full">
            <v-progress-linear color="#421ef886" :indeterminate="true"/>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'LinearLoader',
    data() {
        return {
            value: 0,
            interval: 0,
            stream: false,
        };
    },

    mounted() {
        this.queryAndIndeterminate();
    },

    beforeDestroy() {
        clearInterval(this.interval);
    },

    methods: {
        queryAndIndeterminate() {

            setTimeout(() => {
                this.interval = window.setInterval(() => {
                    if (this.value === 98) {
                        this.stream = true;
                        clearInterval(this.interval);
                        return setTimeout(this.queryAndIndeterminate, 2000);
                    }
                    this.value += 1;
                }, 50);
            }, 200);
        },
    },
};
</script>