<template>
    <div class="project-card">
        <div class="rounded-xl shadow-lg transition-all duration-500 transform hover:shadow-2xl hover:translate-y-[-5px] flex flex-col md:flex-row overflow-hidden"
            :class="isDark ? 'backdrop-blur-md bg-[#13131a]/20' : 'bg-white-200'">
            <!-- Project image on the right -->
            <div class="w-full md:w-1/2 md:order-2 h-56 md:h-auto relative overflow-hidden">
                <img :src="project.image || '/api/placeholder/600/400'" :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <!-- Gradient overlay - only in dark mode -->
                <div
                    :class="isDark ? 'absolute inset-0 bg-gradient-to-t from-black/60 opacity-30' : 'absolute inset-0 bg-gradient-to-t from-white/60 opacity-30'">
                </div>
            </div>
            <!-- Project content on the left -->
            <div class="w-full md:w-1/2 md:order-1 p-8 flex flex-col">
                <h3 class="text-2xl font-bold mb-2 font-sans" :class="isDark ? 'text-slate-100' : 'text-slate-800'">{{
                    project.title }}</h3>
                <p class="mb-6 flex-grow" :class="isDark ? 'text-slate-300' : 'text-slate-600'">{{ project.description
                    }}</p>
                <!-- Tech badges -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <span v-for="tech in project.tech" :key="tech"
                        class="px-3 py-1 text-xs bg-primary/20 backdrop-blur-md rounded-full transform transition-all duration-300 hover:scale-105 shadow-sm"
                        :class="isDark ? 'text-white' : 'text-slate-700'">
                        {{ tech }}
                    </span>
                </div>
                <!-- Action buttons -->
                <div class="flex items-center gap-4 mt-auto">
                    <a :href="project.github" target="_blank"
                        class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                        :class="isDark ? 'text-primary' : 'text-slate-700'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            viewBox="0 0 16 16" class="transition-transform duration-300 group-hover:rotate-12">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        GitHub
                    </a>
                    <a href="#" @click.prevent="showPreview"
                        class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg btn btn-primary hover:brightness-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <g id="Interface / External_Link">
                                <path id="Vector"
                                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                        </svg>Preview
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark } = useTheme()

const props = defineProps({
    project: {
        type: Object,
        required: true,
    }
});

const showPreview = () => {
    // You could implement a modal/preview functionality here
    alert(`Opening preview for ${props.project.title}`);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.project-card {
    font-family: 'Poppins', sans-serif;
}

.bg-primary-gradient {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
}

/* Create animation keyframes */
@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-5px);
    }

    100% {
        transform: translateY(0px);
    }
}

/* Apply subtle floating animation on hover */
/* .project-card:hover {
    animation: float 5s ease-in-out infinite;
} */

/* Add a subtle shine effect on hover */
.project-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    transform: rotate(-45deg);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
}

/* .project-card:hover::before {
    opacity: 0.5;
} */
</style>