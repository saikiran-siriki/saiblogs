<template>
  <article
    class="blog-item"
  >
    <header class="blog-header">
      <h2 class="blog-title">
        <g-link
          :to="blogdata.blogUrl"
          >{{blogdata.title}}</g-link
        >
      </h2>

      <div class="blog-meta">
        <g-link class="meta-item" to="/author/saikiran-siriki"
          ><font-awesome-icon class="fa-limit-size" icon="user" /><span class="meta-item-text"
            ><span
              >{{blogdata.author}}</span
            ></span
          ></g-link
        ><g-link class="meta-item" :to="blogdata.blogUrl"
          ><font-awesome-icon class="fa-limit-size" icon="calendar" /><span
            
            class="meta-item-text"
            rel="bookmark"
            ><time
              class="blog-date"
              datetime="2021-01-05T11:58:00-06:00"
              >January 26, 2021</time
            ></span
          ></g-link
        >
      </div>
      <!-- .entry-header -->
    </header>

    <div class="blog-content">
        {{blogdata.description}} <g-link
        :to="blogdata.blogUrl"
        class="more-link"
        >Read more [...]</g-link
      >
      <!-- .entry-content -->
    </div>
    <!-- #post-5261 -->
  </article>
</template>
<script>
export default {
  name:"BlogItem",
  props:["blogdata"]
}
</script>
<style lang="scss" scoped>
@import "./index.scss"
</style>