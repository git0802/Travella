<template>
    <div class="flex flex-col w-full px-[5%] py-8">
        <h1 class="text-mainblue font-semibold text-lg">TOP DESTINATIONS</h1>
        <h1 class="tablet:text-2xl font-semibold mt-6">Explore Top Destination</h1>
        <div class="flex w-full items-center relative">
            <button @click="() => scroll('left')"
                :class="`absolute left-1 z-10 bg-mainwhite/70 md:p-2 p-1 px-[0.4em] md:px-3 rounded-full ${isOnLeft && 'hidden'}`">
                <v-icon class="" size="19" icon="fas fa-chevron-left" />
            </button>
            <div id="scroller" class="grid scrollbar-hide grid-flow-col w-full mt-4 gap-3 overflow-x-auto px-1">
                <PlaceCardVue v-for="place in places" :key="place.id" :place="place" />

            </div>
            <button @click="() => scroll('right')"
                :class="`absolute right-0 z-10 bg-mainwhite/70 md:p-2 p-1 px-[0.4em] md:px-3 rounded-full ${isOnRight && 'hidden'}`">
                <v-icon class="" size="19" icon="fas fa-chevron-right" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PlaceCardVue from '@/components/common/PlaceCard.vue';
import { onMounted, ref, watch } from 'vue';
import { places } from '../common/data';
const isOnLeft = ref(true);
const isOnRight = ref(false);

onMounted(() => {
    const scroller = document.getElementById('scroller');
    scroller?.addEventListener('scroll', () => {
        if (scroller.scrollLeft === 0) {
            isOnLeft.value = true;
        } else {
            isOnLeft.value = false;
        }
        if (scroller.scrollLeft + scroller.clientWidth === scroller.scrollWidth) {
            isOnRight.value = true;
        } else {
            isOnRight.value = false;
        }
    });
});

const scroll = (direction: string) => {
    const cont = document.querySelector('#scroller')!;
    const isLeft = cont.scrollLeft === 0;
    const isRight = cont.scrollLeft === cont.scrollWidth - cont.clientWidth;

    if (isLeft) {
        isOnLeft.value = true;
        isOnRight.value = false;
    } else if (isRight) {
        isOnLeft.value = false;
        isOnRight.value = true;
    } else {
        console.log('middle');
        isOnLeft.value = false;
        isOnRight.value = false;
    }
    if (direction === 'left' && !isLeft) {
        cont.scrollBy({
            left: -cont.clientWidth,
            behavior: 'smooth',
        });
    } else if (direction === 'right' && !isRight) {
        cont.scrollBy({
            left: cont.clientWidth,
            behavior: 'smooth',
        });
    };
}
</script>