<template>
    <div>
        <div
            :class="['navbar fixed top-0 w-full z-30 transition-all duration-300 items-center justify-evenly', scrolled ? 'bg-base-200 shadow-md' : 'bg-transparent']">
            <img src="../assets/logo.svg" alt="logo" class="h-10 w-10 pl-4" />

            <!-- Mobile controls -->
            <div class="flex items-center space-x-0 lg:hidden ml-auto">
                <DarkMode />

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
            <div class="hidden lg:flex items-center space-x-6 p-auto">
                <a @click.prevent="scrollToSection('home')" href="#home"
                    class="text-base text-gray-500 hover:text-gray-700 cursor-pointer">Home</a>
                <a @click.prevent="scrollToSection('about')" href="#about"
                    class="text-base text-gray-500 hover:text-gray-700 cursor-pointer">About</a>
                <a @click.prevent="scrollToSection('projects')" href="#projects"
                    class="text-base text-gray-500 hover:text-gray-700 cursor-pointer">Projects</a>
                <a @click.prevent="scrollToSection('contact')" href="#contact"
                    class="text-base text-gray-500 hover:text-gray-700 cursor-pointer">Contact</a>

                <div class="relative justify-center inline-block items-center m-0 w-full h-full">
                    <button @click="downloadResume" class="btn mr-4 btn-primary shadow-sm rounded-lg z-10">
                        Download Resume
                    </button>
                    <div v-if="showConfetti"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                        <DotLottieVue src="https://lottie.host/7e090be5-e7f8-46fb-a2bc-d06155fde6cc/mV94ISmnPZ.lottie"
                            background="transparent" speed="1" loop autoplay class="w-48 h-48"
                            @animationend="hideConfetti" />
                    </div>
                </div>
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
                    <a @click.prevent="scrollToSection('home'); toggleNavbar()" href="#home"
                        class="text-lg text-gray-500 hover:text-gray-700 cursor-pointer">Home</a>
                    <a @click.prevent="scrollToSection('about'); toggleNavbar()" href="#about"
                        class="text-lg text-gray-500 hover:text-gray-700 cursor-pointer">About</a>
                    <a @click.prevent="scrollToSection('projects'); toggleNavbar()" href="#projects"
                        class="text-lg text-gray-500 hover:text-gray-700 cursor-pointer">Projects</a>
                    <a @click.prevent="scrollToSection('contact'); toggleNavbar()" href="#contact"
                        class="text-lg text-gray-500 hover:text-gray-700 cursor-pointer">Contact</a>
                </nav>
                <div class="mt-12 relative">
                    <button @click="downloadResume" class="btn btn-primary w-full rounded-lg">Download Resume</button>
                    <div v-if="showConfetti"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                        <DotLottieVue src="https://lottie.host/7e090be5-e7f8-46fb-a2bc-d06155fde6cc/mV94ISmnPZ.lottie"
                            background="transparent" speed="1" loop autoplay class="w-48 h-48"
                            @animationend="hideConfetti" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import DarkMode from '../components/DarkMode.vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
// Using the URL approach for public assets

const router = useRouter()
const isNavbarOpen = ref(false)
const showConfetti = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 10
}

const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value
}

const downloadResume = () => {
    showConfetti.value = true
    const link = document.createElement('a')
    link.href = '/assets/resume/Julianne_Estras_Resume.pdf'
    link.download = 'JulianneEstras_Resume_2025.pdf'
    link.click()

    setTimeout(() => {
        showConfetti.value = false
    }, 3000)
}

const hideConfetti = () => {
    showConfetti.value = false
}

const scrollToSection = (sectionId) => {
    // Update the URL
    router.push({ path: `/${sectionId}` })

    // Scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
        // Add smooth scrolling
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    } else if (sectionId === 'home') {
        // Special case for home which might not have an ID
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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

a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}
</style>