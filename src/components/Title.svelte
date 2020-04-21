<script>

</script>

<style>
  .web p {
    float: left;
    margin-right: 1rem;
  }
  .web b {
    float: left;
    overflow: hidden;
    position: relative;

    top: 0px;
  }
  .web .innerIam {
    color: #fff;
    position: relative;
    white-space: nowrap;
    top: 0;
    left: 0;
    animation: move 5s ease-in-out;

    animation-iteration-count: infinite;
    /*animation-delay*/
    animation-delay: 2s;
  }

  @media only screen and (min-width: 1024px) {
    @keyframes move {
      0% {
        top: 0;
      }
      20% {
        top: 0;
      }
      40% {
        top: -54px;
      }
      60% {
        top: -54px;
      }
      80% {
        top: -107px;
      }
      90% {
        top: -107px;
      }
      /* 60% {
        top: -150px;
      }
      80% {
        top: -200px;
      } */
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 641px) {
    @keyframes move {
      0% {
        top: 0;
      }
      20% {
        top: 0;
      }
      40% {
        top: -36px;
      }
      60% {
        top: -36px;
      }
      80% {
        top: -71px;
      }
      90% {
        top: -71px;
      }
    }
  }
  @media only screen and (max-width: 640px) {
    @keyframes move {
      0% {
        top: 0;
      }
      20% {
        top: 0;
      }
      40% {
        top: -30px;
      }
      60% {
        top: -30px;
      }
      80% {
        top: -60px;
      }
      90% {
        top: -60px;
      }
    }
  }
</style>

<div
  class=" ml-2 md:ml-6 text-white text-xl sm:text-2xl lg:text-4xl absolute my-12
  lg:my-24 ">

  <div class=" flex h-8 sm:h-10 lg:h-12 font-light">
    <span class="text-vived-red">Full &ThinSpace;</span>
    stack &ThinSpace;
    <span class="text-vived-red">Web &ThinSpace;</span>
    developer
  </div>

</div>
