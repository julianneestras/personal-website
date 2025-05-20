<template>
    <div class="project-card" ref="cardRef" :class="[
        { 'stacked-card': !isVisible, 'visible-card': isVisible },
        isDark ? 'dark' : 'light',
        `delay-${index % 3}`
    ]">
        <div class="rounded-xl shadow-lg transition-all duration-500 transform hover:shadow-2xl hover:translate-y-[-5px] flex flex-col md:flex-row overflow-hidden"
            :class="isDark ? 'backdrop-blur-md bg-[#13131a]/20' : 'bg-white-200'">
            <!-- Project image -->
            <div class="w-full md:w-1/2 md:order-2 h-56 md:h-auto relative overflow-hidden">
                <img :src="project.image || '/api/placeholder/600/400'" :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    :class="{ 'scale-100': isVisible, 'scale-95': !isVisible }" />
                <div :class="isDark
                    ? 'absolute inset-0 bg-gradient-to-t from-black/60 opacity-30'
                    : 'absolute inset-0 bg-gradient-to-t from-white/60 opacity-30'"></div>
            </div>

            <!-- Project content -->
            <div class="w-full md:w-1/2 md:order-1 p-8 flex flex-col">
                <h3 class="text-2xl font-bold mb-2 font-sans transition-all duration-500"
                    :class="[isDark ? 'text-slate-100' : 'text-slate-800', { 'translate-x-0 opacity-100': isVisible, 'translate-x-[-20px] opacity-0': !isVisible }]">
                    {{ project.title }}
                </h3>
                <p class="mb-6 flex-grow transition-all duration-500 delay-100"
                    :class="[isDark ? 'text-slate-300' : 'text-slate-600', { 'translate-x-0 opacity-100': isVisible, 'translate-x-[-20px] opacity-0': !isVisible }]">
                    {{ project.description }}
                </p>

                <!-- Tech badges -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <span v-for="(tech, techIndex) in project.tech" :key="tech"
                        class="px-3 py-1 text-xs bg-primary/20 backdrop-blur-md rounded-full transform transition-all duration-300 hover:scale-105 shadow-sm"
                        :class="[
                            isDark ? 'text-white' : 'text-slate-700',
                            { 'translate-y-0 opacity-100': isVisible, 'translate-y-[10px] opacity-0': !isVisible },
                            `transition-delay-${techIndex * 50}`
                        ]">
                        {{ tech }}
                    </span>
                </div>

                <!-- Action buttons -->
                <div class="flex items-center gap-4 mt-auto transition-all duration-500 delay-200"
                    :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-[10px] opacity-0': !isVisible }">
                    <a :href="project.github" target="_blank"
                        class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                        :class="isDark ? 'text-primary' : 'text-slate-700'">
                        <!-- GitHub icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            viewBox="0 0 16 16" class="transition-transform duration-300 group-hover:rotate-12">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
                1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68
                0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
                2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65
                3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
                2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        GitHub
                    </a>
                    <a href="#" @click.prevent="showPreview"
                        class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg btn btn-primary hover:brightness-110 transition-all duration-300">
                        <!-- External link icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <path
                                d="M10 5H8.2C7.08 5 6.52 5 6.09 5.22C5.72 5.41 5.41 5.72 5.22 6.09C5 6.52 5 7.08 5 8.2V15.8C5 16.92 5 17.48 5.22 17.91C5.41 18.28 5.72 18.59 6.09 18.78C6.52 19 7.08 19 8.2 19H15.8C16.92 19 17.48 19 17.91 18.78C18.28 18.59 18.59 18.28 18.78 17.91C19 17.48 19 16.92 19 15.8V14M20 9V4M20 4H15M20 4L13 11"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Preview
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark } = useTheme()

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        default: 0,
    }
})

const showPreview = () => {
    alert(`Opening preview for ${props.project.title}`)
}

const cardRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px' // Trigger slightly before card enters viewport
        }
    )

    if (cardRef.value) {
        observer.observe(cardRef.value)
    }

    return () => {
        if (cardRef.value) {
            observer.unobserve(cardRef.value);
        }
    }
})
</script>

<style scoped>
.project-card {
    font-family: 'Poppins', sans-serif;
    transition: all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    z-index: 10;
}

.stacked-card {
    transform: translateY(60px) scale(0.96);
    opacity: 0;
    z-index: 1;
}

.visible-card {
    transform: translateY(0) scale(1);
    opacity: 1;
}

.delay-0 {
    transition-delay: 0ms;
}

.delay-1 {
    transition-delay: 150ms;
}

.delay-2 {
    transition-delay: 300ms;
}

/* Custom transition delays for tech badges */
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
</style>