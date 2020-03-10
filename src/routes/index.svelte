<script>
  import { onMount } from 'svelte'
  import Portfolio from '../components/PortfolioStyle.svelte'
  import Title from '../components/Title.svelte'
  import MyFullName from '../components/MyFullName.svelte'
  import ScrollIcon from '../components/ScrollDownIcon.svelte'
  import PageToggleLines from '../components/PageToggleLines.svelte'
  import ScrollDowmFlag from '../components/ScrollDownFlag.svelte'
  import About from '../components/sections/About.svelte'
  import Skills from '../components/sections/Skills.svelte'
  import Projects from '../components/sections/Projects.svelte'
  import ContactForm from '../components/sections/ContactForm.svelte'
  import Footer from '../components/sections/Footer.svelte'
  import BackToTopArrow from '../components/BackToHomeArrow.svelte'
  import AOS from 'aos'

  onMount(() => {
    AOS.init({
      duration: 800,
      disable: 'phone',
      easing: 'easing: easeInOutQuad',
      once: true,
    })
  })
</script>

<style>
  .font-all {
    font-family: 'Nixie One', 'Noto Sans', 'sans-serif', 'Segoe UI', 'Roboto';
  }
</style>

<svelte:head>
  <title>Omar Jaff</title>
</svelte:head>

<a name="top" href="#top" rel="backtohome" class="sr-only target">home</a>

<div
  id="home"
  class="flex flex-col justify-center h-screen w-full font-all home ">
  <section class="flex h-full w-full my-48">
    <div class="flex w-full flex-col items-center ">
      <div class="text-white text-4xl">
        <Portfolio />
      </div>
      <div
        class="flex flex-col mt-16 w-full h-full items-center text-white
        text-3xl">
        <MyFullName />
        <Title />
      </div>
      <div class="flex" />
    </div>
  </section>
  <div
    class="flex mx-8 sm:flex-col absolute top-auto sm:top-0 inset-0 sm:h-full
    justify-center z-40 ">
    <PageToggleLines />
  </div>

  <ScrollIcon />
  <ScrollDowmFlag />
  <BackToTopArrow />
</div>
<div class="flex flex-col justify-between w-full">
  <div
    id="about"
    class="flex justify-center h-auto sm:items-center mx-10 xl:mx-32 w-auto py-4
    my-10 sm:my-20">
    <About />
  </div>

  <div
    id="skills"
    class="py-4 flex justify-center sm:items-center mx-10 xl:mx-32 w-auto my-10
    sm:my-20">
    <Skills />
  </div>

  <div
    id="projects"
    class=" py-4 flex justify-center sm:items-center mx-10 xl:mx-32 w-auto my-10
    sm:my-20">
    <Projects />
  </div>

  <div
    class="py-4 flex justify-center sm:items-center mx-10 xl:mx-32 w-auto my-10
    sm:my-20 mb-16 ">
    <ContactForm />
  </div>
  <div
    id="contact"
    class="flex justify-center sm:items-center mx-10 xl:mx-32 w-auto relative">
    <Footer />
  </div>
</div>
