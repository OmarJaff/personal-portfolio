<script>
  export let backgroundColor = "gray-100";
  export let mainLogoColor = "gray-100";
  import { createEventDispatcher } from "svelte";
  import SiteLogo from "./SiteLogo.svelte";
  import HumbergerIcon from "../components/HumbergurIcon.svelte";
  import SocialIcons from "../components/SocialIcons.svelte";
  const dispatch = createEventDispatcher();
  export let menuClass = "";
  const openMenue = () => {
    dispatch("menuToggled");
  };
</script>

<div class="relative flex w-full z-50 ">
  <div class="flex justify-between mx-6 my-6 sm:mx-8 sm:my-8 w-full">
    <div>
      <SiteLogo {mainLogoColor} />
    </div>
    <div class="flex flex-row-reverse items-baseline">

      <HumbergerIcon {backgroundColor} on:toggleMenu={openMenue} {menuClass} />

      <div class="hidden sm:flex">
        <div class="flex mx-8 ">
          <SocialIcons IconColor={backgroundColor} />
        </div>

      </div>
    </div>
  </div>
</div>
