---
layout: blog
title: A better way of Image Optimization
author: Omar Jaff
position: Full Stack Developer
avatar: images/uploads/omarsimkojaff.jpg
abouttheauthor: I am a full stack web developer and UI designer that loves to
  share what i learn with others, I have almost 3 years of experience in web
  development field.
description: Trust us, you don’t want Google to hate your website. Fortunately,
  you can reduce your image’s file sizes to help improve your website’s
  performance. One problem with formatting them is that modifications often
  reduce their quality (which in turn might make the visitor hate your website).
date: July 19, 2020
---
### What does it mean to optimize an image anyway?

Large images slow down your web pages which creates a less than optimal user experience. Optimizing images is the process of **decreasing their file size**, using either a plugin or script, which in turn speeds up the load time of the page. Lossy and lossless compression are two methods commonly used.

### The Benefits of optimizing your images.

**Here is a look at the main benefits.**

* It will improve your page loading speed (see our case study below for how much it affects your speed). If your page takes too long to load your visitors might get tired of waiting and move on to something else. For more information about optimizing your page loading time see our [in-depth page speed optimization guide](https://kinsta.com/learn/page-speed/).
* Combined with a [great SEO WordPress plugin](https://kinsta.com/blog/best-seo-plugins-for-wordpress/) it improves your [SEO](https://kinsta.com/blog/what-does-seo-stand-for/). Your site will rank higher in search engine results. Large files slow down your site and search engines hate slow sites. Google is also likely to crawl and index your images faster for Google image search. Curious about what percentage of your traffic comes from Google image search? You can use a Google Analytics segment to [check Google image search traffic](https://passion.digital/blog/2015/03/05/how-to-check-image-traffic-in-ga/).
* Creating backups will be faster.
* Smaller image file sizes use less bandwidth. Networks and browsers will appreciate this.
* Requires [less storage space on your server](https://kinsta.com/blog/disk-usage-wordpress/) (this depends upon how many thumbnails you optimize)

> Images make up on average 21% of a web page's overall weight. 😮 Optimize them! https://bit.ly/2ty2YzW #webperf #WordPress via @kinsta 

### How To Optimize Images for Web and Performance[](https://kinsta.com/blog/optimize-images-for-web/#how-to-optimize-images-for-web-and-performance)?

The primary goal of formatting your images is to find the **balance between the lowest file size and an acceptable quality**. There is more than one way to perform almost all of these optimizations. One of the most popular ways is to simply compress them before uploading to WordPress. Usually, this can be done in a tool like Adobe Photoshop or Affinity Photo. Some of these tasks can also be performed using plugins, which we will go into more below.

The two primary things to consider are the **file format** and **type of compression** you use. By choosing the right combination of file format and compression type you can reduce your image size by as much as 5 times. You’ll have to experiment with each image or file format to see what works best.

![a graphical sketch of image optimization ](images/uploads/optimized-imageoptimization.png "Image Optimization and Performance ")

### Choose the Right File Format[](https://kinsta.com/blog/optimize-images-for-web/#choose-the-right-file-format)

Before you start modifying your images, make sure you’ve chosen the best file type. There are several types of files you can use:

* **PNG** – produces higher quality images, but also has a larger file size. Was created as a lossless image format, although it can also be lossy.
* **JPEG** – uses [lossy and lossless optimization](https://kinsta.com/blog/lossy-compression/). You can adjust the quality level for a good balance of quality and file size.
* **GIF** – only uses 256 colors. It’s the best choice for animated images. It only uses lossless compression.

There are several others, such as JPEG XR and [WebP](https://kinsta.com/blog/webp/), but they’re not universally supported by all browsers. Ideally, you should use JPEG or JPG for images with lots of color and PNG for simple images.\
(Suggested reading: [JPG vs JPEG: Understanding the Most Common Image File Format](https://kinsta.com/blog/jpg-vs-jpeg/))

```javascript
plugin(function ({ addComponents })) {
  addComponents({
    '.card': {
      // ...
    }
  }, {
    variants: ['responsive']
  })
}) 
```

and this is another example 

```html
<div class="md:container">
  <!-- ... -->
</div>

<button class="focus-visible:outline-none focus-visible:shadow-outline ...">
  Click me
</button>
```

###  Lossy vs Lossless Optimization[](https://kinsta.com/blog/optimize-images-for-web/#lossy-vs-lossless-optimization)

It is also important to understand that there are two types of compression you can use, lossy and lossless.

**Lossy** – this is a filter that eliminates some of the data. This will degrade the image, so you’ll have to be careful of how much to reduce the image. The file size can be reduced by a large amount. You can use tools such as Adobe Photoshop, Affinity Photo, or other image editors to adjust the quality settings of an image. The example we used above is using lossy compression.

**Lossless** – this is a filter that compresses the data. This doesn’t reduce the quality but it will require the images to be uncompressed before they can be rendered. You can perform a lossless compression on your desktop using tools such as Photoshop, [FileOptimizer](http://netm.ag/optimize-263), or [ImageOptim](http://imageoptim.com/).

It’s best to experiment with your compression techniques to see what works best for each image or format. If your tools have the option make sure you save the image for web. This is an option in many image editors and will give you the quality adjustments so you can perform optimal compression. You’ll lose some of the quality, so experiment to find the best balance you can without making the images ugly.

**Here are some additional tools and programs to check out:**

* [Adobe Photoshop](http://www.photoshop.com/)
* [Gimp](http://www.gimp.org/)
* [Paint.NET](http://www.getpaint.net/index.html)
* [GIFsicle](http://www.lcdf.org/gifsicle/)
* [JPEGtran](http://jpegclub.org/jpegtran/)
* [JPEG Mini](http://www.jpegmini.com/)
* [OptiPNG](http://optipng.sourceforge.net/)
* [pngquant](http://pngquant.org/)
* [FileOptimizer](http://netm.ag/optimize-263)
* [ImageOptim](http://imageoptim.com/)
* [Trimage](http://trimage.org/)
* [ImageResize.org](https://imageresize.org/compress-images)