<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
    <!-- <Navbar /> -->
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
export default {
  components:{Navbar,Footer},
  metaInfo: {
    meta: [
        {
            key:'og:image',
            content:'https://res.cloudinary.com/deks86ilr/image/upload/v1611824386/Blog/S.png',
            name:'og:image'
        },
        {
            key:'og:image:width',
            content:'200',
            name:'og:image:width'
        },
        {
            key:'og:image:height',
            content:'200',
            name:'og:image:height'
        },

    ]

  },
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}


</style>
