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
        <span class="meta-item"
          ><font-awesome-icon icon="user" /><span class="meta-item-text"
            ><g-link
              to="/author/saikiran-siriki"
              >{{blogdata.author}}</g-link
            ></span
          ></span
        ><span class="meta-item"
          ><font-awesome-icon icon="calendar" /><g-link
            :to="blogdata.blogUrl"
            class="meta-item-text"
            rel="bookmark"
            ><time
              class="blog-date"
              datetime="2021-01-05T11:58:00-06:00"
              >January 26, 2021</time
            ></g-link
          ></span
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