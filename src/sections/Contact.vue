<template>
    <div class="py-16 md:px-10 lg:px-20 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute bottom-20 right-16 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-float-delayed">
            </div>
            <div class="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div class="max-w-4xl mx-auto relative z-10">
            <!-- Header Section -->
            <div class="text-center mb-16" ref="headerRef">
                <span class="text-primary font-medium tracking-widest uppercase text-sm mb-2 inline-block 
                    transition-all duration-500 transform"
                    :class="{ 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }">
                    Get In Touch
                </span>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 transition-all duration-500 delay-100 transform"
                    :class="[isDark ? 'text-slate-100' : 'text-slate-800',
                    { 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }]">
                    Let's Work Together!
                    <span class="inline-block animate-wave">👋</span>
                </h2>
                <p class="text font-medium text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-8 transition-all duration-500 delay-200 transform"
                    :class="[
                        { 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }]">
                    Want to collaborate on something awesome? Or just want to say hi?
                    I'd love to hear from you!
                    <span class="text-primary font-medium">Drop me a message!</span>
                </p>
            </div>

            <!-- Fun Stats Section -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-2 sm:px-0" ref="statsRef">
                <div v-for="(stat, index) in funStats" :key="stat.label"
                    class="text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 transform group cursor-pointer sm:hover:scale-105"
                    :class="[
                        isDark ? 'border-2 border-gray-700 hover:border-primary/20 hover:bg-primary/5' : 'border-2 border-gray-100 hover:border-primary/20 hover:bg-primary/3',
                        { 'translate-y-0 opacity-100 scale-100': isStatsVisible, 'translate-y-[30px] opacity-0 scale-95': !isStatsVisible },
                        'transition-delay-' + (index * 150),
                        // Mobile active state
                        {
                            'border-primary/30 bg-primary/10 scale-105 mobile-active-glow': activeStatIndex === index && isMobile
                        }
                    ]" @click="handleStatClick(index)" @touchstart.passive @touchend.passive>
                    <div class="mb-2 sm:mb-3 flex justify-center" :class="{
                        'group-hover:animate-bounce': !isMobile,
                        'animate-bounce': activeStatIndex === index && isMobile
                    }">
                        <img v-if="stat.image" :src="stat.image" :alt="stat.label"
                            class="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                        <span v-else class="text-2xl sm:text-3xl">{{ stat.emoji }}</span>
                    </div>
                    <h1 class="text-xl text sm:text-2xl font-bold mb-1 sm:mb-2"
                        :class="[isDark ? 'text-slate-100' : 'text-slate-800']">
                        {{ stat.number }}
                    </h1>
                    <div class="text-sm sm:text-md" :class="[isDark ? 'text-slate-400' : 'text-gray-500']">
                        {{ stat.label }}
                    </div>
                </div>
            </div>

            <!-- Contact Options -->
            <div class="space-y-4 sm:space-y-6 px-2 sm:px-0" ref="contactRef">
                <!-- Email Card -->
                <div class="group relative overflow-hidden rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 transform cursor-pointer"
                    :class="[
                        'bg-gradient-to-r from-primary/90 to-secondary/50 hover:from-primary/90 hover:to-secondary/90',
                        { 'translate-x-0 opacity-100 scale-100': isContactVisible, 'translate-x-[-50px] opacity-0 scale-95': !isContactVisible }
                    ]" @click="openEmail" ref="emailCard">

                    <!-- Animated background pattern -->
                    <div
                        class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute inset-0 animate-pulse opacity-20">
                            <div
                                class="w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-full absolute top-3 left-3 sm:top-4 sm:left-4">
                            </div>
                            <div
                                class="w-2 h-2 sm:w-3 sm:h-3 bg-white/15 rounded-full absolute top-6 right-6 sm:top-8 sm:right-8">
                            </div>
                            <div
                                class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/25 rounded-full absolute bottom-4 left-8 sm:bottom-6 sm:left-12">
                            </div>
                        </div>
                    </div>
                    <!-- Email Card -->
                    <div class="relative z-10 flex items-center justify-between">
                        <div class="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1">
                            <div
                                class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                <svg class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Email Me
                                </h3>
                                <p class="text-white/80 text-sm sm:text-base lg:text-lg sm:break-normal">
                                    julianneestras@gmail.com</p>
                                <p class="text-white/60 text-xs sm:text-sm mt-1 hidden sm:block">Best for longer chats
                                    about projects and cool ideas</p>
                            </div>
                        </div>
                        <div
                            class="text-white/60 group-hover:text-white transition-colors duration-300 group-hover:translate-x-2 transform flex-shrink-0 ml-2">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- LinkedIn Card -->
                <div class="group relative overflow-hidden rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 delay-200 transform cursor-pointer"
                    :class="[
                        isDark
                            ? 'bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-500 hover:to-blue-600'
                            : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-400 hover:to-blue-500',
                        { 'translate-x-0 opacity-100 scale-100': isContactVisible, 'translate-x-[50px] opacity-0 scale-95': !isContactVisible }
                    ]" @click="openLinkedIn">

                    <!-- Animated background pattern -->
                    <div
                        class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute inset-0 animate-pulse opacity-20">
                            <div class="w-4 h-4 sm:w-6 sm:h-6 bg-white/20 absolute top-4 left-4 sm:top-6 sm:left-6">
                            </div>
                            <div class="w-3 h-3 sm:w-4 sm:h-4 bg-white/15 absolute top-8 right-8 sm:top-12 sm:right-12">
                            </div>
                            <div
                                class="w-2 h-2 sm:w-3 sm:h-3 bg-white/25 absolute bottom-6 left-12 sm:bottom-8 sm:left-16">
                            </div>
                        </div>
                    </div>

                    <div class="relative z-10 flex items-center justify-between">
                        <div class="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1">
                            <div
                                class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                <svg class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">LinkedIn
                                </h3>
                                <p class="text-white/80 text-sm sm:text-base lg:text-lg">Let's connect professionally
                                </p>
                                <p class="text-white/60 text-xs sm:text-sm mt-1 hidden sm:block">Perfect for quick
                                    hellos and professional connections</p>
                            </div>
                        </div>
                        <div
                            class="text-white/60 group-hover:text-white transition-colors duration-300 group-hover:translate-x-2 transform flex-shrink-0 ml-2">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDark } = useTheme();

// Refs for intersection observer
const headerRef = ref(null);
const statsRef = ref(null);
const contactRef = ref(null);
const emailCard = ref(null);

// Visibility states
const isHeaderVisible = ref(false);
const isStatsVisible = ref(false);
const isContactVisible = ref(false);

// Mobile interaction states
const activeStatIndex = ref(-1);
const isMobile = ref(false);

// Fun data
const funStats = ref([
    { emoji: '🍵', number: '500+', label: 'Matcha consumed' },
    { emoji: '💻', number: '24/7', label: 'Ready to code' },
    { emoji: '🎯', number: '100%', label: 'Commitment to quality' }
]);

// Methods
const handleStatClick = (index) => {
    if (isMobile.value) {
        activeStatIndex.value = index;
        // Reset after animation
        setTimeout(() => {
            activeStatIndex.value = -1;
        }, 1000);
    }
};

const checkIfMobile = () => {
    isMobile.value = window.innerWidth < 768;
};

const openEmail = () => {
    const subject = 'Hello! Let\'s work together 🚀';
    const body = 'Hi there!\n\nI came across your portfolio and I\'d love to discuss...\n\nBest regards,';
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.open(`mailto:julianneestras@gmail.com?subject=${encodedSubject}&body=${encodedBody}`, '_blank');

    // Add a fun click effect
    if (emailCard.value) {
        emailCard.value.style.transform = 'scale(0.98)';
        setTimeout(() => {
            if (emailCard.value) {
                emailCard.value.style.transform = 'scale(1)';
            }
        }, 150);
    }
};

const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/julianne-estras/', '_blank');
};

onMounted(() => {
    // Check if mobile on mount and resize
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const createObserver = (elementRef, visibilityRef, threshold = 0.15) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                visibilityRef.value = entry.isIntersecting;
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (elementRef.value) {
            observer.observe(elementRef.value);
        }

        return observer;
    };

    // Create observers
    const observers = [
        createObserver(headerRef, isHeaderVisible),
        createObserver(statsRef, isStatsVisible),
        createObserver(contactRef, isContactVisible)
    ];

    // Trigger header animation immediately
    setTimeout(() => {
        isHeaderVisible.value = true;
    }, 200);

    // Cleanup
    return () => {
        observers.forEach(observer => observer.disconnect());
        window.removeEventListener('resize', checkIfMobile);
    };
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


h2,
h3 {
    font-family: 'Poppins', sans-serif;
}

.text {
    font-family: 'Montserrat', sans-serif;
}

@keyframes wave {

    0%,
    100% {
        transform: rotate(0deg);
    }

    10%,
    30% {
        transform: rotate(14deg);
    }

    20% {
        transform: rotate(-8deg);
    }

    40% {
        transform: rotate(-4deg);
    }

    50% {
        transform: rotate(10deg);
    }

    60% {
        transform: rotate(0deg);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    33% {
        transform: translateY(-10px) rotate(1deg);
    }

    66% {
        transform: translateY(5px) rotate(-1deg);
    }
}

@keyframes float-delayed {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    33% {
        transform: translateY(8px) rotate(-1deg);
    }

    66% {
        transform: translateY(-12px) rotate(1deg);
    }
}

.animate-wave {
    animation: wave 2.5s ease-in-out infinite;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
}

/* Staggered animation delays */
.transition-delay-0 {
    transition-delay: 0ms;
}

.transition-delay-150 {
    transition-delay: 150ms;
}

.transition-delay-300 {
    transition-delay: 300ms;
}

.transition-delay-450 {
    transition-delay: 450ms;
}

/* Hover effects */
.group:hover .group-hover\:animate-bounce {
    animation: bounce 1s ease-in-out infinite;
}

/* Custom gradient hover effects */
.group:hover,
.mobile-active-glow {
    box-shadow: 0 20px 40px rgba(244, 116, 156, 0.1) !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {

    .animate-float,
    .animate-float-delayed {
        animation: none;
    }

    /* Disable hover effects on touch devices */
    .group:hover {
        box-shadow: none;
    }

    .group:hover .group-hover\:animate-bounce {
        animation: none;
    }
}
</style>