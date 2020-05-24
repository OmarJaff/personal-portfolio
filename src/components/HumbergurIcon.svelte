<script>
  export let backgroundColor = "gray-100";
  import { isMenuOpen } from "../store.js";
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  const dispatch = createEventDispatcher();

  const toggleMenu = () => {
    dispatch("toggleMenu");
  };

  let menuClass = "";

  $: $isMenuOpen ? (menuClass = "active") : (menuClass = "not-active");
</script>

<style>
  span {
    width: 100%;
    border-radius: 2px;
    height: 3px;
    /* background: #edf2f7; */
    transition: all 0.2s;
    position: relative;
  }

  span + span {
    margin-top: 16px;
  }
  .btn {
    top: 50%;
    left: 50%;
  }

  .active span:nth-child(1) {
    animation: ease 0.4s top forwards;
  }

  .not-active span:nth-child(1) {
    animation: ease 0.4s top-2 forwards;
  }

  .active span:nth-child(2) {
    animation: ease 0.4s bottom forwards;
  }

  .not-active span:nth-child(2) {
    animation: ease 0.4s bottom-2 forwards;
  }

  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }
    50% {
      top: 7px;
      transform: rotate(0);
    }
    100% {
      top: 9px;
      transform: rotate(45deg);
    }
  }

  @keyframes top-2 {
    0% {
      top: 9px;
      transform: rotate(45deg);
    }
    50% {
      top: 7px;
      transform: rotate(0deg);
    }
    100% {
      top: 0;
      transform: rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      bottom: 0;
      transform: rotate(0);
    }
    50% {
      bottom: 5px;
      transform: rotate(0);
    }
    100% {
      bottom: 10px;
      transform: rotate(-45deg);
    }
  }

  @keyframes bottom-2 {
    0% {
      bottom: 10px;
      transform: rotate(-45deg);
    }
    50% {
      bottom: 5px;
      transform: rotate(0);
    }
    100% {
      bottom: 0px;
      transform: rotate(0);
    }
  }
</style>

<div
  on:click={() => toggleMenu()}
  class="{menuClass} btn w-10 sm:w-12 cursor-pointer flex-col ">
  <span class="flex bg-{backgroundColor}" />

  <span class="flex bg-{backgroundColor}" />
</div>
