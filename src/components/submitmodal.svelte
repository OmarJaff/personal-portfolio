<script>
  import { fade } from "svelte/transition";
  export let openModal = false;
  export let errorLog;
  import bodymovin from "lottie-web";
  import { onMount } from "svelte";
  import Footer from "../components/sections/Footer.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let animation;

  const closeModal = () => {
    dispatch("closeModal");
  };
</script>

<style>
  .scale-up-hor-center {
    -webkit-animation: scale-up-hor-center 0.4s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .bg-custom-color {
    background: rgba(255, 255, 255, 0.2);
  }

  @-webkit-keyframes scale-up-hor-center {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @keyframes scale-up-hor-center {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
</style>

<div
  transition:fade
  class="{openModal === true ? 'scale-up-hor-center' : 'scale-0'} transform
  scale-0 main-modal z-50 fixed w-full h-100 inset-0 overflow-hidden flex
  justify-center items-center bg-custom-color">
  <div
    class="modal-container bg-gray-800 w-11/12 md:max-w-lg mx-auto rounded
    shadow-lg z-50 overflow-y-auto">
    <div class="modal-content py-4 text-left px-6">
      <!--Title-->
      <div class="flex justify-end pb-3">
        <div class="modal-close cursor-pointer z-50">
          <svg
            class="fill-current text-white left-0"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            on:click={() => {
              closeModal();
            }}
            viewBox="0 0 18 18">
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47
              4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </div>
      </div>
      <!--Body-->
      <div class="my-5">
        <div class="flex flex-col w-full items-center ">
          <div
            id="sendIcon"
            class=" h-56 w-56 sm:h-64 sm:w-64 lg:h-auto my-4" />
          {#if !errorLog}
            <h1
              class="{openModal === true ? 'animated fadeIn delay-2s slow' : ''}
              font-SourceSans text-xl sm:text-2xl text-gray-100 justify-center
              text-center ">
              <span class="text-teal-400">Thanks!</span>
              your message sent successfully.
            </h1>
          {:else}
            <h1
              class=" font-nixieOne text-xl sm:text-2xl text-gray-100
              justify-center text-center ">
              <span class="text-red-500">Oops!</span>
              Something went wrong!
            </h1>
          {/if}
        </div>

      </div>
      <!--Footer-->
      <div class="flex justify-end pt-2">

        <button
          type="submit"
          on:click={() => {
            closeModal();
          }}
          class="{openModal === true && !errorLog ? 'animated fadeIn delay-2s slow' : ''}
          text-xs bg-gray-200 rounded hover:bg-gray-300 h-8 sm:h-12 w-1/2
          sm:text-base xl:text-xl sm:h-10 mt-2 text-white font-roboto">
          <span class="text-gray-800">Back to the website</span>
        </button>
      </div>
    </div>
  </div>
</div>
