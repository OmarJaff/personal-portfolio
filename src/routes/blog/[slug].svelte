<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`_posts/${params.slug}.md`);

    if (res.status === 200) {
      return { postMd: await res.text() };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import fm from "front-matter";
  import MarkdownIt from "markdown-it";
  import PageTitle from "../../components/PageTitle.svelte";
  export let postMd;
  import Image from "svelte-image";
  const md = new MarkdownIt();

  $: frontMatter = fm(postMd);
  $: post = {
    ...frontMatter.attributes,
    html: md.render(frontMatter.body)
  };
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div
  class="w-full flex flex-col container mx-auto mt-10 mb-10 prose-sm md:prose-lg
  lg:prose-xl">

  <div class=" flex flex-col w-full divide-y divide-teal-400">

    <div class="w-full flex justify-between items-baseline pb-8 px-4">
      <div>
        <a href="/blog">
          <PageTitle title="Blog" />
        </a>
      </div>
      <div class="flex">
        <a
          href="/"
          class="font-roboto text-gray-600 hover:text-gray-800 flex space-x-2
          items-center no-underline">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            class="-mt-1"
            fill="currenColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3839 2.86611C12.8957 2.37796 12.1043 2.37796 11.6161
              2.86611L2.86611 11.6161C2.37796 12.1043 2.37796 12.8957 2.86611
              13.3839C3.35428 13.872 4.14572 13.872 4.63389 13.3839L5
              13.0177V21.25C5 21.9404 5.55965 22.5 6.25 22.5H8.75C9.44035 22.5
              10 21.9404 10 21.25V18.75C10 18.0596 10.5596 17.5 11.25
              17.5H13.75C14.4404 17.5 15 18.0596 15 18.75V21.25C15 21.9404
              15.5596 22.5 16.25 22.5H18.75C19.4404 22.5 20 21.9404 20
              21.25V13.0177L20.3661 13.3839C20.8543 13.872 21.6457 13.872
              22.1339 13.3839C22.622 12.8957 22.622 12.1043 22.1339
              11.6161L13.3839 2.86611Z"
              fill="currentColor" />
          </svg>

          <span class="flex">
            <span class="hidden sm:block mr-1">Back to</span>
            Home
          </span>
        </a>
      </div>

    </div>

    <div
      class="w-full flex flex-col self-center p-4 items-center font-roboto prose
      font-thin">

      <span class="text-gray-600">{post.date}</span>
      <h1>{post.title}</h1>
      <div class="flex w-full items-center justify-center space-x-3 -mt-8">
        <a href="https://twitter.com/omarjaff95" rel="noopener" target="_blank">
          <img
            src={post.avatar}
            alt="author's avatra"
            class="rounded-full w-10 h-10 lg:h-12 lg:w-12 items-stretch
            object-cover" />
        </a>
        <div class="flex flex-col font-roboto">
          <span class="text-sm lg:text-base font-semibold text-teal-500">
            {post.author}
          </span>
          <span class="text-xs lg:text-base text-gray-600">
            {post.position}
          </span>
        </div>

      </div>

    </div>

    <div />
  </div>
  <div
    class="flex flex-col content-center p-6 pt-10 font-SourceSans divide-y-2">

    <div
      class="space-y-6 sm:mx-auto prose sm:prose-lg lg:prose-xl xl:prose-2xl">

      {#if post.thumbnail}
        <img
          src={post.thumbnail}
          alt="thubnail of the post"
          class="h-auto rounded-lg" />
        <!-- <Image /> -->
      {/if}

      <div class="">
        <em>{post.description}</em>
        {@html post.html}
      </div>
    </div>
    <div class="flex justify-between space-x-2 items-center pt-10">

      <div>

        <a
          href="/blog"
          class="text-base lg:text-lg flex items-center outline-none
          focus:outline-none no-underline">
          <svg
            fill="none"
            class="w-6 h-6 mx-2 text-teal-500"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span class="text-teal-500">Back to the blog</span>
        </a>

      </div>
    </div>
  </div>
</div>
