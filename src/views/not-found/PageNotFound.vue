<template>
    <div class="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 py-20">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000">
            </div>
            <div class="absolute top-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="max-w-4xl mx-auto text-center relative z-10">
            <!-- 404 Number with Fun Animation -->
            <div class="mb-8" ref="numberRef">
                <h1 class="text-8xl md:text-9xl font-bold transition-all duration-1000 transform" :class="[
                    isDark ? 'text-white' : 'text-gray-900',
                    { 'translate-y-0 opacity-100 scale-100': isNumberVisible, 'translate-y-[-50px] opacity-0 scale-75': !isNumberVisible }
                ]">
                    4
                    <span
                        class="inline-block transform transition-transform duration-300 hover:rotate-12 hover:scale-110 text-primary">
                        0
                    </span>
                    4
                </h1>

                <!-- Floating emojis around the 404 -->
                <div class="absolute inset-0 pointer-events-none">
                    <div class="absolute top-0 left-1/4 text-2xl animate-bounce delay-300">🤔</div>
                    <div class="absolute top-1/5 right-1/4 text-2xl animate-bounce delay-500">😅</div>
                </div>
            </div>

            <!-- Main Message -->
            <div class="mb-8" ref="messageRef">
                <h2 class="text-2xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-200 transform" :class="[
                    isDark ? 'text-white' : 'text-gray-900',
                    { 'translate-y-0 opacity-100': isMessageVisible, 'translate-y-[30px] opacity-0': !isMessageVisible }
                ]">
                    Oops! This page went on an adventure
                </h2>

                <p class="text-lg md:text-xl max-w-2xl mx-auto mb-6 transition-all duration-700 delay-400 transform"
                    :class="[
                        isDark ? 'text-slate-300' : 'text-gray-600',
                        { 'translate-y-0 opacity-100': isMessageVisible, 'translate-y-[20px] opacity-0': !isMessageVisible }
                    ]">
                    Looks like the page you're looking for decided to take a coffee break ☕
                    <br>
                    Don't worry though, we'll help you find your way back!
                </p>
            </div>

            <!-- Fun Animated Card -->
            <div class="mb-10" ref="cardRef">
                <div class="max-w-md mx-auto p-8 rounded-2xl shadow-lg transition-all duration-700 delay-600 transform"
                    :class="[
                        isDark ? 'backdrop-blur-md bg-[#13131a]/20 border border-gray-700' : 'bg-white border border-gray-200',
                        { 'translate-y-0 opacity-100 scale-100': isCardVisible, 'translate-y-[40px] opacity-0 scale-95': !isCardVisible }
                    ]">

                    <!-- Animated Status Indicator -->
                    <div class="flex items-center justify-center gap-3 mb-6">
                        <div class="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium" :class="isDark ? 'text-slate-300' : 'text-gray-600'">
                            Page Status: Missing in Action
                        </span>
                        <div class="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-500"></div>
                    </div>

                    <!-- Fun Message -->
                    <div class="text-center">
                        <div class="text-4xl mb-4 animate-bounce">🚀</div>
                        <p class="text-sm" :class="isDark ? 'text-slate-400' : 'text-gray-500'">
                            Meanwhile, the developer is probably debugging something else entirely...
                        </p>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" ref="buttonsRef">
                <button @click="goHome"
                    class="btn btn-primary px-8 py-3 rounded-lg font-semibold transition-all duration-700 delay-800 transform hover:scale-105 shadow-lg"
                    :class="{ 'translate-y-0 opacity-100': isButtonsVisible, 'translate-y-[20px] opacity-0': !isButtonsVisible }">
                    Take me home
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from '../../composables/useTheme';

const router = useRouter();
const { isDark, initTheme } = useTheme();

// Refs for intersection observer
const numberRef = ref(null);
const messageRef = ref(null);
const cardRef = ref(null);
const buttonsRef = ref(null);

// Visibility states for staggered animations
const isNumberVisible = ref(false);
const isMessageVisible = ref(false);
const isCardVisible = ref(false);
const isButtonsVisible = ref(false);

const goHome = () => {
    router.push('/home');
};

// Debug function to check stored theme
const getStoredTheme = () => {
    return localStorage.getItem('color-theme') || 'none';
};

onMounted(() => {
    // Initialize theme when component mounts
    initTheme();

    // Create observers for staggered animations
    const createObserver = (elementRef, visibilityRef, delay = 0) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        visibilityRef.value = true;
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (elementRef.value) {
            observer.observe(elementRef.value);
        }

        return observer;
    };

    // Create observers with staggered delays
    const observers = [
        createObserver(numberRef, isNumberVisible, 100),
        createObserver(messageRef, isMessageVisible, 300),
        createObserver(cardRef, isCardVisible, 500),
        createObserver(buttonsRef, isButtonsVisible, 700)
    ];

    // Trigger initial animations after a short delay
    setTimeout(() => {
        isNumberVisible.value = true;
    }, 200);

    // Cleanup function
    return () => {
        observers.forEach(observer => {
            observer.disconnect();
        });
    };
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

h1,
h2,
h3 {
    font-family: 'Poppins', sans-serif;
}

/* Custom animations */
@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.animate-bounce {
    animation: bounce 2s infinite;
}

.animate-pulse {
    animation: pulse 2s infinite;
}

/* Delay classes for staggered animations */
.delay-300 {
    animation-delay: 300ms;
}

.delay-500 {
    animation-delay: 500ms;
}

.delay-700 {
    animation-delay: 700ms;
}

.delay-900 {
    animation-delay: 900ms;
}

.delay-1000 {
    animation-delay: 1000ms;
}

.btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(244, 116, 156, 0.3);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(244, 116, 156, 0.5);
}
</style>