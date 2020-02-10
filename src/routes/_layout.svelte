<script>
  import Nav from '../components/Nav.svelte'
  import Header from '../components/Header.svelte'
  import Contact from './contact.svelte'
  export let segment
  import ScrollIcon from '../components/ScrollDownIcon.svelte'
  import PageToggleLines from '../components/PageToggleLines.svelte'
  let isMenuOpen = false

  const handleMenuToggle = event => {
    isMenuOpen = event.detail.isMenuOpened
  }
</script>

<Nav {isMenuOpen} {segment} />

<div class="flex w-fulL inset-0 bottom-auto fixed z-50 ">
  <Header on:menuToggled={handleMenuToggle} />
</div>

<main>
  <slot />
</main>
