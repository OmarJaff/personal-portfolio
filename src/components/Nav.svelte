<script>
  export let isMenuOpen = false
  export let slideUpClass = ''
  import { createEventDispatcher } from 'svelte'
  import SocialIcons from '../components/SocialIcons.svelte'
  import jump from 'jump.js'
  import { enableBodyScroll } from 'body-scroll-lock'
  const dispatch = createEventDispatcher()

  const menueClosed = () => {
    dispatch('closeMenu')
  }
</script>

<style>
  .gradiantStyle {
    background: rgb(26, 28, 51);
    background: linear-gradient(
      180deg,
      rgb(32, 34, 61) 100%,
      rgba(254, 47, 77, 0.8687850140056023) 140%
    );
  }
  li {
    align-items: center;
  }
  .active-class::after {
    content: '';
    background-image: radial-gradient(ellipse at top, #fe2f4d 0, #20223d 80%);
    width: 50%;
    height: 3px;
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
    class="{isMenuOpen ? ' slideInDown' : slideUpClass} animated faster
    transform -translate-y-full gradiantStyle h-screen w-screen fixed inset-0
    z-50">
    <nav
      class="flex w-full justify-center top-0 text-white font-nixieOne text-4xl
      xl:text-5xl">
      <ul class="absolute flex flex-col items-center h-full justify-center">
        <li class="my-2 border-gray-100 active-class flex flex-col centerized">
          <a
            class="flex flex-col hover-class "
            href="#home"
            on:click={() => {
              jump('#home', {
                duration: 1000,
                offset: 0,
                a11y: false,
              }), menueClosed()
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
                a11y: false,
              }), menueClosed()
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
                a11y: false,
              }), menueClosed()
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
                a11y: false,
              }), menueClosed()
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
                a11y: false,
              }), menueClosed()
            }}>
            Contact Me
          </a>
        </li>
        <div class=" mt-10 flex sm:hidden ">
          <SocialIcons />
        </div>
      </ul>

    </nav>

  </div>
</header>
