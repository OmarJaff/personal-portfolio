<script>
  import Header from "../components/Header.svelte";
  import ResumeTemplate from "../components/Resume/ResumeTemplate.svelte";

  async function file_get_contents(uri, callback) {
    let res = await fetch(uri),
      ret = await res.text();
    return callback ? callback(ret) : ret; // a Promise() actually.
  }

  //   file_get_contents("https://omarjaff.com/callback", console.log);
  // or
  file_get_contents("https://omarjaff.com/resume").then(ret =>
    console.log(ret)
  );
</script>

<div id="resume" class="block absolute w-full justify-center inset-0 h-20">
  <div
    class="flex w-fulL inset-0 bottom-auto fixed z-50 "
    style=" clip: rect(auto, auto, auto, auto);">
    <Header backgroundColor="gray-600" mainLogoColor="gray-500" />
  </div>
</div>

<div class=" w-full flex">
  <ResumeTemplate />
</div>
