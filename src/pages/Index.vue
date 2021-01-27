<template>
  <Layout>
    <headersection />
    <div class="blogs-section container">
      <blogitem :blogdata="blogitem" v-for="(blogitem,index) in blogs" :key="index"/>
    </div>
  </Layout>
</template>

<script>
import headersection from "@/components/Home/Header"
import blogitem from "@/components/Home/BlogItem"
export default {
  components:{headersection,blogitem},
  metaInfo: {
    title: 'Javascript Interview questions',
    meta: [
        {
            key:'description',
            content:'Everything you need to know about javascript interviews. Questions on HTML, CSS and Javascript and other framework related questions',
            name:'description'
        },
        {
            key:'og:description',
            content:'Everything you need to know about javascript interviews. Questions on HTML, CSS and Javascript and other framework related questions',
            name:'og:description'
        },
        {
            key:'og:image',
            content:'https://res.cloudinary.com/deks86ilr/image/upload/v1611679909/Blog/frameworkmeme-ogimage.jpg',
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
  data(){
    return{
      blogs:[
      {
        title:'How many rounds can you expect in a Software Engineer - Frontend Interview?',
        author:'Saikiran Siriki',
        blogUrl:'/blogs/rounds-in-frontend-interview',
        authorUrl:'/author/saikiran-siriki',
        description:`Every company has very different set of interview processess for their job openings. In general
        it's pretty common to have 4 interviews or atmost 5. I will breakdown each process and what to expect in a detailed way that can help you be prepared of what is to come.`,
      },
      {
        title:'What is the best way to prepare for a Software Engineer - Frontend Interview?',
        author:'Saikiran Siriki',
        blogUrl:'/blogs/best-way-to-prepare-for-frontend-interview',
        authorUrl:'/author/saikiran-siriki',
        description:`You might have read in my previous post on what to expect in an interview setting. Now the actual question, how do you actually do it? There's an overwhelming amount of content online and it's not very uncommon to get lost in what seems to be endless things to study. Here's a detailed plan`,
      },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss"
</style>


