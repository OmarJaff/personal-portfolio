<script>
  export let segment
  export let isMenuOpen = false
  import { slide, fly } from 'svelte/transition'
  import SocialIcons from '../components/SocialIcons.svelte'
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

  .activeClass:after {
    content: '';
    background-image: radial-gradient(ellipse at top, #fe2f4d 0, #1a1c33 80%);
    align-self: center;
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
  .scale-in-ver-bottom {
    -webkit-animation: scale-in-ver-bottom 0.5s
      cubic-bezier(0.82, 0.26, 0.2, 1.14) both;
    animation: scale-in-ver-bottom 0.5s cubic-bezier(0.82, 0.26, 0.2, 1.14) both;
    animation-delay: 0.2s;
  }

  @-webkit-keyframes scale-in-ver-bottom {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
  }
  @keyframes scale-in-ver-bottom {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
  }
</style>

{#if isMenuOpen}
  <div
    class=" gradiantStyle h-screen w-screen fixed inset-0 z-50 "
    transition:slide|local={{ duration: 400 }}>

    <nav
      class="flex w-full justify-center top-0 text-white font-nixieOne text-4xl
      lg:text-5xl xl:text-6xl">
      <ul
        class="absolute flex flex-col items-center h-full justify-center
        scale-in-ver-bottom">
        <li class="my-2 border-gray-100">
          <a
            class:selected={segment === undefined}
            class="flex flex-col activeClass hover-class "
            href=".">
            Home
          </a>
        </li>
        <li class="my-2 md:my-4">
          <a
            class:selected={segment === 'about'}
            class=" flex flex-col hover-class"
            href="about">
            About Me
          </a>
        </li>
        <li class="my-2 md:my-4">
          <a
            class:selected={segment === 'about'}
            class="flex flex-col hover-class"
            href="about">
            Skills
          </a>
        </li>
        <li class="my-2 md:my-4">
          <a
            class:selected={segment === 'about'}
            class="flex flex-col hover-class "
            href="about">
            Projects
          </a>
        </li>
        <li class="my-2 md:my-4">
          <a
            class:selected={segment === 'about'}
            class="flex flex-col hover-class"
            href="about">
            Contact Me
          </a>
        </li>
        <div class=" mt-10 flex sm:hidden ">
          <SocialIcons />
        </div>
      </ul>

    </nav>

  </div>
{/if}
