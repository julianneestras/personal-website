<template>
    <div>
        <div class="navbar bg-base-100 shadow-md items-center justify-evenly px-4">
            <a class="btn btn-ghost text-xl">My Portfolio</a>

            <!-- Mobile controls -->
            <div class="flex items-center space-x-0 lg:hidden ml-auto">
                <DarkMode />
                <div class="order-1">

                </div>

                <!-- Hamburger on mobile -->
                <div class="order-2">
                    <button @click="toggleNavbar" class="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Main navbar for large screens -->
            <div class="hidden lg:flex items-center space-x-6 pl-60">
                <a href="#home" class="text-base">Home</a>
                <a href="#about" class="text-base">About</a>
                <a href="#projects" class="text-base">Projects</a>
                <a href="#contact" class="text-base">Contact</a>
                <button class="btn btn-soft btn-primary">Download Resume</button>
                <DarkMode />
            </div>
        </div>

        <!-- Sidebar navigation overlay -->
        <div v-if="isNavbarOpen" class="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40" @click="toggleNavbar"></div>

        <!-- Sidebar navigation (mobile) -->
        <transition name="slide">
            <div v-if="isNavbarOpen"
                class="fixed top-0 right-0 h-full w-2/3 max-w-xs bg-base-100 shadow-lg z-50 p-6 space-y-4 lg:hidden">
                <button @click="toggleNavbar" class="absolute top-4 right-4 btn btn-sm btn-ghost">
                    ✕
                </button>
                <nav class="flex flex-col space-y-4 mt-8">
                    <a href="#home" class="text-lg" @click="toggleNavbar">Home</a>
                    <a href="#about" class="text-lg" @click="toggleNavbar">About</a>
                    <a href="#projects" class="text-lg" @click="toggleNavbar">Projects</a>
                    <a href="#contact" class="text-lg" @click="toggleNavbar">Contact</a>
                </nav>
                <div class="mt-12">
                    <button class="btn btn-soft btn-primary w-full">Download Resume</button>
                </div>
            </div>
        </transition>
    </div>
</template>



<script setup>
import { ref } from 'vue'
import DarkMode from '../components/DarkMode.vue'

const isNavbarOpen = ref(false)

const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0%);
    opacity: 1;
}
</style>