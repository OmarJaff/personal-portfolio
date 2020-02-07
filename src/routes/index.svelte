<script>
  import Portfolio from '../components/PortfolioStyle.svelte'
  import Title from '../components/Title.svelte'
</script>

<svelte:head>
  <title>Omar Jaff</title>
</svelte:head>

<div class="flex w-full flex-col h-full ">

  <div class="flex w-full flex-col items-center my-12">
    <h1 class="text-white text-4xl">
      <Portfolio />
    </h1>
    <div class="flex flex-col items-center my-20 lg:my-24">
      <h2
        class="font-nixieOne text-white text-3xl sm:text-4xl md:text-5xl
        lg:text-6xl">
        OMAR S. JAFF
      </h2>
      <div class="my-2">
        <!-- <Title /> -->
      </div>
    </div>
  </div>
</div>
