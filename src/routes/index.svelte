<script>
  import Portfolio from '../components/PortfolioStyle.svelte'
  import Title from '../components/Title.svelte'
  import MyFullName from '../components/MyFullName.svelte'
</script>

<svelte:head>
  <title>Omar Jaff</title>
</svelte:head>

<div class="flex w-full flex-col h-full ">

  <div class="flex w-full flex-col items-center my-12">
    <h1 class="text-white text-4xl">
      <Portfolio />
    </h1>
    <div
      class="flex my-16 lg:my-20 w-full justify-center font-nixieOne text-white
      text-3xl">
      <MyFullName />
      <div class="my-2">
        <!-- <Title /> -->
      </div>
    </div>
  </div>
</div>
