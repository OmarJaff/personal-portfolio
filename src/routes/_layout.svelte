<script>
  import Nav from '../components/Nav.svelte'
  import Header from '../components/Header.svelte'
  import { onMount } from 'svelte'
  import ScrollIcon from '../components/ScrollDownIcon.svelte'
  import PageToggleLines from '../components/PageToggleLines.svelte'
  import MenuSpy from 'menuspy'
  import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
  } from 'body-scroll-lock'

  let menuClass = ''
  let isMenuOpen = false
  let slideUpClass = ''
  let targetElement
  onMount(() => {
    targetElement = document.querySelector('#sidebar')

    let elm = document.querySelector('#main-header')
    var ms = new MenuSpy(elm, {
      menuItemSelector: 'a[href^="#"]',

      activeClass: 'active-class',

      threshold: 15,

      enableLocationHash: true,

      hashTimeout: 600,

      callback: null,
    })
  })

  const handleMenuToggle = () => {
    isMenuOpen = !isMenuOpen
    isMenuOpen
      ? ((menuClass = 'active'), disableBodyScroll(targetElement))
      : ((menuClass = 'not-active'), enableBodyScroll(targetElement))
    slideUpClass = 'slideOutUp'
  }
</script>

<svelte:head>
  <style>
    html {
      scroll-behavior: smooth;
    }
  </style>
</svelte:head>

<Nav
  {isMenuOpen}
  {slideUpClass}
  on:closeMenu={() => {
    isMenuOpen = false
    menuClass = 'not-active'
    enableBodyScroll(targetElement)
  }} />

<div class="flex w-fulL inset-0 bottom-auto fixed z-50 ">
  <Header on:menuToggled={handleMenuToggle} {menuClass} />
</div>

<main>
  <slot />
</main>
