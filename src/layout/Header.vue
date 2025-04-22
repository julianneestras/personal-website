<template>
    <div class="relative flex flex-col justify-center items-center h-150 w-full p-6 overflow-hidden">
        <DotLottieVue class="absolute inset-0 w-auto h-auto opacity-50 pointer-events-none justify-center" autoplay loop
            src="https://lottie.host/c7cc4daa-96e9-48a0-b2f9-8884a293e9f4/R9wYQLX1vr.lottie" />
        <div class="relative flex flex-col justify-center items-center overflow-hidden">
            <img src="../assets/images/me.png" class="h-25 w-25">
        </div>
        <div class="relative z-10 text-center flex flex-col items-center justify-center">
            <h3 class="text-md font-bold uppercase text-secondary leading-loose my-4">Hi, I'm known as</h3>
            <h1 class="text-4xl md:text-6xl font-bold leading-tight">Julianne France Estras</h1>
            <div class="relative w-full h-auto">
                <h2 class="text-2xl md:text-5xl font-bold leading-tight mt-2 z-10">
                    <span class="text-inherit align-middle text-sm">♡</span>
                    Code, pixels, and a heart
                    <span class="text-inherit align-middle text-sm">♡</span>
                </h2>
                <DotLottieVue class="absolute inset-0 w-full h-full opacity-100 pointer-events-none" autoplay loop
                    src="https://lottie.host/6c1638b2-b523-4c3a-80b6-57747bddaa93/9rNOp2wPvs.lottie" />
            </div>
            <p class="mt-4 text-md md:text-xl max-w-3xl mb-7 leading-relaxed text-center text-gray-500 mt-9">
                I build web apps that are carefully crafted, lovingly coded,
                and debugged with sparkles. <b>Building with purpose, designing with passion.</b>
            </p>
            <button class="btn btn-primary shadow-sm mt-6 px-12 rounded-lg">Discover my projects!</button>
        </div>
    </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

h1,
h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}

p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}

button {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1rem;
}
</style>
