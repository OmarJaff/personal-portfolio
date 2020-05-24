<script>
  export let backgroundColor = "gray-100";
  export let mainLogoColor = "gray-100";
  import { isMenuOpen } from "../store.js";
  import { createEventDispatcher } from "svelte";
  import SiteLogo from "./SiteLogo.svelte";
  import HumbergerIcon from "../components/HumbergurIcon.svelte";
  import SocialIcons from "../components/SocialIcons.svelte";
  import MenuSpy from "menuspy";
  import { onMount } from "svelte";

  const dispatch = createEventDispatcher();

  const openMenue = () => {
    dispatch("menuToggled");
  };

  let y = 0;
  let bgColor = "gray-100";
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
    <div class="flex flex-row-reverse items-baseline">

      <HumbergerIcon
        backgroundColor={$isMenuOpen ? 'gray-100' : backgroundColor}
        on:toggleMenu={() => isMenuOpen.update(m => (m = !m))} />

      <div class="hidden sm:flex">
        <div class="flex mx-8 ">
          <SocialIcons IconColor={$isMenuOpen ? 'gray-100' : backgroundColor} />
        </div>
      </div>
    </div>
  </div>
</div>
