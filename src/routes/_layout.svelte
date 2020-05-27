<script>
  export let segment;
  import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";
  import ScrollIcon from "../components/ScrollDownIcon.svelte";
  import PageToggleLines from "../components/PageToggleLines.svelte";
  import MenuSpy from "menuspy";
  import Footer from "../components/sections/Footer.svelte";

  import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
  } from "body-scroll-lock";

  let targetElement = null;
  let elm = null;
  let seg = segment;

  onMount(() => {
    function removeLocationHash() {
      var noHashURL = window.location.href.replace(/#.*$/, "");
      window.history.replaceState("", document.title, noHashURL);
    }
    window.addEventListener("popstate", function(event) {
      removeLocationHash();
    });
    window.addEventListener("hashchange", function(event) {
      event.preventDefault();
      removeLocationHash();
    });
    window.addEventListener("load", function() {
      removeLocationHash();
    });

    elm = document.querySelector("#main-header");
    let ms = new MenuSpy(elm, {
      menuItemSelector: 'a[href^="#"]',

      activeClass: "active-class",

      threshold: 15,

      enableLocationHash: false,

      hashTimeout: 600,

      callback: null
    });
  });
</script>

<Nav />

<div class="flex w-fulL inset-0 bottom-auto fixed z-50 ">
  <Header />
</div>

<main>
  <slot />
</main>

<div class="flex justify-center ">
  <Footer />
</div>
