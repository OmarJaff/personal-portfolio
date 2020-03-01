<script>
  import { onMount } from 'svelte'
  import MenuSpy from 'menuspy'
  onMount(() => {
    let elm = document.querySelector('#togglepagelines')
    var ms = new MenuSpy(elm, {
      // menu selector
      menuItemSelector: 'a[href^="#"]',

      // CSS class for active item
      activeClass: 'active-class',

      // amount of space between your menu and the next section to be activated.
      threshold: 20,

      // enable or disable browser's hash location change.
      enableLocationHash: true,

      // timeout to apply browser's hash location.
      hashTimeout: 600,

      // called every time a new menu item activates.
      callback: null,
    })
  })
</script>

<style>
  .scale-in-hor-left {
    -webkit-animation: scale-in-hor-left 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-hor-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.2s;
    will-change: auto;
  }

  @keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
    }
  }

  .line-hight {
    height: 3px;
  }
  .active-class {
    background-color: #fe2f4d;
    width: 2rem;
  }
  @media screen and (min-width: 640px) and (max-width: 1023px) {
    .active-class {
      width: 4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .active-class {
      width: 5.5rem;
    }
  }
</style>

<ul
  id="togglepagelines"
  class="flex flex-col-reverse sm:flex-col transform sm:transform-none
  -rotate-90 translate-y-16 translate-x-3 sm:w-0 fixed bottom-0 sm:bottom-auto ">
  <li class="bg-white w-5 sm:w-10 xl:w-12 active-class line-hight my-4">
    <a href="#home" class="sr-only">home</a>
  </li>
  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-4">
    <a href="#about" class="sr-only">about</a>
  </li>

  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-4">
    <a href="#skills" class=" sr-only">skills</a>
  </li>

  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-4">
    <a href="#projects" class="sr-only">projects</a>
  </li>

  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-4">
    <a href="#contact" class="sr-only">contacts</a>
  </li>
</ul>

<div class=" flex scale-in-hor-left flex-col-reverse sm:flex-col" />
