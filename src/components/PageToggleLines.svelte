<script>
  import { onMount } from 'svelte'
  import MenuSpy from 'menuspy'
  onMount(() => {
    let elm = document.querySelector('#togglepagelines')
    var ms = new MenuSpy(elm, {
      menuItemSelector: 'a[href^="#"]',

      activeClass: 'active-class',

      threshold: 15,

      enableLocationHash: false,

      hashTimeout: 600,

      callback: null,
    })
  })
</script>

<style>
  .line-hight {
    height: 3px;
  }

  .active-class {
    background-color: #fe2f4d;
    width: 2rem;
    -webkit-animation: scale-in-hor-left 0.5s
      cubic-bezier(0.01, -0.47, 0.04, 1.01) both;
    animation: scale-in-hor-left 0.5s cubic-bezier(0.01, -0.47, 0.04, 1.01) both;
    will-change: auto;
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
</style>

<ul
  id="togglepagelines"
  class="flex flex-col-reverse sm:flex-col transform sm:transform-none
  -rotate-90 translate-y-16 translate-x-3 sm:w-0 fixed bottom-0 sm:bottom-auto ">
  <li class="bg-white w-5 sm:w-10 xl:w-12 active-class line-hight my-4">
    <a href="#home" class="sr-only">home</a>
  </li>
  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-4 ">
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
