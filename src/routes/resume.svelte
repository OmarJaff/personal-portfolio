<script>
  import Header from "../components/Header.svelte";
  import ResumeTemplate from "../components/Resume/ResumeTemplate.svelte";
</script>

<div class="block absolute w-full justify-center inset-0 h-20">
  <div
    class="flex w-fulL inset-0 bottom-auto fixed z-50 "
    style=" clip: rect(auto, auto, auto, auto);">
    <Header backgroundColor="gray-600" mainLogoColor="gray-500" />
  </div>
</div>

<div class="h-screen w-full flex">
  <ResumeTemplate />
</div>
