<template>
  <Layout>
    <headersection />
    <div class="blogs-section container">
      <blogitem :blogdata="blogitem" v-for="(blogitem,index) in blogs" :key="index"/>
    </div>
    <blogitem />
  </Layout>
</template>

<script>
import headersection from "@/components/Home/Header"
import blogitem from "@/components/Home/BlogItem"
export default {
  components:{headersection,blogitem},
  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return{
      blogs:[
      {
        title:'Choosing the best framework - Comparision 2021',
        author:'Saikiran Siriki',
        blogUrl:'/choosing-the-best-framework-comparision-2021',
        authorUrl:'/author/saikiran-siriki',
        description:`Deciding to start a project with your comes with a lot of decisions to make. One
        such decision is what framework should I use? While there are numerous opinions
        out there, below we take a look at some of the most common frameworks and what
        you should choose based on your knowledge in javascript ecosystem. So what is the 
        best framework? React: An open source library from the Facebook which has tremendous
        support from contributors around the world which made it incredibly popular in the industry.
        Still,`,
      },
      {
        title:'Choosing the best framework - Comparision 2021',
        author:'Saikiran Siriki',
        blogUrl:'/choosing-the-best-framework-comparision-2021',
        authorUrl:'/author/saikiran-siriki',
        description:`Deciding to start a project with your comes with a lot of decisions to make. One
        such decision is what framework should I use? While there are numerous opinions
        out there, below we take a look at some of the most common frameworks and what
        you should choose based on your knowledge in javascript ecosystem. So what is the 
        best framework? React: An open source library from the Facebook which has tremendous
        support from contributors around the world which made it incredibly popular in the industry.
        Still,`,
      },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss"
</style>


