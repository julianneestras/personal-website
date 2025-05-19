<!-- Updated TechItem.vue with a more modern design -->
<template>
    <div class="tech-item backdrop-blur-lg bg-white/10 dark:bg-slate-900/30 border border-white/20 dark:border-slate-700/40 
                rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] 
                flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32">
        <div class="w-12 h-12 mb-3 flex items-center justify-center">
            <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 transition-transform duration-300 hover:scale-110">
        </div>
        <h3 class="font-medium text-sm md:text-base text-center">{{ tech.name }}</h3>
    </div>
</template>

<script setup>
defineProps({
    tech: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

h3 {
    font-family: 'Montserrat', sans-serif;
}

.tech-item {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.tech-item:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>