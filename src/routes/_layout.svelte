<script>
  import Nav from '../components/Nav.svelte'
  import Header from '../components/Header.svelte'
  import { onMount } from 'svelte'
  import ScrollIcon from '../components/ScrollDownIcon.svelte'
  import PageToggleLines from '../components/PageToggleLines.svelte'
  let menuClass = ''
  let isMenuOpen = false
  let slideUpClass = 'slideOutUp'

  const handleMenuToggle = () => {
    isMenuOpen = !isMenuOpen
    isMenuOpen ? (menuClass = 'active') : (menuClass = 'not-active')
  }
</script>

<Nav
  {isMenuOpen}
  {slideUpClass}
  on:closeMenu={() => {
    isMenuOpen = false
    menuClass = 'not-active'
  }} />

<div class="flex w-fulL inset-0 bottom-auto fixed z-50 ">
  <Header on:menuToggled={handleMenuToggle} {menuClass} {isMenuOpen} />
</div>

<main>
  <slot />
</main>
