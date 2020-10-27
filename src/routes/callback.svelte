<script>
  async function file_get_contents(uri, callback) {
    let res = await fetch(uri),
      ret = await res.text();
    return callback ? callback(ret) : ret; // a Promise() actually.
  }

  //   file_get_contents("https://omarjaff.com/callback", console.log);
  // or
  file_get_contents("https://omarjaff.com/callback").then(ret =>
    console.log(ret)
  );
</script>

<div class="content" />
