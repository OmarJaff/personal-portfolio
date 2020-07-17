<script>
  import SocialIcons from "../components/SocialIcons.svelte";
  import jump from "jump.js";
  import { enableBodyScroll } from "body-scroll-lock";
  import { isMenuOpen, slideNavClass, menuClass } from "../store.js";
  import { fly } from "svelte/transition";

  const menueClosed = () => {
    isMenuOpen.update(m => (m = !m));
    menuClass.update(() => "not-active");
    slideNavClass.update(() => "slideOutUp");
  };

  let navClass = "";
  let menuOpen = false;
</script>

<style>
  .gradiantStyle {
    background: #232b38;
  }
  li {
    align-items: center;
  }
  .active-class {
    color: #4fd1c5;
  }
  .hover-class:hover {
    color: #cbd5e0;
  }
  .hover-class {
    transition: 0.2s;
    transition-timing-function: ease-in-out;
  }
</style>

<header id="main-header">
  <div
    class="{$slideNavClass} transform -translate-y-full animated faster
    gradiantStyle h-screen w-screen fixed inset-0 z-50 font-roboto font-medium">
    <nav
      class="flex w-full justify-center top-0 text-white text-4xl xl:text-5xl">
      <ul class="absolute flex flex-col items-center h-full justify-center">
        <li class="my-2 border-gray-100 active-class flex flex-col centerized">
          <a
            class="flex flex-col hover-class "
            href="#home"
            on:click={() => {
              jump('#home', {
                duration: 1000,
                offset: 0,
                a11y: false
              }), menueClosed();
            }}>
            Home
          </a>

        </li>
        <li class="my-2 md:my-4 flex flex-col centerized ">
          <a
            class=" flex flex-col hover-class"
            href="#about"
            on:click={() => {
              jump('#about', {
                duration: 1000,
                offset: 0,
                a11y: false
              }), menueClosed();
            }}>
            About Me
          </a>
        </li>
        <li class="my-2 md:my-4 flex flex-col centerized ">
          <a
            class="flex flex-col hover-class "
            href="#skills"
            on:click={() => {
              jump('#skills', {
                duration: 1000,
                offset: 0,
                a11y: false
              }), menueClosed();
            }}>
            Skills
          </a>
        </li>
        <li class="my-2 md:my-4 flex flex-col centerized ">
          <a
            class="flex flex-col hover-class "
            href="#projects"
            on:click={() => {
              jump('#projects', {
                duration: 1000,
                offset: 0,
                a11y: false
              }), menueClosed();
            }}>
            Projects
          </a>
        </li>
        <li class="my-2 md:my-4 flex flex-col centerized ">
          <a
            class="flex flex-col hover-class "
            href="#contact"
            on:click={() => {
              jump('#contact', {
                duration: 1000,
                offset: 0,
                a11y: false
              }), menueClosed();
            }}>
            Contact Me
          </a>
        </li>
        <li class="my-2 md:my-4 flex flex-col centerized ">
          <a
            class="flex flex-col hover-class "
            href="/blogpage"
            on:click={() => {
              menueClosed();
            }}>
            Blog
          </a>
        </li>
        <div class=" mt-10 flex sm:hidden ">
          <SocialIcons />
        </div>
      </ul>

    </nav>

  </div>
</header>
