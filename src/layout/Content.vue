<template>
    <div class="bg-base-200 w-full overflow-hidden">
        <section id="projects" class="bg-base-200 flex justify-center items-center overflow-hidden">
            <Projects />
        </section>
        <section id="about" class="px-6 md:px-10 lg:px-20 bg-base-200">
            <AboutMe />
        </section>
        <section id="contact" class="px-6 md:px-10 lg:px-20 bg-base-200">
            <Contact />
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AboutMe from '../sections/AboutMe.vue';
import Projects from '../sections/Projects.vue';
import Contact from '../sections/Contact.vue';

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

h2,
h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}

p,
input,
textarea,
button {
    font-family: 'Montserrat', sans-serif;
}

section {
    scroll-margin-top: 80px;
}

.bg-primary-gradient {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
}
</style>