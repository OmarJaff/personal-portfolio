<script>
  import anime from 'animejs/lib/anime.es.js'
  import { onMount } from 'svelte'
</script>

<style>
  .focus-in-expand {
    -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

  .ml1 .letter {
    display: inline-block;
    line-height: 1em;
  }
  .letter {
    text-shadow: 2px -2px 0 #fe2f4d;
  }
  .letterO {
    text-shadow: 2px -2px 0 #ffffff;
  }

  .ml1 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .line {
    opacity: 1;
    position: absolute;
    width: 0;
    height: 1px;
    animation: 0.4s line-animation ease forwards;
    animation-delay: 1.4s;
    will-change: auto;
  }

  @keyframes line-animation {
    from {
      width: 10%;
    }
    to {
      width: 20%;
    }
  }

  .line1 {
    box-shadow: 2px -1px 0 #ffffff;
  }
  .line2 {
    box-shadow: 2px -1px 0 #ffffff;
  }

  .ml1 .line1 {
    transform-origin: right 0 0;
    top: 0;
  }
  .ml1 .line2 {
    transform-origin: 0 0;
    bottom: 0;
  }

  @media (min-width: 1024px) {
    .portfolio-font-size {
      font-size: 6rem;
    }
  }
  @media only screen and (min-width: 1625px) {
    .portfolio-font-size {
      font-size: 8rem;
    }
  }
</style>

<h1 class=" text-4xl sm:text-6xl portfolio-font-size ml1 overflow-hidden ">
  <span class="text-wrapper ml1 focus-in-expand ">
    <span class="line line1 right-0 bg-vived-red " />
    <span class="letter text-dark-blue ">P</span>
    <span class="letter text-dark-blue letterO ">O</span>
    <span class="letter text-dark-blue">R</span>
    <span class="letter text-dark-blue">T</span>
    <span class="letter text-dark-blue">F</span>
    <span class="letter text-dark-blue letterO">O</span>
    <span class="letter text-dark-blue">L</span>
    <span class="letter text-dark-blue">I</span>
    <span class="letter text-dark-blue letterO">O</span>
    <span class="line line2 left-0 " />
  </span>
</h1>
