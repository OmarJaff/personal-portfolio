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
    bg-gray-300 h-40 sm:h-auto sm:w-full relative">
    {#if techInfoExist}
      <div class="absolute inset-0 p-2 sm:px-4">
        <svg
          class="w-5 sm:w-6"
          width="45"
          height="13"
          viewBox="0 0 45 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.02833 12.7181C9.35769 12.7181 12.0567 9.87109 12.0567
            6.35907C12.0567 2.84705 9.35769 0 6.02833 0C2.69898 0 0 2.84705 0
            6.35907C0 9.87109 2.69898 12.7181 6.02833 12.7181Z"
            fill="#4FD1C5" />
          <path
            d="M22.2584 12.7182C25.5878 12.7182 28.2868 9.87115 28.2868
            6.35913C28.2868 2.84711 25.5878 6.10352e-05 22.2584
            6.10352e-05C18.9291 6.10352e-05 16.2301 2.84711 16.2301
            6.35913C16.2301 9.87115 18.9291 12.7182 22.2584 12.7182Z"
            fill="#4FD1C5" />
          <path
            d="M38.4887 12.7182C41.818 12.7182 44.517 9.87115 44.517
            6.35913C44.517 2.84711 41.818 6.10352e-05 38.4887
            6.10352e-05C35.1593 6.10352e-05 32.4603 2.84711 32.4603
            6.35913C32.4603 9.87115 35.1593 12.7182 38.4887 12.7182Z"
            fill="#4FD1C5" />
        </svg>
      </div>
    {/if}
    <slot />
  </div>
  <div class="flex-col p-4 space-y-4 sm:col-span-2">
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
          justify-center items-center"
          href="/resume">
          Check out my cv
        </a>
      </div>
    {/if}
  </div>

</div>
