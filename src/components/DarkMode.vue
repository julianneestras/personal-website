<template>
    <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="isDark" class="hidden" />
        <div class="w-12 h-6 bg-gray-200 rounded-full relative transition-all" :class="{ 'bg-blue-500': isDark }">
            <div class="w-6 h-6 bg-white rounded-full absolute top-0 left-0 transition-transform flex items-center justify-center"
                :style="isDark ? { transform: 'translateX(100%)' } : {}">
                <!-- Moon icon for dark theme -->
                <svg v-if="isDark" class="w-4 h-4 text-gray-800 transition-opacity duration-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <!-- Sun icon for light theme -->
                <svg v-else class="w-4 h-4 text-yellow-500 transition-opacity duration-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
            </div>
        </div>
    </label>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

const setTheme = (theme) => {
    if (theme === 'dracula') {
        document.documentElement.setAttribute('data-theme', 'dracula')
        localStorage.setItem("color-theme", "dracula")
        isDark.value = true
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem("color-theme", "light")
        isDark.value = false
    }
}

watch(isDark, (newVal) => {
    setTheme(newVal ? 'dracula' : 'light')
})

onMounted(() => {
    const stored = localStorage.getItem("color-theme")

    if (stored === "dracula" || !stored === null) {
        setTheme('dracula')
    } else {
        setTheme('light')
    }
})
</script>

<style scoped>
.w-12 {
    width: 3rem;
}

.h-6 {
    height: 1.5rem;
}

.bg-gray-200 {
    background-color: #c4cad1;
}

.bg-blue-500 {
    background-color: #f4749c;
}

.w-6 {
    width: 1.5rem;
}

.h-6 {
    height: 1.5rem;
}

.bg-white {
    background-color: #ffffff;
}

.text-gray-800 {
    color: #f4749c;
}

.text-yellow-500 {
    color: #f59e0b;
}

.transition-transform {
    transition: transform 0.3s ease;
}
.transition-all {
    transition: all 0.3s ease;
}

.absolute {
    position: absolute;
}

.top-0 {
    top: 0;
}

.left-0 {
    left: 0;
}
</style>
