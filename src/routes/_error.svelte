<script>
  export let status;
  // export let error;
  import SiteLogo from "../components/SiteLogo.svelte";
  import Header from "../components/Header.svelte";
  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1,
  h1 {
    font-size: 6rem;
  }
  @media screen and (min-width: 640px) {
    h1 {
      font-size: 10rem;
    }
  }

  .st0 {
    font-family: "Roboto Mono";
  }
  .st1 {
    font-size: 83.0285px;
  }
  .st2 {
    fill: gray;
  }

  svg {
    text-align: center;
    fill: #4fd1c5;
  }
  path#XMLID_5_ {
    fill: #4fd1c5;
    filter: url(#blurFilter4);
  }
  path#XMLID_11_,
  path#XMLID_2_ {
    fill: #4fd1c5;
  }
  .circle {
    animation: out 2s infinite ease-out;
    fill: #4fd1c5;
  }

  .message {
    color: #7180a3;
  }

  .message:after,
  .message:before {
    color: #7180a3;
    font-size: 20px;
    -webkit-animation-name: opacity;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    margin: 0 50px;
  }

  .bg-new {
    enable-background: new 0 0 200 82.7;
  }
  @-webkit-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes out {
    0% {
      r: 1;
      opacity: 0.9;
    }
    25% {
      r: 5;
      opacity: 0.3;
    }
    50% {
      r: 10;
      opacity: 0.2;
    }
    75% {
      r: 15;
      opacity: 0.1;
    }
    100% {
      r: 20;
      opacity: 0;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<div class="block absolute w-full justify-center inset-0 h-20">
  <div
    class="flex w-fulL inset-0 bottom-auto fixed z-50 "
    style=" clip: rect(auto, auto, auto, auto);">
    <Header backgroundColor="gray-600" mainLogoColor="gray-500" />
  </div>
</div>

<div
  id="container"
  class=" flex flex-col items-center h-full justify-center h-screen font-roboto ">
  {#if status === 404}
    <svg
      x="0px"
      y="0px"
      class=" h-64 w-full bg-new"
      viewBox="0 0 200 82.7"
      xml:space="preserve">

      <g id="Calque_1">
        <text
          id="XMLID_3_"
          transform="matrix(1.2187 0 0 1 13 75.6393)"
          class="st0 st1">
          4
        </text>
        <text
          id="XMLID_4_"
          transform="matrix(1.2187 0 0 1 133.0003 73.6393)"
          class="st0 st1">
          4
        </text>
      </g>
      <g id="Calque_2">
        <g>
          <path
            id="XMLID_11_"
            d="M81.8,29.2c4.1-5.7,10.7-9.4,18.3-9.4c6.3,0,12.1,2.7,16.1,6.9c0.6-0.4,1.1-0.7,1.7-1.1
            c-4.4-4.8-10.8-7.9-17.8-7.9c-8.3,0-15.6,4.2-20,10.6C80.7,28.5,81.3,28.8,81.8,29.2z" />
          <path
            id="XMLID_2_"
            d="M118.1,53.7c-4,5.7-10.7,9.5-18.2,9.5c-6.3,0-12.1-2.6-16.2-6.8c-0.6,0.4-1.1,0.7-1.7,1.1
            c4.4,4.8,10.8,7.8,17.9,7.8c8.3,0,15.6-4.3,19.9-10.7C119.2,54.5,118.6,54.1,118.1,53.7z" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 100 41.3"
            to="0 100 41.3"
            dur="10s"
            repeatCount="indefinite" />
        </g>
        <g id="XMLID_6_">
          <g id="XMLID_18_">
            <circle class="circle" cx="100" cy="41" r="1" />
          </g>
        </g>
        <defs>
          <filter id="blurFilter4" x="-20" y="-20" width="200" height="200">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        <path
          id="XMLID_5_"
          class="st2"
          d="M103.8,16.7c0.1,0.3,0.1,0.6,0.1,0.9c11.6,1.9,20.4,11.9,20.4,24.1c0,13.5-10.9,24.4-24.4,24.4
          S75.6,55.1,75.6,41.7c0-3.2,0.6-6.3,1.7-9.1c-0.3-0.2-0.5-0.3-0.7-0.5c-1.2,3-1.9,6.2-1.9,9.6c0,14,11.3,25.3,25.3,25.3
          s25.3-11.3,25.3-25.3C125.3,29,115.9,18.5,103.8,16.7z" />

      </g>
    </svg>
  {:else}
    <h1 class="text-teal-400 text-lg sm:text-xl text-gray-600 font-bold">
      {status}
    </h1>
  {/if}
  <div class="message text-gray-600 text-4xl px-4 py-2 break-all flex">
    <p>Page not Found!</p>
  </div>
  <p class="text-gray-600 my-2">
    Back to
    <a href="./" class="text-teal-400 z-50 cursor-pointer">Home Page</a>
  </p>
  <!-- {#if dev && error.stack}
    <div
      class="text-gray-600 flex justify-center mx-auto border-2 border-gray-300
      rounded overflow-auto">
      <p class="flex justify-center leading-snug m-4 text-sm w-64 ">
        {error.stack.toString}
      </p>

    </div>
  {/if} -->

</div>
