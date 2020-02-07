<style>
  .custpmstyle {
    bottom: 20px;
  }
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

<div class="flex font-col topstyle my-12 justify-center ">

  <svg class="arrows">
    <!-- <path class="a1" d="M0 0 L30 32 L60 0" /> -->
    <path class="a2" d="M0 20 L30 52 L60 20" />
    <path class="a3" d="M0 40 L30 72 L60 40" />
  </svg>

</div>
<div
  class="flex font-nixione border-l-2 border-white mx-6 sm:mx-8 custpmstyle
  leading-7 ">
  <div class="flex items-center">
    <span class=" text-white w-32 text-center">
      Scroll &
      <span class="text-vived-red ">Read</span>
      About
      <span class="text-vived-red">me</span>
    </span>

  </div>
</div>
