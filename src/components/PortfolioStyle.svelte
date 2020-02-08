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
        duration: 800,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 0.7],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 400,
        delay: (el, i, l) => 80 * (l - i),
      })
  })
</script>

<style>
  .ml1 {
    font-size: 10rem;
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

  .ml1 .line {
    opacity: 0;
    position: absolute;
    width: 30%;
  }
  .line1 {
    box-shadow: 2px -1px 0 #ffffff;
  }
  .line2 {
    box-shadow: 2px -1px 0 #fe2f4d;
  }

  .ml1 .line1 {
    transform-origin: right 0 0;
    top: 0;
  }
  .ml1 .line2 {
    transform-origin: 0 0;
    bottom: 0;
  }

  /* @media only screen and (max-width: 400px) {
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
  @media only screen and (min-width: 1624px) {
    .ml1 {
      font-size: 5.5rem;
    }
    .line {
      height: 1px;
    }
  } */
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

<h1 class=" text-4xl sm:text-6xl portfolio-font-size ">
  <span class="text-wrapper font-nixieOne">
    <span class="line line1 bg-dark-blue right-0 " />
    <span class="letter text-dark-blue ">P</span>
    <span class="letter text-dark-blue letterO ">O</span>
    <span class="letter text-dark-blue">R</span>
    <span class="letter text-dark-blue">T</span>
    <span class="letter text-dark-blue">F</span>
    <span class="letter text-dark-blue letterO">O</span>
    <span class="letter text-dark-blue">L</span>
    <span class="letter text-dark-blue">I</span>
    <span class="letter text-dark-blue letterO">O</span>
    <span class="line line2 left-0 bg-dark-blue w-56 " />
  </span>
</h1>
