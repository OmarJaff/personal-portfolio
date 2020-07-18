<script>
  export let containerTitle = "Container Title";
  export let containerDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ratione alias doloremque libero ...";
  export let techInfoExist = true;
  export let techNames = "technoloy names";
  import Button from "../components/utilities/Button.svelte";
</script>

<div
  class="flex flex-col border-2 border-gray-400 rounded font-SourceSans lg:grid
  lg:grid-cols-3">
  <div
    class="flex border-b-2 border-gray-400 sm:border-b-0 sm:border-r-2
    bg-gray-300 h-40 sm:h-auto sm:w-full relative items-center">

    <slot />
  </div>
  <div class="flex-col p-4 space-y-4 sm:col-span-2 bg-white">
    <div class="flex justify-between">

      <div
        class="border-l-2 border-teal-400 pl-2 text-gray-800 text-2xl
        md:text-4xl capitalize">
        {containerTitle}
        {#if techInfoExist}
          <div class="flex font-light text-base text-teal-600 capitalize">
            <span>Technologies Used: {techNames}</span>
          </div>
        {/if}
      </div>

    </div>

    <div class="text-gray-600 text-md md:text-lg text-justify">
      {containerDescription}
    </div>

    {#if !techInfoExist}
      <div class="w-full">
        <a
          class="w-full rounded bg-gray-800 text-gray-200 focus:outline-none
          outline-none text-lg py-1 text-md hover:bg-gray-900 relative flex
          justify-center items-center capitalize"
          rel="external"
          href="/resume">
          Check out my resume
        </a>
      </div>
    {/if}
  </div>

</div>
