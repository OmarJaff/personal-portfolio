<script>
  import { onMount } from "svelte";
  import Portfolio from "../components/PortfolioStyle.svelte";
  import Title from "../components/Title.svelte";
  import MyFullName from "../components/MyFullName.svelte";
  import ScrollIcon from "../components/ScrollDownIcon.svelte";
  import PageToggleLines from "../components/PageToggleLines.svelte";
  import AboutMeFlag from "../components/AboutMeFlag.svelte";
  import About from "../components/sections/About.svelte";
  import Skills from "../components/sections/Skills.svelte";
  import Projects from "../components/sections/Projects.svelte";
  import ContactForm from "../components/sections/ContactForm.svelte";
  import Header from "../components/Header.svelte";
  import Saparator from "../components/utilities/Separator.svelte";
  import { isMenuOpen } from "../store.js";
  let y = 0;
  let outerHeight = 0;
  let ratio = 0;
  let ToggleLinevisible = false;

  export let posts;
</script>

<style>

</style>

<svelte:head>
  <title>Omar Jaff</title>
</svelte:head>

<svelte:window bind:scrollY={y} bind:outerHeight />

<div
  class="absolute w-full h-full inset-0"
  style="-webkit-clip:rect(auto, auto, auto, auto); clip:rect(auto, auto, auto,
  auto);">
  <div class="fixed flex w-fulL inset-0 bottom-auto z-50">
    <Header iscurrentPageHome={true} />
  </div>
</div>

<div
  id="home"
  class=" bg-gray-800 flex flex-col justify-center h-screen w-full">
  <section
    class="container mx-auto flex h-full w-full my-40 lg:my-0 lg:items-center">
    <div class=" flex w-full flex-col items-center space-y-10">
      <div class="text-white text-4xl font-payTon">
        <Portfolio />
      </div>
      <div
        class="flex flex-col w-full h-full items-center font-roboto -space-y-2
        -ml-2">
        <MyFullName />
        <Title />
      </div>
    </div>
  </section>

  <div
    class="hidden sm:flex mx-8 sm:flex-col absolute top-auto sm:top-0 inset-0
    sm:h-full justify-center w-24"
    style="-webkit-clip-path: inset(0 0 0 0); clip-path: inset(0 0 0 0);">
    <PageToggleLines id={'togglepagelines'} />
  </div>

  <ScrollIcon />
  <AboutMeFlag />

</div>

<div class="flex flex-col justify-between relative">

  <div
    class="absolute inset-0"
    style="-webkit-clip:rect(auto, auto, auto, auto); clip:rect(auto, auto,
    auto, auto);">

    <div class=" flex w-fulL inset-0 bottom-auto fixed z-50">
      <Header
        iscurrentPageHome={true}
        backgroundColor="gray-600"
        mainLogoColor="gray-500" />
    </div>

    <div
      class="sm:mx-8 sm:flex-col fixed top-auto sm:top-0 sm:h-full
      justify-center z-40 hidden sm:flex ">

      <PageToggleLines
        id={'togglepagelines2'}
        backgroundColor={'bg-gray-600'} />
    </div>
  </div>

  <div class="container mx-auto z-30 mt-16">

    <div
      id="about"
      class="flex justify-center h-auto sm:items-center mx-10 md:mx-24 xl:mx-32
      w-auto py-4 ">
      <About />
    </div>

    <Saparator />

    <div
      id="skills"
      class="py-4 flex justify-center sm:items-center mx-10 md:mx-24 xl:mx-32
      w-auto ">
      <Skills />
    </div>

    <Saparator />

    <div
      id="projects"
      class=" py-4 flex justify-center sm:items-center mx-10 md:mx-24 xl:mx-32
      w-auto ">
      <Projects />
    </div>

    <Saparator />

    <div
      id="contact"
      class="py-4 flex justify-center sm:items-center mx-10 md:mx-24 xl:mx-32
      w-auto">

      <ContactForm />

    </div>

  </div>
</div>
