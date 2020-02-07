<script>
  import Nav from '../components/Nav.svelte'
  import Header from '../components/Header.svelte'
  import Contact from './contact.svelte'
  export let segment
  let isMenuOpen = false

  const handleMenuToggle = event => {
    isMenuOpen = event.detail.isMenuOpened
  }
</script>

<style>
  /* main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>

<Nav {isMenuOpen} {segment} />

<div class="flex w-full">
  <Header on:menuToggled={handleMenuToggle} />
</div>

<main>
  <slot />
</main>
