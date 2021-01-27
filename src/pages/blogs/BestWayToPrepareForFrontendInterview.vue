<template>
  <Layout>
    <headersection />
    <div class="blogs-section container">
      <blogcontent :blogdata="blogdata" />
    </div>
  </Layout>
</template>

<script>
import headersection from "@/components/Home/Header";
import blogcontent from "@/components/Blogs/BlogContent";
export default {
  components: { headersection, blogcontent },
  metaInfo: {
    title: "Choosing the best framework - Comparision 2021",
    meta: [
        {
            key:'description',
            content:'Confused what should be the choice of your frontend framework in 2021?',
            name:'description'
        },
        {
            key:'og:description',
            content:'Confused what should be the choice of your frontend framework in 2021?',
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
  data() {
    return {
      blogdata: {
        title: "Choosing the best framework - Comparision 2021",
        author: "Saikiran Siriki",
        blogUrl: "/choosing-the-best-framework-comparision-2021",
        authorUrl: "/author/saikiran-siriki",
        items: [
          {
            type: "p",
            text: `Deciding to start a project with your comes with a lot of decisions to make. One
        such decision is what framework should I use? While there are numerous opinions
        out there, below we take a look at some of the most common frameworks and what
        you should choose based on your knowledge in the javascript ecosystem. `,
          },
          { type: "h2", text: "So what is the best framework in 2021?" },
          {
            type: "img",
            src:
              "https://res.cloudinary.com/deks86ilr/image/upload/v1611673892/Blog/frameworkmeme.jpg",
          },
          { type: "ul", lists: ["VueJS", "ReactJS", "AngularJS"] },
          { type: "h1", text: "ReactJS" },
          {
            type: "html",
            html: "<span><strong>Version: </strong></span><span>16.0</span>",
          },
          {
            type: "html",
            html:
              "<span><strong>Size: </strong></span><span>109 kb (34.8 kb gzipped)</span>",
          },
          {
            type: "p",
            text: `Nobody understands it but everybody wants in. Any idiot can walk into a company, utter the letter React and JS and recruiters will hurl bricks of cash at him and by the time they find out he knows nothing, it's too late. Just kidding :)).Developed by Facebook, this framework suffered initially due to it's weird licensing issue. As soon as it is sorted out, it is vastly adapted in the industry making it the most popular framework in the Javascript Ecosystem. With a huge open source community backed by facebook, this framework sees updates regularly and keep on innovation. The most recent update not only added interesting features but also reduced it's size by 30%`,
          },
          { type: "h3", text: "Pros:" },
          {
            type: "ul",
            lists: [
              "Virtual DOM makes development faster while making the user experience better",
              "Wide Range of Toolset",
              "One Direction data flow makes the Code easy to reason about",
              "Huge community leading to large number of plugins",
              "Switching to Android Development makes it easier due to the wide presence of React Native in the industry",
            ],
          },
          { type: "h3", text: "Cons:" },
          {
            type: "ul",
            lists: [
              "High Pace of development leads to lot of learning but is beneficial if you put effort into it",
              "JSX can be hard to reason about initially",
              "Poor SEO due to search engines having hard time rendering dynamic content. This can be solved using NextJS(SSR alternative), but with additional learning curve",
            ],
          },
          { type: "h1", text: "VueJS" },
          {
            type: "html",
            html: "<span><strong>Version: </strong></span><span>2.6.12</span>",
          },
          {
            type: "html",
            html:
              "<span><strong>Size: </strong></span><span>80 kb~ (30 kb gzipped including VueX+Router)</span>",
          },
          {
            type: "p",
            text: `VueJS is an inspiration from AngularJS, borrowing the best from Angular i.e. data driven way of dealing with DOM with data binding leading to less headaches. `,
          },
          { type: "h3", text: "Pros:" },
          {
            type: "ul",
            lists: [
              "Similar to React, VueJS uses Virtual DOM",
              "Small memory footprint compared to its peers",
              "Two way data binding makes it very clear and easier to reason",
              "Switching to Android Development makes it easier due to the wide presence of React Native in the industry",
              "Easy to learn due to it's well written documentation",
              "Large community support",
            ],
          },
          { type: "h3", text: "Cons:" },
          {
            type: "ul",
            lists: [
              "Having too much independence isn't always the best thing. You will feel pain when you work on a large team and different people writing code in their own way",
              "Though it has more stars in github that it's peers, it isn't widely popular leading to less support for plugins",
              "The alternatives for ReactNative and GatsbyJS are less stable/desiring",
              "Less number of developers also leads to less number of companies adapting it leading to lesser jobs",
            ],
          },

          { type: "h1", text: "AngularJS" },
          { type: "p", text: `Let's talk about it someother day` },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


