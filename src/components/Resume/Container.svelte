<script>
  export let title = "title";
  export let description;
</script>

<div class="flex flex-col ">
  <div class="flex space-x-2 xl:items-center">
    <slot />
    <h1 class="text-gray-700 font-roboto xl:text-xl">{title.toUpperCase()}</h1>
  </div>

  {#if description}
    <p class="text-gray-600 font-SourceSans p-2 text-justify xl:text-lg">
      {description}
    </p>
  {/if}
  <slot name="custom">
    <!-- optional fallback -->
  </slot>
</div>
