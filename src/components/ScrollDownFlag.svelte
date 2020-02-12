<script>
  let y
</script>

<style>
  .animating-border-in {
    border-left: 1px solid white;
    height: 0;
    animation: border-height 0.3s ease forwards;
    animation-delay: 1;
  }
  .animating-out {
    animation: animating-border-out 0.2s ease forwards;
  }
  .scroll-title-opacity-in {
    opacity: 0;
    animation: scroll-title 0.3s ease forwards;
  }
  .scroll-title-opacity-out {
    animation: scroll-title-out 0.2s ease forwards;
  }
  @keyframes border-height {
    from {
      height: 0;
    }

    to {
      height: 70px;
    }
  }

  @keyframes animating-border-out {
    0% {
      height: 70px;
    }
    50% {
      height: 30px;
    }
    100% {
      height: 0px;
    }
  }

  @keyframes scroll-title {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes scroll-title-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>

<svelte:window bind:scrollY={y} />

<div
  class="{y > 0 ? 'animating-out' : 'animating-border-in'} absolute left-0
  right-0 bottom-0 top-auto font-nixione mx-6 sm:mx-8 sm:leading-7 fixed ">
  <div
    class="{y > 0 ? 'scroll-title-opacity-out' : 'scroll-title-opacity-in'} flex
    items-center h-16 ">
    <span
      class="text-white w-12 sm:w-24 text-center text-vived-red text-sm
      sm:font-normal ml-0 sm:ml-2 ">

      <span class="text-white hidden sm:block">
        <span class="hidden sm:inline-block text-vived-red">Scroll</span>
        & Read
      </span>

      <span class="text-vived-red ">
        <span class=" text-white">About</span>
        Me
      </span>
    </span>

  </div>
</div>
