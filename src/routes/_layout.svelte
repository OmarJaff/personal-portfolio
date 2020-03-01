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
      // menu selector
      menuItemSelector: 'a[href^="#"]',

      // CSS class for active item
      activeClass: 'active-class',

      // amount of space between your menu and the next section to be activated.
      threshold: 20,

      // enable or disable browser's hash location change.
      enableLocationHash: true,

      // timeout to apply browser's hash location.
      hashTimeout: 600,

      // called every time a new menu item activates.
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
