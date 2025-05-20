<template>
    <div class="w-full overflow-hidden py-15 pt-25 px-4 sm:px-6 lg:px-8 relative max-w-5xl">
        <!-- Background elements -->
        <div class="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute top-30 left-20 w-94 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-22 right-20 w-50 h-50 bg-secondary/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-30 left-20 w-100 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <!-- Section Header -->
        <div class="text-center relative z-10 mb-16" ref="headerRef">
            <span class="text-primary font-medium tracking-widest uppercase text-sm mb-2 inline-block 
                transition-all duration-500 transform"
                :class="{ 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }">
                Some Things I've Built
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 transform" :class="[
                { 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }]">
                Featured Projects
            </h2>
            <p class="text-lg max-w-2xl mx-auto mb-8 transition-all duration-500 delay-200 transform" :class="[isDark ? 'text-slate-300' : 'text-gray-500',
            { 'translate-y-0 opacity-100': isHeaderVisible, 'translate-y-[-20px] opacity-0': !isHeaderVisible }]">
                Take a look at some of my recent projects, where innovation meets impact. Each one tells a story of
                problem-solving, creativity, and technical expertise.
            </p>
        </div>

        <!-- Projects List - Now Individual Cards Instead of Grid -->
        <div class="max-w-5xl mx-auto">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="mb-12" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
import proj1 from '../assets/images/metrix-apparel.png'
import proj2 from '../assets/images/starplan.jpg'
import proj3 from '../assets/images/ordering-app.jpg'
import proj4 from '../assets/images/pme-system.jpg'
import proj5 from '../assets/images/fashion.png'
import proj6 from '../assets/images/nature.png'

const headerRef = ref(null);
const isHeaderVisible = ref(false);

onMounted(() => {
    const createObserver = (elementRef, visibilityRef) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                visibilityRef.value = entry.isIntersecting;
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (elementRef.value) {
            observer.observe(elementRef.value);
        }

        return observer;
    };

    const observers = [
        createObserver(headerRef, isHeaderVisible),
    ];

    // Trigger header visibility immediately for better UX
    setTimeout(() => {
        isHeaderVisible.value = true;
    }, 200);

    // Cleanup function
    return () => {
        observers.forEach(observer => {
            observer.disconnect();
        });
        projectsObserver.disconnect();
    };
});


const projects = ref([
    {
        id: 1,
        title: 'Metrix Apparel',
        description: 'A minimal e-commerce app with CRUD, product listing via public API, and search/filter.',
        tech: ['Vue.js', 'JavaScript', 'CSS', 'HTML', 'Tailwind CSS'],
        image: proj1,
        github: 'https://github.com/julianneestras/personal-portfolio'
    },
    {
        id: 2,
        title: 'STARPLAN',
        description: 'Redesigned the STARPLAN website in Figma with a modern, responsive layout focused on improved navigation and visual clarity.',
        tech: ['Figma', 'Prototyping', 'UI/UX Design'],
        image: proj2,
        github: 'https://github.com/julianneestras/use-quiz'
    },
    {
        id: 3,
        title: 'Ordering App System',
        description: 'An comprehensive ordering app system for a local food business to manage orders, menus, and deliveries.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        image: proj3,
        github: 'https://github.com/julianneestras/ecommerce-dashboard'
    },
    {
        id: 4,
        title: 'WellTech Care System',
        description: 'A user-friendly patient-doctor appointment system that simplifies booking, managing, and tracking medical appointments efficiently.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        image: proj4,
        github: 'https://github.com/julianneestras/weather-app'
    },
    {
        id: 5,
        title: 'Nature Website',
        description: 'A visually rich nature website built entirely with HTML and CSS, showcasing landscapes and nature photography.',
        tech: ['HTML', 'CSS', 'Web Design'],
        image: proj6,
        github: 'https://github.com/julianneestras/weather-app'
    },
    {
        id: 6,
        title: 'Fashion Website',
        description: 'A sleek fashion website built with HTML and CSS, showcasing modern styles with a clean, responsive design.',
        tech: ['HTML', 'CSS', 'Web Design'],
        image: proj5,
        github: 'https://github.com/julianneestras/weather-app'
    }
]);



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

h2,
h3 {
    font-family: 'Poppins', sans-serif;
}

/* Project card staggered animation delays */
.project-delay-0 {
    transition-delay: 200ms;
}

.project-delay-1 {
    transition-delay: 300ms;
}

.project-delay-2 {
    transition-delay: 400ms;
}

.project-delay-3 {
    transition-delay: 500ms;
}

.project-delay-4 {
    transition-delay: 600ms;
}

.project-delay-5 {
    transition-delay: 700ms;
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