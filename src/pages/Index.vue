<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, fellow humanbeing! 
    </h1>

    <p>
      Welcome to the world of Sai and his adventures. Just grab a popcorn and get ready to dive deep into
      my life experiences as a developer, exploring investor, tech enthusiast and perhaps a future guitar player :))
    </p>

    <p class="home-links">
      <a href="https://github.com/saikiran-siriki" target="_blank" rel="noopener">My Github</a>
      <a href="https://stackoverflow.com/users/8994551/saikiran" target="_blank" rel="noopener">My Stackoverflow</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
