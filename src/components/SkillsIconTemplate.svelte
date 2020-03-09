<script>
  export let title = 'skill title',
    description = 'this is a description of the skill'
</script>

<style>
  .line {
    height: 1px;
  }
  .custom-shadow {
    -webkit-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
    box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
  }
</style>

<div
  class="flex sm:flex-col mx-4 justify-center items-center w-full sm:w-auto my-3
  sm:my-4">
  <div class="custom-shadow w-24 h-24 sm:w-32 sm:h-32 relative flex ">
    <span class=" line w-1/3 bg-vived-red inset-0 left-auto absolute " />
    <div class="flex flex-col justify-center w-full h-full items-center">
      <slot />
    </div>
    <span class=" line w-1/3 bg-white inset-0 absolute top-auto " />
  </div>
  <div class="my-3 flex flex-col p-2 w-48 font-mono ">
    <h2 class="text-white font-semibold flex justify-center ">
      {title.toUpperCase()}
    </h2>
    <p
      class="text-text-white-lighter flex justify-center font-thin text-center
      text-xs sm:text-sm ">
      {description}
    </p>
  </div>
</div>
