<script>
  export let text = "default text";
</script>

<div class="flex items-center space-x-2">
  <slot />
  <span class="text-gray-800 sm:text-lg">{text}</span>
</div>
