<script>
  export let title = "the title";
  export let description = "the description";
</script>

<style>
  .h-custome {
    height: 100%;
  }

  @media (min-width: 1024px) {
    .h-custome {
      height: 100%;
    }
  }
</style>

<div class="flex bg-white rounded border-2 border-gray-400 w-full h-custome">
  <div class="flex flex-col w-full">
    <div class="flex border-b-2 border-gray-400 p-2 font-roboto bg-gray-100">
      <span class=" px-1 p-2 capitalize">{title}</span>
    </div>
    <div>
      <p class="text-gray-600 text-lg text-justify px-6 py-4 lg:p-4 lg:px-12">
        {description}
      </p>
    </div>
  </div>
</div>
