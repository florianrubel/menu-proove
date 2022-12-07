<template>
<nav
    class="mobile-menu"
    :class="classes"
>
    <div class="mobile-menu__indicator" :style="{ left: indicatorLeft }" />
    <button
        v-for="(buttonDef, index) in buttonDefs"
        :key="index"
        :id="`${id}_${index}`"
        class="mobile-menu__item"
        :class="{ 'mobile-menu__item--active': itemIndex === index }"
        type="button"
        @click="setItem(index, `${id}_${index}`)"
    >
        <div class="mobile-menu__item-label">{{buttonDef.label}}</div>
        <Component :is="buttonDef.icon" class="mobile-menu__item-icon" />
    </button>
</nav>
</template>

<script lang="ts" setup>
import { UserCircleIcon, PhotoIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';
import { computed, onMounted, ref } from 'vue';
import { getUniqueId } from '~/helpers/index';

const buttonDefs = [
    {
        label: 'Profile',
        icon: UserCircleIcon,
    },
    {
        label: 'Photos',
        icon: PhotoIcon,
    },
    {
        label: 'Settings',
        icon: Cog6ToothIcon,
    },
];

const id = ref<string>(getUniqueId());
const itemIndex = ref<number>(0);
const indicatorLeft = ref<string>('0');

const showIndicator = computed<boolean>(() => itemIndex.value !== undefined);

const classes = computed<string[]>(() => {
    const tmp = [] as string[];
    if (showIndicator.value) tmp.push('mobile-menu--show-indicator');
    return tmp;
});

function setItem(index: number, elementId: string): void {
    itemIndex.value = index;
    const element = document.getElementById(elementId);
    if (!element) return;
    indicatorLeft.value = `${element.offsetLeft}px`;
}

onMounted(() => {
    setItem(0, `${id.value}_${0}`);
});
</script>
