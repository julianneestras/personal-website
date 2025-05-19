<template>
    <section id="projects" class="bg-white dark:bg-slate-900">
        <div class="py-20 px-6 md:px-10 lg:px-20">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
                <p class="text-gray-500 max-w-2xl mx-auto">
                    Technologies and tools I work with to bring ideas to life.
                </p>
            </div>

            <div class="flex flex-wrap justify-center gap-8">
                <TechItem v-for="tech in techStack" :key="tech.name" :tech="tech" />
            </div>
        </div>
    </section>
</template>

<script setup lang="js">
import { ref } from 'vue';
import TechItem from '../components/TechItem.vue';

const techStack = ref([
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
]);
</script>