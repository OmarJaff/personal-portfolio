<script>
  import anime from 'animejs/lib/anime.es.js'
  import { onMount } from 'svelte'

  onMount(() => {
    let textWrapper = document.querySelector('.ml1 .letters')

    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 0.7],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 500,
        delay: (el, i, l) => 80 * (l - i),
      })
  })
</script>

<style>
  .ml1 {
    font-size: 7rem;
  }

  .ml1 .letter {
    display: inline-block;
    line-height: 1em;
  }

  .ml1 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .ml1 .line {
    opacity: 0;
    position: absolute;

    width: 30%;
  }

  .ml1 .line1 {
    transform-origin: right 0 0;

    top: 0;
  }
  .ml1 .line2 {
    transform-origin: 0 0;
    bottom: 0;
  }

  @media only screen and (max-width: 400px) {
    .ml1 {
      font-size: 2rem;
    }
    .line {
      height: 1px;
    }
  }

  @media only screen and (min-width: 401px) {
    .ml1 {
      font-size: 2.5rem;
    }
    .line {
      height: 1px;
    }
  }
  @media only screen and (min-width: 640px) {
    .ml1 {
      font-size: 3rem;
    }
    .line {
      height: 1px;
    }
  }
  @media only screen and (min-width: 700px) {
    .ml1 {
      font-size: 3.5rem;
    }
    .line {
      height: 1px;
    }
  }
  @media only screen and (min-width: 1024px) {
    .ml1 {
      font-size: 4.5rem;
    }
    .line {
      height: 1px;
    }
  }
  @media only screen and (min-width: 1280px) {
    .ml1 {
      font-size: 6.5rem;
    }
    .line {
      height: 1px;
    }
  }
</style>

<h1 class=" ml1 font-nixieOne">
  <span class="text-wrapper">
    <span class="line line1 bg-vived-red right-0 " />
    <span class="letter text-vived-red ">P</span>
    <span class="letter">O</span>
    <span class="letter text-vived-red">R</span>
    <span class="letter text-vived-red">T</span>
    <span class="letter text-vived-red">F</span>
    <span class="letter">O</span>
    <span class="letter text-vived-red">L</span>
    <span class="letter text-vived-red">I</span>
    <span class="letter">O</span>
    <span class="line line2 left-0 bg-white w-56 " />
  </span>
</h1>
