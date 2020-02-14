<script>
  import PageTitle from './PageTitle.svelte'
</script>

<style>
  .custom-shadow {
    -webkit-box-shadow: 9px 6px 9px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 9px 6px 9px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 9px 6px 9px -1px rgba(0, 0, 0, 0.75);
  }
</style>

<svelte:head>
  <title>About Omar</title>
</svelte:head>
<div class="flex flex-col ">
  <div class="flex flex-col">
    <PageTitle title="About Omar" />
  </div>
  <div class="flex w-auto h-8 custom-shadow" />
</div>
