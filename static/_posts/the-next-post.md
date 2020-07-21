---
layout: blog
title: The next post
author: Omar Jaff
position: Full Stack Developer
avatar: images/uploads/omarsimkojaff.jpg
abouttheauthor: I am a full stack web developer and UI designer that loves to
  share what i learn with others, I have almost 3 years of experience in web
  development field.
description: 'To take advantage of these feature in your custom CSS (rather than
  using the plugin API), you can use a new `@layer` directive to explicitly tell
  Tailwind that your styles belong to the "components" bucket:'
date: July 18, 2020
thumbnail: images/uploads/stephen-leonardi-fmyaqwqrwwu-unsplash.jpg
---

## New Features

### Component `variants` support

Until Tailwind CSS v1.5.0, only "utility" classes were really intended to be used with `variants` (like "responsive", "hover", "focus", etc.)

While these are still much more useful for utilities than any other type of class, we now support generating variants for component classes as well, like the `prose` classes in the new `@tailwindcss/typography` plugin:

```html
<article class="prose md:prose-lg">
  <!-- Content -->
</article>
```

To take advantage of these feature in your custom CSS (rather than using the plugin API), you can use a new `@layer` directive to explicitly tell Tailwind that your styles belong to the "components" bucket:

### Responsive `container` variants

We've added support for the [`:focus-visible` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) using a new `focus-visible` variant.

This is super useful for adding focus styles that _only_ appear to keyboard users, and are ignored for mouse users:

```html
<input type="checkbox" class="bg-white checked:bg-blue-500" />
```

We've added a new `checked` variant you can use to conditionally style things like checkboxes and radio buttons:

It's not enabled for anything by default, but you can enable it in the `variants` section of your config file

It's not enabled for anything by default, but you can enable it in the variants section of your config file.

> Why is Tailwind removing the default styles on my `h1` elements? How do I disable this? What do you mean I lose all the other base styles too?

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a `p` element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look _awesome_, not awful.

That's why today we're excited to release [`@tailwindcss/typography`](https://github.com/tailwindcss/typography) — a plugin that gives you what you _actually_ want, without any of the downside of doing something stupid like disabling our base styles.

It adds a new set of `prose` classes that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document: