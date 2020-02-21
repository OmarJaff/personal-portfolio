<script>
  import Portfolio from '../components/PortfolioStyle.svelte'
  import Title from '../components/Title.svelte'
  import MyFullName from '../components/MyFullName.svelte'
  import ScrollIcon from '../components/ScrollDownIcon.svelte'
  import PageToggleLines from '../components/PageToggleLines.svelte'
  import ScrollDowmFlag from '../components/ScrollDownFlag.svelte'
  import About from '../components/About.svelte'
  import Skills from '../components/Skills.svelte'
  import Projects from '../components/Projects.svelte'
</script>

<style>

</style>

<svelte:head>
  <title>Omar Jaff</title>

</svelte:head>
<div class="flex flex-col justify-center h-screen w-full ">
  <section class="flex h-full w-full my-48">

    <div class="flex w-full flex-col items-center ">
      <h1 class="text-white text-4xl">
        <Portfolio />
      </h1>
      <div
        class="flex mt-16 w-full justify-center font-nixieOne text-white
        text-3xl">
        <MyFullName />
      </div>
      <div class=" my-2">
        <Title />
      </div>
    </div>
  </section>
  <div
    class="flex mx-8 sm:flex-col absolute top-auto sm:top-0 inset-0 sm:h-full
    justify-center z-40 ">
    <PageToggleLines />
  </div>

  <ScrollIcon />
  <ScrollDowmFlag />
</div>

<div class="flex flex-col h-screen justify-between w-full">

  <div
    id="about"
    class="flex justify-center sm:items-center mx-10 xl:mx-32 w-auto mt-20
    lg:mt-48">
    <About />
  </div>

  <div
    id="skills"
    class="flex justify-center sm:items-center mx-10 xl:mx-32 w-auto mt-24
    lg:mt-56">
    <Skills />
  </div>
  <div
    id="skills"
    class="flex justify-center sm:items-center mx-10 xl:mx-32 w-auto mt-24
    lg:mt-56">
    <Projects />
  </div>
</div>
