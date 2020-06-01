<script>
  export let title = "button-title";
  export let submitButtonDisabled;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const clicked = () => {
    dispatch("click");
  };
</script>

<button
  disabled={submitButtonDisabled}
  on:click|preventDefault={() => clicked()}
  class="w-full rounded bg-gray-800 text-gray-200 focus:outline-none
  outline-none text-lg py-1 text-md hover:bg-gray-900 relative flex
  justify-center items-center capitalize disabled:opacity-50">

  <div class="absolute left-0 pl-3">
    <slot />
  </div>
  {title}
</button>
