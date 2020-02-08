<style>
  .arrows {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 20px;
  }

  .arrows path {
    stroke: #fe2f4d;
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }
  .animating-border {
    border-left: 1px solid white;
    height: 0;
    animation: border-height 0.2s ease forwards;
    animation-delay: 1.5s;
  }
  .scroll-title-opacity {
    opacity: 0;
    animation: scroll-title 0.3s ease forwards;
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

  @keyframes border-height {
    from {
      height: 0;
    }

    to {
      height: 70px;
    }
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes arrow /*Safari and Chrome*/ {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .arrows path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
  }

  .arrows path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s; /* Safari 和 Chrome */
  }
</style>

<div class=" hidden sm:block flex font-col topstyle my-12 justify-center ">

  <svg class="arrows ">
    <path class="a2" d="M0 20 L30 52 L60 20" />
    <path class="a3" d="M0 40 L30 72 L60 40" />
  </svg>

</div>
<div
  class=" absolute left-0 right-0 bottom-0 top-auto animating-border
  font-nixione mx-6 sm:mx-8 sm:leading-7 ">
  <div class="flex items-center h-16 scroll-title-opacity fixed ">
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
