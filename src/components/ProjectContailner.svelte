<script>
  export let containerTitle = "Container Title";
  export let containerDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ratione alias doloremque libero ...";
  export let techIconsExist = true;
  import Button from "../components/utilities/Button.svelte";
</script>

<div
  class="flex flex-col border-2 border-gray-400 rounded font-SourceSans lg:grid
  lg:grid-cols-3">
  <div
    class="flex border-b-2 border-gray-400 sm:border-b-0 sm:border-r-2
    bg-gray-300 h-40 sm:h-auto sm:w-full relative">
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
          6.35913C44.517 2.84711 41.818 6.10352e-05 38.4887 6.10352e-05C35.1593
          6.10352e-05 32.4603 2.84711 32.4603 6.35913C32.4603 9.87115 35.1593
          12.7182 38.4887 12.7182Z"
          fill="#4FD1C5" />
      </svg>

    </div>
    <slot />
  </div>
  <div class="flex-col p-4 space-y-4 sm:col-span-2">
    <div class="flex justify-between">

      <div
        class="border-l-2 border-teal-400 pl-2 text-gray-800 text-2xl
        md:text-4xl capitalize">
        {containerTitle}
      </div>

      <div>
        <button class="focus:outline-none outline-none">
          <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            class="text-gray-500 hover:text-gray-600"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.80006 2.5C10.5733 2.5 11.2001 3.05965 11.2001
              3.75V5H12.2252C12.2416 4.99974 12.2582 4.99974 12.2748
              5H15.4C16.1733 5 16.8 5.55965 16.8 6.25C16.8 6.94035 16.1733 7.5
              15.4 7.5H13.4093C12.9029 9.60935 12.0831 11.6144 10.9957
              13.4745C11.4028 13.9173 11.8295 14.345 12.2748 14.7569C12.8118
              15.2535 12.7961 16.0449 12.2399 16.5244C11.6836 17.0037 10.7973
              16.9899 10.2603 16.4931C9.99552 16.2483 9.7366 15.9984 9.48372
              15.7435C8.24458 17.3876 6.78147 18.8855 5.13374 20.2023C4.55761
              20.6626 3.67253 20.6189 3.15687 20.1045C2.64122 19.59 2.69025
              18.7997 3.26639 18.3394C4.96471 16.9823 6.44304 15.411 7.64839
              13.6736C6.86933 12.6874 6.1722 11.6456 5.56586 10.5563C5.22177
              9.93806 5.50412 9.18784 6.19653 8.88061C6.88894 8.57337 7.72921
              8.82549 8.0733 9.44371C8.40034 10.0313 8.75698 10.6035 9.1415
              11.1587C9.72585 9.9909 10.1955 8.76752 10.5378 7.5H4.20006C3.42686
              7.5 2.80006 6.94035 2.80006 6.25C2.80006 5.55965 3.42686 5 4.20006
              5H8.40006V3.75C8.40006 3.05965 9.02686 2.5 9.80006 2.5ZM18.2
              10C18.7304 10 19.215 10.2675 19.4522 10.691L23.6396
              18.1685C23.6487 18.1839 23.6575 18.1995 23.6658 18.2153L25.0522
              20.691C25.398 21.3085 25.1177 22.0592 24.4261 22.368C23.7345
              22.6768 22.8937 22.4265 22.5479 21.809L21.5348 20H14.8652L13.8523
              21.809C13.5065 22.4265 12.6655 22.6768 11.974 22.368C11.2824
              22.0592 11.0021 21.3085 11.3479 20.691L12.7343 18.2153C12.7427
              18.1995 12.7514 18.1839 12.7605 18.1685L16.9479 10.691C17.185
              10.2675 17.6697 10 18.2 10ZM16.2652 17.5H20.1348L18.2
              14.0451L16.2652 17.5Z"
              fill="currentColor" />
          </svg>
        </button>

      </div>

    </div>

    <div class="text-gray-600 text-md md:text-lg text-justify">
      {containerDescription}
    </div>

    {#if techIconsExist}
      <footer class="w-full flex bg-gray-200 border-t-2 h-6 pt-2">
        <slot name="techIcons" />
      </footer>
    {:else}
      <div class="w-full">
        <Button title="check out my cv" />
      </div>
    {/if}
  </div>

</div>

<!-- <div
  class="{containerTitle ? ' xl:mb-40 mb-24' : ''} flex flex-col w-auto relative
  items-center sm:items-start layout-shadow ">
  <div
    class=" flex pictuer-width left-0 z-10 photo-shadow left-picture h-custom
    w-full bg-dark-blue lg:h-auto">
    <slot />
  </div>
  <div
    class=" text-width text-h-custom flex xl:justify-end xl:absolute top-custom
    h-auto top-custom-2 font-mono custom-shadow">
    <div class=" h-full w-full flex flex-col justify-between ">
      {#if containerTitle}
        <h1
          class="text-white flex justify-center text-base p-4 lg:text-xl
          xl:text-2xl xl:-mb-10 ">
          {containerTitle.toUpperCase()}
        </h1>
      {/if}
      {#if containerDescription}
        <p
          class=" text-text-white-lighter flex justify-center text-justify
          font-thin text-center text-sm px-6 py-2 sm:text-lg xl:ml-12 xl:px-5
          xl:py-0 xl:leading-8 h-full xl:my-10 ">
          {containerDescription}
        </p>
      {:else}
        <slot name="aboutMe" />
      {/if}

      {#if techIconsPresent === true}
        <div
          class="flex w-full py-4 px-6 bg-dark-blue-deep lg:px-4 xl:-my-8
          custom-shadow">
          <span
            class="flex text-vived-red font-thin text-xs items-center
            flex-shrink-0 sm:text-sm">
            Technologies Used:
          </span>
          <slot name="techIcons" />
        </div>
      {/if}
    </div>
  </div>
</div> -->
