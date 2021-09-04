<template>
  <Layout class="layout">
    <div class="layout-inner">
      <headersection />
      <div class="blogs-section container">
        <blogcontent :blogdata="blogdata" />
      </div>
    </div>
  </Layout>
</template>

<script>
import headersection from "@/components/Home/Header";
import blogcontent from "@/components/Blogs/BlogContent";
import blogsArr from '@/config/blogs'
export default {
  components: { headersection, blogcontent },
  metaInfo() {
      return this.metaInfo
  },
  data() {
    return {
      blogdata: {},
      metaInfo: {}
    };
  },
  created(){
      blogsArr.forEach((item)=>{
          if(this.$route.params.routename===item.blogUrl){
              this.blogdata = item
              this.metaInfo = item.metaInfo
          }
      })
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


