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
<div class="flex w-full">
  <Header on:menuToggled={handleMenuToggle} />
</div>
<div
  class="flex mx-8 sm:flex-col absolute top-auto sm:top-0 inset-0 sm:h-full
  justify-center ">
  <PageToggleLines />

</div>
<main>
  <slot />
</main>
