<script>
  export let title = 'none'
</script>

<style>
  .line {
    height: 1px;
    width: 35px;
    position: absolute;
  }
</style>

<div class="font-nixieOne text-white relative ">
  <span class="line bg-vived-red inset-0 left-auto " />
  <h1 class=" text-3xl sm:text-4xl lg:text-5xl whitespace-no-wrap ">{title}</h1>
  <span class="line bg-white" />
</div>
