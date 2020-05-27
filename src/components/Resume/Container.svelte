<script>
  export let title = "title";
  export let description;
</script>

<div class="flex flex-col ">
  <div class="flex space-x-2 ">
    <slot />
    <h1 class="text-gray-700 font-roboto">{title.toUpperCase()}</h1>
  </div>

  {#if description}
    <p class="text-gray-800 font-SourceSans p-2 text-justify">{description}</p>
  {/if}
  <slot name="custom">
    <!-- optional fallback -->
  </slot>
</div>
