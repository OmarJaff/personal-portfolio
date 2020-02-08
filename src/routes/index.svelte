<script>
  import Portfolio from '../components/PortfolioStyle.svelte'
  import Title from '../components/Title.svelte'
  import MyFullName from '../components/MyFullName.svelte'
  import ScrollIcon from '../components/ScrollDownIcon.svelte'
</script>

<svelte:head>
  <title>Omar Jaff</title>
</svelte:head>

<div class="flex w-full flex-col h-full justify-center ">

  <div class="flex w-full flex-col items-center my-12">
    <h1 class="text-white text-4xl">
      <Portfolio />
    </h1>

    <div
      class="flex mt-16 w-full justify-center font-nixieOne text-white text-3xl">
      <MyFullName />
    </div>
    <div class=" my-2">
      <Title />
    </div>
  </div>
  <ScrollIcon />
</div>
