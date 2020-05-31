<script>
  export let backgroundColor = "gray-100";
  export let mainLogoColor = "gray-100";
  export let iscurrentPageHome = false;
  import { isMenuOpen } from "../store.js";
  import SiteLogo from "./SiteLogo.svelte";
  import HumbergerIcon from "../components/HumbergurIcon.svelte";
  import SocialIcons from "../components/SocialIcons.svelte";
  import MenuSpy from "menuspy";
  import { onMount } from "svelte";

  let y = 0;
  let bgColor = "gray-100";
  let path;
  let isHomePage = true;

  $: {
    bgColor = $isMenuOpen ? bgColor : backgroundColor;
  }
</script>

<svelte:window bind:scrollY={y} />

<div class="relative flex w-full z-50 ">
  <div class="flex justify-between mx-6 my-6 sm:mx-8 sm:my-8 w-full">
    <div>
      <SiteLogo mainLogoColor={$isMenuOpen ? 'gray-100' : mainLogoColor} />
    </div>

    <div class="flex flex-row-reverse items-center">
      {#if iscurrentPageHome}
        <HumbergerIcon
          backgroundColor={$isMenuOpen ? 'gray-100' : backgroundColor}
          on:toggleMenu={() => isMenuOpen.update(m => (m = !m))} />

        <div class="hidden sm:flex">
          <div class="flex mx-8 ">
            <SocialIcons
              IconColor={$isMenuOpen ? 'gray-100' : backgroundColor} />
          </div>
        </div>
      {:else}
        <a
          href="#about"
          class="font-roboto text-gray-600 hover:text-gray-800 flex space-x-2
          items-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            class="-mt-1"
            fill="currenColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3839 2.86611C12.8957 2.37796 12.1043 2.37796 11.6161
              2.86611L2.86611 11.6161C2.37796 12.1043 2.37796 12.8957 2.86611
              13.3839C3.35428 13.872 4.14572 13.872 4.63389 13.3839L5
              13.0177V21.25C5 21.9404 5.55965 22.5 6.25 22.5H8.75C9.44035 22.5
              10 21.9404 10 21.25V18.75C10 18.0596 10.5596 17.5 11.25
              17.5H13.75C14.4404 17.5 15 18.0596 15 18.75V21.25C15 21.9404
              15.5596 22.5 16.25 22.5H18.75C19.4404 22.5 20 21.9404 20
              21.25V13.0177L20.3661 13.3839C20.8543 13.872 21.6457 13.872
              22.1339 13.3839C22.622 12.8957 22.622 12.1043 22.1339
              11.6161L13.3839 2.86611Z"
              fill="currentColor" />
          </svg>

          <span class="flex">
            <span class="hidden sm:block mr-1">Back to</span>
            home
          </span>
        </a>
      {/if}
    </div>
  </div>
</div>
