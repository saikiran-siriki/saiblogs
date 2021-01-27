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
    title: "Questions for Frontend Interview Preparation",
    meta: [
        {
            key:'description',
            content:'Questions and concepts asked in a Frontend Interview',
            name:'description'
        },
        {
            key:'og:description',
            content:'Questions and concepts asked in a Frontend Interview',
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
        title: "What are the concepts to prepare for a Software Engineer - Frontend Interview?",
        author: "Saikiran Siriki",
        blogUrl: "/concepts-to-prepare-for-frontend-interview",
        authorUrl: "/author/saikiran-siriki",
        items: [
          {
            type: "p",
            text: `Internet is an endless ocean and it's hard to find all the learning resources in one place. Well, if you are worried what you should study to crack the javascript interview, well I got your back. I will provide a detailed study plan on how to crack frontend interview. Remember, don't think of it as a chore but as something you will learn that makes you a better javascript developer. Let's get started.`,
          },
          { type: "h3", text: "HTML&CSS" },
          {
            type: "ul",
            lists: [
              "What is viewport, explain it's properties and configurations?",
              "What are the latest tags in HTML5?",
              "CSS selectors",
              "CSS variables",
              "Boxmodel",
              "Flexbox",
              "Difference between display:none, visibility:hidden and opacity:0",
              "What happens when a url is entered into a web browser?",
              "Asset loading using async, defer, preload, prefetch",
              "How HTML rendering works",
              "Difference between em, rem, px",
              "Position relative, absolutes"
            ],
          },
          { type: "h3", text: "Javascript" },
          {
            type: "ul",
            lists: [
              "Promises and their available properties(implement polyfills)",
              "Async Await and how it differs from Promises",
              "Arrow functions vs normal functions, explain what 'this' refers in both",
              "Closures",
              "Hoisting for var function let const",
              "Types of scopes in JS",
              "Memoization, Garbage Collection",
              "Class, inheritance",
              "Event loop(check how promises work differently)",
              "Capturing, Bubbling, Event delegation",
              "Execution context and Execution stack in JS",
              "JS optimizations",
              "Deep copy, shallow copy - pitfalls using spread operator when there is an object inside an object",
              "Call, Apply, Bind -> Implement bind using call and apply",
              "Currying and it's applications",
              "Use of generator(linked to async await vs promises)",
              "Web Optimization",
              "Implement debounce and throttling",
              "Prototypal inheritance",
              "Primitive, non primitive types and differences",
              "Override inbuild type methods using prototypal inheritance",
              "Array Higher Order Functions"
            ],
          },
          { type: "h3", text: "Frameworks" },
          {
            type: "ul",
            lists: [
              "Difference between DOM vs Virtual DOM and why is it optimized(diffing algo refer)",
              "What does react/vue solve that jquery couldn't?",
              "SSR vs SPA, tradeoffs, major learnings",
              "Why Redux/VueX, why not localstorage",
              "What is PWA and how do you implement it",
              "Optimizations in the framework",
              "Comparing frameworks",
              "Which framework would you go for and why",
              "Approach for learning new frameworks",
            ],
          },
          { type: "h3", text: "Architecture" },
          {
            type: "ul",
            lists: [
              "Implement a snake game",
              "Implement a 2D square that moves across a room at an angle with given speed",
              "Write down component breakdown for facebook newsfeedpage",
              "Let's say you have a page full of stats(like trading site where things change all the time), how would you implement it",
              
            ],
          },
          {type:"img",src:`https://res.cloudinary.com/deks86ilr/image/upload/v1611769030/Blog/sweating.gif`},
          {type:"p",text:"Well, that's a lot, isn't it? Don't worry, I will be covering all of those topics soon and make you feel comfortable with the above mentioned concepts. Always remember, knowledge is power and in the case of interviews, it's your leverage. See you soon!"}
          
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


