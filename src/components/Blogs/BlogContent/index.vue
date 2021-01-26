<template>
  <div>
    <div class="article-container">
      <div class="article-title">{{ blogdata.title }}</div>
      <div class="article-meta">
        <g-link to="/author/saikiran-siriki" class="meta-item"
          ><font-awesome-icon class="fa-limit-size" icon="user" /><span class="meta-item-text"
            >{{
              blogdata.author
            }}</span></g-link
        ><g-link class="meta-item" :to="blogdata.blogUrl"
          ><font-awesome-icon class="fa-limit-size" icon="calendar" /><span
            
            class="meta-item-text"
            rel="bookmark"
            ><time class="blog-date" datetime="2021-01-05T11:58:00-06:00"
              >January 26, 2021</time
            ></span
          ></g-link
        >
      </div>
      <div class="article-content">
        <div v-for="(blogitem, index) in blogdata.items" :key="index">
          <p v-if="blogitem.type === 'p'">{{ blogitem.text }}</p>
          <ul v-if="blogitem.type === 'ul'">
            <li
              v-for="(listitem, listindex) in blogitem.lists"
              :key="listindex"
            >
              {{ listitem }}
            </li>
          </ul>
          <img
            :src="blogitem.src"
            v-if="blogitem.type === 'img'"
            alt=""
          />
          <h1 v-if="blogitem.type==='h1'">{{blogitem.text}}</h1>
          <h2 v-if="blogitem.type==='h2'">{{blogitem.text}}</h2>
          <h3 v-if="blogitem.type==='h3'">{{blogitem.text}}</h3>
          <span v-if="blogitem.type==='html'" v-html="blogitem.html" ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
  props: ["blogdata"],
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>