<template>
    <div class="min-h-screen py-15 px-6 md:px-10 lg:px-20">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-5xl mx-auto relative">
            <!-- Header Section -->
            <div class="text-center mb-16" ref="headerRef">
                <span class="text-primary font-medium tracking-widest uppercase text-sm mb-2 inline-block 
                    transition-all duration-500 transform"
                    :class="{ 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }">
                    Know Me Better
                </span>
                <h2 class="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 transform"
                    :class="[isDark ? 'text-slate-100' : 'text-slate-800',
                    { 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }]">
                    About Me
                </h2>
                <p class="text-lg max-w-2xl mx-auto mb-8 transition-all duration-500 delay-200 transform"
                    :class="[isDark ? 'text-slate-300' : 'text-gray-500',
                    { 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }]">
                    Wanna know more? I’m a front-end dev who loves making websites look good. Clean code and cool
                    design—that’s my thing!
                </p>

                <!-- Available Status -->
                <div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full
                    transition-all duration-500 delay-300 transform animate-heartbeat"
                    :class="{ 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[10px] opacity-0': !isHeaderVisible }">
                    <div class="w-2 h-2 bg-primary rounded-full animate-blink"></div>
                    <span class="text-primary font-medium text-sm animate-text-blink">Available for new
                        opportunities</span>
                </div>
            </div>

            <!-- Main Content Sections -->
            <div class="space-y-12">
                <!-- Tech Stack Section -->
                <div class="p-8 rounded-2xl shadow-lg transition-all duration-500 transform"
                    :class="[isDark ? 'backdrop-blur-md bg-[#13131a]/20' : 'bg-white',
                    { 'translate-y-0 opacity-100': isTechVisible, 'translate-y-[60px] scale-96 opacity-0': !isTechVisible }]" ref="techRef">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold transition-all duration-500"
                            :class="[isDark ? 'text-slate-100' : 'text-slate-800',
                            { 'translate-x-0 opacity-100': isTechVisible, 'translate-x-[-20px] opacity-0': !isTechVisible }]">
                            Tech Stack & Tools
                        </h2>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div v-for="(tech, index) in techStack" :key="tech.name"
                            class="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer group transform"
                            :class="[
                                isDark ? 'border-2 border-gray-700 hover:border-primary/30 hover:bg-primary/10' : 'border-2 border-gray-100 hover:border-primary/30 hover:bg-primary/5',
                                { 'translate-y-0 opacity-100': isTechVisible, 'translate-y-[10px] opacity-0': !isTechVisible },
                                `transition-delay-${index * 50}`
                            ]">
                            <div
                                class="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform">
                                <img :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain">
                            </div>
                            <div>
                                <span class="font-medium" :class="isDark ? 'text-slate-100' : 'text-slate-800'">{{
                                    tech.name }}</span>
                                <div class="text-xs" :class="isDark ? 'text-slate-400' : 'text-gray-500'">{{ tech.level
                                }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Experience Timeline -->
                <div class="p-8 rounded-2xl shadow-lg transition-all duration-500 transform"
                    :class="[isDark ? 'backdrop-blur-md bg-[#13131a]/20' : 'bg-white',
                    { 'translate-y-0 opacity-100': isExpVisible, 'translate-y-[60px] scale-96 opacity-0': !isExpVisible }]" ref="experienceRef">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                </path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold transition-all duration-500"
                            :class="[isDark ? 'text-slate-100' : 'text-slate-800',
                            { 'translate-x-0 opacity-100': isExpVisible, 'translate-x-[-20px] opacity-0': !isExpVisible }]">
                            Experience
                        </h2>
                    </div>

                    <div class="space-y-8">
                        <div v-for="(exp, index) in experience" :key="exp.id"
                            class="relative pl-8 transition-all duration-500 transform" :class="[
                                isDark ? 'border-l-2 border-gray-700 last:border-l-0' : 'border-l-2 border-gray-200 last:border-l-0',
                                { 'translate-x-0 opacity-100': isExpVisible, 'translate-x-[-20px] opacity-0': !isExpVisible },
                                `delay-${index * 150}`
                            ]">
                            <div class="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                            <div class="pb-8">
                                <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                    <h3 class="font-semibold text-lg"
                                        :class="isDark ? 'text-slate-100' : 'text-slate-800'">{{ exp.position }}</h3>
                                    <span class="text-primary font-medium">@ {{ exp.company }}</span>
                                </div>
                                <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                                    <span class="text-sm" :class="isDark ? 'text-slate-400' : 'text-gray-500'">{{
                                        exp.period }}</span>
                                    <span class="hidden sm:inline"
                                        :class="isDark ? 'text-gray-600' : 'text-gray-300'">•</span>
                                    <span class="text-sm" :class="isDark ? 'text-slate-400' : 'text-gray-500'">{{
                                        exp.location }}</span>
                                </div>
                                <ul class="space-y-2">
                                    <li v-for="(achievement, achIndex) in exp.achievements" :key="achievement"
                                        class="flex items-start gap-2 transition-all duration-300 transform" :class="[
                                            isDark ? 'text-slate-300' : 'text-gray-600',
                                            { 'translate-y-0 opacity-100': isExpVisible, 'translate-y-[10px] opacity-0': !isExpVisible },
                                            `transition-delay-${index * 150 + achIndex * 100}`
                                        ]">
                                        <span class="text-primary mt-2 text-xs">▸</span>
                                        <span>{{ achievement }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Interests & Hobbies -->
                <div class="p-8 rounded-2xl shadow-lg transition-all duration-500 transform"
                    :class="[isDark ? 'backdrop-blur-md bg-[#13131a]/20' : 'bg-white',
                    { 'translate-y-0 opacity-100': isInterestsVisible, 'translate-y-[60px] scale-96 opacity-0': !isInterestsVisible }]" ref="interestsRef">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                </path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold transition-all duration-500"
                            :class="[isDark ? 'text-slate-100' : 'text-slate-800',
                            { 'translate-x-0 opacity-100': isInterestsVisible, 'translate-x-[-20px] opacity-0': !isInterestsVisible }]">
                            Interests & Passions
                        </h2>
                    </div>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div v-for="(interest, index) in interests" :key="interest.name"
                            class="flex items-center gap-4 p-4 rounded-xl transition-all duration-500 transform group cursor-pointer"
                            :class="[
                                isDark ? 'bg-gray-700/50 hover:bg-primary/10' : 'bg-gray-50 hover:bg-primary/15',
                                { 'translate-y-0 opacity-100': isInterestsVisible, 'translate-y-[10px] opacity-0': !isInterestsVisible },
                                getInterestDelay(index)
                            ]">
                            <div class="text-2xl transform transition-all duration-300 group-hover:scale-110">{{
                                interest.emoji }}</div>
                            <div>
                                <h3 class="font-medium" :class="isDark ? 'text-slate-100' : 'text-slate-800'">{{
                                    interest.name }}</h3>
                                <p class="text-sm" :class="isDark ? 'text-slate-400' : 'text-gray-600'">{{
                                    interest.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div :class="[
                    'p-8 rounded-2xl backdrop-blur-xl text-white backdrop-saturate-150 transition-all duration-500 transform',
                    isDark
                        ? 'bg-gradient-to-r from-[#f4749c]/50 to-[#f4749c]/20 text-white'
                        : 'bg-gradient-to-r from-[#f4749c] to-[#fbb6ce] text-black',
                    isFunFactVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-[60px] opacity-0'
                ]" ref="funFactRef">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="text-3xl transform transition-all duration-500" :class="{
                            'rotate-0 scale-100': isFunFactVisible,
                            'rotate-12 scale-0': !isFunFactVisible
                        }">
                            💡
                        </div>
                        <h2 class="text-2xl font-bold transition-all duration-500" :class="{
                            'translate-x-0 opacity-100': isFunFactVisible,
                            'translate-x-[-20px] opacity-0': !isFunFactVisible
                        }">
                            Fun Fact
                        </h2>
                    </div>
                    <p class="text-lg opacity-90 transition-all duration-500 delay-200" :class="{
                        'translate-y-0 opacity-90': isFunFactVisible,
                        'translate-y-[20px] opacity-0': !isFunFactVisible
                    }">
                        I originally dreamed of becoming a veterinarian because of my deep love for animals.
                        Life took me on a different path, leading me into programming, but that passion for caring and
                        curiosity about living things still inspires me every day.
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDark } = useTheme();

// References for intersection observer
const headerRef = ref(null);
const techRef = ref(null);
const experienceRef = ref(null);
const interestsRef = ref(null);
const funFactRef = ref(null);

// Visibility states for animations
const isHeaderVisible = ref(false);
const isTechVisible = ref(false);
const isExpVisible = ref(false);
const isInterestsVisible = ref(false);
const isFunFactVisible = ref(false);

// Helper function to get correct delay class for interests
const getInterestDelay = (index) => {
    const delayValue = index * 100;
    return `transition-delay-${delayValue}`;
};

onMounted(() => {
    // Create observers for each section
    const createObserver = (elementRef, visibilityRef) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                visibilityRef.value = entry.isIntersecting;
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -100px 0px' // Trigger slightly before element enters viewport
            }
        );

        if (elementRef.value) {
            observer.observe(elementRef.value);
        }

        return observer;
    };

    // Create observers for each section
    const observers = [
        createObserver(headerRef, isHeaderVisible),
        createObserver(techRef, isTechVisible),
        createObserver(experienceRef, isExpVisible),
        createObserver(interestsRef, isInterestsVisible),
        createObserver(funFactRef, isFunFactVisible)
    ];

    // Trigger header visibility immediately for better UX
    setTimeout(() => {
        isHeaderVisible.value = true;
    }, 200);

    // Cleanup function
    return () => {
        observers.forEach((observer, index) => {
            const refs = [headerRef, techRef, experienceRef, interestsRef, funFactRef];
            if (refs[index].value) {
                observer.unobserve(refs[index].value);
            }
        });
    };
});

const techStack = ref([
    {
        name: 'Vue.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        level: 'Beginner'
    },
    {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        level: 'Beginner'
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        level: 'Intermediate'
    },
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        level: 'Skilled'
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        level: 'Skilled'
    },
    {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        level: 'Intermediate'
    }
]);

const experience = ref([
    {
        id: 1,
        position: 'Freelance Frontend Developer',
        company: 'PG Online Casino',
        period: 'February 2025 – Present',
        location: 'Remote',
        achievements: [
            'Implemented UI components based on Figma designs using Vue 3, TypeScript, and Vant UI for mobile-first development'
        ]
    },
    {
        id: 2,
        position: 'Frontend Developer',
        company: 'Digiplus Interactive Corp.',
        period: '2023 – 2025',
        location: 'Philippines',
        achievements: [
            'Developed real-time mobile bingo game using Vue 3, Vant 4 UI, and WebSockets',
            'Integrated animations with Oku Motion and GSAP to enhance gameplay UX',
            'Built an ordering web app using Vue 2, Element Plus, Pinia, and Vue Router',
            'Integrated REST APIs via Axios and integrated WebSockets for real-time data communication',
            'Converted detailed Figma UI mockups into fully responsive and functional mobile web interfaces'
        ]
    }
]);

const interests = ref([
    {
        name: 'UI/UX Design',
        emoji: '🎨',
        description: 'Love making things look clean and visually appealing.'
    },
    {
        name: 'Gaming',
        emoji: '🎮',
        description: 'Mostly into FPS and some Mobile Legends on the side.'
    },
    {
        name: 'Digital Art',
        emoji: '💻',
        description: 'I like drawing stuff when I’m in the mood to be creative.'
    },
    {
        name: 'Music (K-Pop)',
        emoji: '🎵',
        description: 'Always got some K-pop playing in the background.'
    },
    {
        name: 'Reading Books',
        emoji: '📖',
        description: 'Books are my go-to when I wanna chill.'
    },
    {
        name: 'Learning',
        emoji: '📚',
        description: 'I’m into random deep dives and learning new stuff.'
    }
]);

</script>

<style scoped>
.delay-0 {
    transition-delay: 0ms;
}

.delay-1 {
    transition-delay: 150ms;
}

.delay-2 {
    transition-delay: 300ms;
}

/* Custom transition delays for animated elements */
.transition-delay-0 {
    transition-delay: 300ms;
}

.transition-delay-50 {
    transition-delay: 350ms;
}

.transition-delay-100 {
    transition-delay: 400ms;
}

.transition-delay-150 {
    transition-delay: 450ms;
}

.transition-delay-200 {
    transition-delay: 500ms;
}

.transition-delay-250 {
    transition-delay: 550ms;
}

.transition-delay-300 {
    transition-delay: 600ms;
}

.transition-delay-400 {
    transition-delay: 700ms;
}

.transition-delay-500 {
    transition-delay: 800ms;
}

/* Custom animations */
@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

@keyframes text-blink {

    0%,
    100% {
        opacity: 1;
    }

    60% {
        opacity: 0.8;
    }
}

@keyframes heartbeat {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.03);
    }
}

.animate-blink {
    animation: blink 1.5s infinite;
}

.animate-text-blink {
    animation: text-blink 2s infinite;
}

.animate-heartbeat {
    animation: heartbeat 2s infinite;
}
</style>