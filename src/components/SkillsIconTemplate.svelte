<script>
  export let title = 'skill title',
    description = 'this is a description of the skill'
</script>

<style>
  .line {
    height: 1px;
  }
  .custom-shadow {
    -webkit-box-shadow: 11px 10px 10px -1px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 11px 10px 10px -1px rgba(0, 0, 0, 0.46);
    box-shadow: 11px 10px 10px -1px rgba(0, 0, 0, 0.46);
  }
</style>

<div class="flex mx-4 justify-center items-center w-full ">
  <div class="custom-shadow w-24 h-24 relative ">
    <span class=" line w-1/3 bg-vived-red inset-0 left-auto absolute " />
    <div class="flex flex-col justify-center w-full h-full items-center">
      <slot />
    </div>
    <span class=" line w-1/3 bg-white inset-0 absolute top-auto " />
  </div>
  <div class="my-3 flex flex-col p-4 w-48 ">
    <h2 class="text-white font-mono font-semibold flex justify-center ">
      {title.toUpperCase()}
    </h2>
    <p
      class="text-white flex justify-center font-thin font-raleway text-center
      text-sm">
      {description}
    </p>
  </div>
</div>
