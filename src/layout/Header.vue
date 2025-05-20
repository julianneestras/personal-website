<template>
    <div class="bg-base-200 relative flex flex-col justify-center items-center h-full w-full p-6 pt-22 overflow-hidden"
        ref="headerRef" :class="{ 'stacked-header': !isVisible, 'visible-header': isVisible }">
        <DotLottieVue :key="lottieKey" :class="isDark ? 'opacity-8' : 'opacity-70'"
            class="absolute inset-0 w-auto h-auto pointer-events-none justify-center object-contain" autoplay loop
            src="https://lottie.host/39699e80-8a70-4c30-b8b4-dca129943f69/VVvVcxQV22.lottie" />
        <div class="relative flex flex-col justify-center items-center overflow-hidden transition-all duration-500"
            :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-[-20px] opacity-0': !isVisible }">
            <img src="../assets/images/me.png" class="h-25 w-25">
        </div>
        <div class="relative z-10 text-center flex flex-col items-center justify-center">
            <h3 class="text-lg font-bold uppercase text-secondary leading-loose my-4 transition-all duration-500"
                :class="{ 'translate-x-0 opacity-100': isVisible, 'translate-x-[-20px] opacity-0': !isVisible }">
                Hi, I'm known as
            </h3>
            <h1 class="text-4xl md:text-6xl font-bold leading-tight transition-all duration-500 delay-100"
                :class="{ 'translate-x-0 opacity-100': isVisible, 'translate-x-[-20px] opacity-0': !isVisible }">
                Julianne France Estras
            </h1>
            <div class="relative w-full h-auto">
                <!-- Sparkle Lottie Layer 1 -->
                <DotLottieVue class="absolute inset-0 w-full h-full pointer-events-none z-0" autoplay loop
                    src="https://lottie.host/6c1638b2-b523-4c3a-80b6-57747bddaa93/9rNOp2wPvs.lottie" />

                <!-- Sparkle Lottie Layer 2 (different or same file, styled differently) -->
                <DotLottieVue class="absolute inset-0 w-full h-full pointer-events-none scale-125 z-0" autoplay loop
                    src="https://lottie.host/6c1638b2-b523-4c3a-80b6-57747bddaa93/9rNOp2wPvs.lottie" />

                <!-- Main Text Layer -->
                <h2 class="text-2xl md:text-5xl font-bold leading-tight mt-2 relative z-10 transition-all duration-500 delay-200"
                    :class="{ 'translate-x-0 opacity-100': isVisible, 'translate-x-[-20px] opacity-0': !isVisible }">
                    <span class="text-inherit align-middle text-sm">♡</span>
                    Code, pixels, and a heart
                    <span class="text-inherit align-middle text-sm">♡</span>
                </h2>
            </div>

            <p class="mt-4 text-md md:text-xl max-w-3xl mb-7 leading-relaxed text-center text-gray-500 mt-9 transition-all duration-500 delay-300"
                :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-[10px] opacity-0': !isVisible }">
                <span class="typing-text">{{ displayedText }}
                    <span v-if="typingComplete" class="cursor-animation"></span>
                </span>

                <span v-if="showBoldText" class="bold-text-appear transition-all duration-300">
                    <b>Building with purpose, designing with passion.</b>
                </span>
            </p>
            <button @click.prevent="scrollToSection('projects')" href="#projects"
                class="btn btn-primary shadow-sm mt-6 px-12 rounded-lg transition-all duration-500 delay-400"
                :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-[10px] opacity-0': !isVisible }">
                Discover my projects!
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onBeforeMount, watch } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { useTheme } from '../composables/useTheme'
import { useRouter } from 'vue-router'

const router = useRouter()
const { isDark } = useTheme()

const lottieKey = ref(0)
const headerRef = ref(null)
const isVisible = ref(false)

// Typing effect variables
const typingComplete = ref(false)
const showBoldText = ref(false)
const displayedText = ref('')
const fullText = ref('')
const textOptions = [
    "Frontend developer who loves creating interactive experiences...",
    "Aspiring UI/UX nerd with a soft spot for beautiful design...",
    "I build web apps that are carefully crafted, lovingly coded, and debugged with sparkles."
]
let currentOption = 0
let currentCharIndex = 0
let typingSpeed = 40
let deletingSpeed = 25
let pauseBeforeDelete = 1200
let pauseBeforeNext = 500
let isDeleting = false
let typingTimer = null

const handleResize = () => {
    lottieKey.value += 1
}

const typeText = () => {
    // Clear any existing timers
    if (typingTimer) clearTimeout(typingTimer)

    // Set the current text option
    fullText.value = textOptions[currentOption]

    if (!isDeleting) {
        // Typing forward
        currentCharIndex++
        displayedText.value = fullText.value.substring(0, currentCharIndex)

        if (currentCharIndex >= fullText.value.length) {
            // We've finished typing the current option
            isDeleting = true

            // If this is the last option, don't delete it
            if (currentOption === textOptions.length - 1) {
                typingComplete.value = true
                // Show the bold text after a brief pause
                setTimeout(() => {
                    showBoldText.value = true
                }, 500)
                return
            }

            // Pause before starting to delete
            typingTimer = setTimeout(typeText, pauseBeforeDelete)
            return
        }
    } else {
        // Deleting
        currentCharIndex--
        displayedText.value = fullText.value.substring(0, currentCharIndex)

        if (currentCharIndex === 0) {
            // We've deleted the entire text
            isDeleting = false
            currentOption = (currentOption + 1) % textOptions.length

            // Pause before typing the next option
            typingTimer = setTimeout(typeText, pauseBeforeNext)
            return
        }
    }

    // Schedule the next update
    const speed = isDeleting ? deletingSpeed : typingSpeed
    typingTimer = setTimeout(typeText, speed)
}

const scrollToSection = (sectionId) => {
    // Update the URL
    router.push({ path: `/${sectionId}` })

    // Scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
        // Add smooth scrolling
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    } else if (sectionId === 'home') {
        // Special case for home which might not have an ID
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

// Start the typing effect when the component becomes visible
watch(isVisible, (newValue) => {
    if (newValue && !typingComplete.value) {
        // Reset values and start typing
        currentCharIndex = 0
        isDeleting = false
        typingComplete.value = false
        showBoldText.value = false
        displayedText.value = ''

        // Start with a short delay after becoming visible
        setTimeout(typeText, 500)
    }
})

onMounted(() => {
    window.addEventListener('resize', handleResize)

    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver(
        ([entry]) => {
            // Update the visibility based on intersection state
            isVisible.value = entry.isIntersecting
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px' // Trigger slightly before header enters viewport
        }
    )

    if (headerRef.value) {
        observer.observe(headerRef.value)
    }

    // If header is already in viewport on initial load, set to visible
    if (headerRef.value &&
        headerRef.value.getBoundingClientRect().top < window.innerHeight) {
        isVisible.value = true
    }

    return () => {
        window.removeEventListener('resize', handleResize)
        if (headerRef.value) {
            observer.unobserve(headerRef.value)
        }
        // Clean up any ongoing typing animations
        if (typingTimer) {
            clearTimeout(typingTimer)
        }
    }
})

onBeforeMount(() => {
    window.removeEventListener('resize', handleResize)
    if (typingTimer) {
        clearTimeout(typingTimer)
    }
})

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
}

.stacked-header {
    opacity: 0;
}

.visible-header {
    opacity: 1;
}

/* Custom delay classes */
.delay-100 {
    transition-delay: 100ms;
}

.delay-200 {
    transition-delay: 200ms;
}

.delay-300 {
    transition-delay: 300ms;
}

.delay-400 {
    transition-delay: 400ms;
}

/* Global transition settings for the header */
.bg-base-200 {
    transition: all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

/* Typing effect styles */
.typing-text {
    min-height: 1.5em;
    display: inline-block;
}

.cursor-animation {
    display: inline-block;
    font-weight: bold;
    animation: blink 1s infinite;
    width: 2px;
    height: 1em;
    background-color: currentColor;
    margin-left: 2px;
    vertical-align: middle;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.bold-text-appear {
    opacity: 0;
    display: block;
    margin-top: 0.5rem;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>