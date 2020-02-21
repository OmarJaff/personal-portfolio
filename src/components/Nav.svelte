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
    background-image: radial-gradient(ellipse at top, #fe2f4d 0, #20223d 80%);
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
  .focus-in-expand {
    -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.77, 0, 0.175, 1) both;
    animation: focus-in-expand 0.8s cubic-bezier(0.77, 0, 0.175, 1) both;
  }

  @-webkit-keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
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
      xl:text-5xl">
      <ul class="absolute flex flex-col items-center h-full justify-center">
        <li class="my-2 border-gray-100 ">
          <a
            class:selected={segment === undefined}
            class="flex flex-col activeClass hover-class focus-in-expand"
            href=".">
            Home
          </a>
        </li>
        <li class="my-2 md:my-4 ">
          <a
            class:selected={segment === 'about'}
            class=" flex flex-col hover-class focus-in-expand"
            href="#about">
            About Me
          </a>
        </li>
        <li class="my-2 md:my-4 ">
          <a
            class:selected={segment === 'about'}
            class="flex flex-col hover-class focus-in-expand"
            href="about">
            Skills
          </a>
        </li>
        <li class="my-2 md:my-4 ">
          <a
            class:selected={segment === 'about'}
            class="flex flex-col hover-class focus-in-expand "
            href="about">
            Projects
          </a>
        </li>
        <li class="my-2 md:my-4 ">
          <a
            class:selected={segment === 'about'}
            class="flex flex-col hover-class focus-in-expand"
            href="about">
            Contact Me
          </a>
        </li>
        <div class=" mt-10 flex sm:hidden focus-in-expand">
          <SocialIcons />
        </div>
      </ul>

    </nav>

  </div>
{/if}
