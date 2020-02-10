<style>
  .animating-border {
    border-left: 1px solid white;
    height: 0;
    animation: border-height 0.2s ease forwards;
    animation-delay: 1.3s;
  }
  .scroll-title-opacity {
    opacity: 0;
    animation: scroll-title 0.3s ease forwards;
  }

  @keyframes border-height {
    from {
      height: 0;
    }

    to {
      height: 70px;
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
</style>

<div
  class=" absolute left-0 right-0 bottom-0 top-auto animating-border
  font-nixione mx-6 sm:mx-8 sm:leading-7 fixed ">
  <div class="flex items-center h-16 scroll-title-opacity ">
    <span
      class=" text-white w-12 sm:w-24 text-center text-vived-red text-sm
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
