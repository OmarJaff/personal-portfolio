<script>
  export let title = "description goes here";
  export let fontSize = "text-base";
  export let width = "w-full";
</script>

<div class="form-group row mb-0 {width}">
  <div class="col-md-8 offset-md-4">
    <div class="relative mt-4">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-400" />
      </div>

      <div
        class="relative flex justify-center text-sm sm:{fontSize} leading-5
        font-SourceSans my-8">
        <span class="px-2 bg-gray-100 text-gray-600">{title}</span>
      </div>

    </div>
  </div>
</div>
