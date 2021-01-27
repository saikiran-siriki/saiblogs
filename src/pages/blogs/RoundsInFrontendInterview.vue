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
    title: "Frontend Interviews | What to expect?",
    meta: [
        {
            key:'description',
            content:'How many rounds can you expect in a Software Engineer - Frontend Interview?',
            name:'description'
        },
        {
            key:'og:description',
            content:'How many rounds can you expect in a Software Engineer - Frontend Interview?',
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
        title: "How many rounds can you expect in a Software Engineer - Frontend Interview?",
        author: "Saikiran Siriki",
        blogUrl: "/blogs/rounds-in-frontend-interview",
        authorUrl: "/author/saikiran-siriki",
        items: [
          {
            type: "p",
            text: `Every company has very different set of interview processes for their front-end role. In general
            it's pretty common to have 4 interviews or atmost 5. I will breakdown each process and what to expect in a detailed way that can help you to be prepared for what is to come.`,
          },
          { type: "h2", text: "Interview rounds you can expect:" },
          {
            type: "ul",
            lists: [
              "Technical Screening Round",
              "Technical Round - Core Concepts",
              "Technical Round - Datastructures & Algorithms",
              "Technical Manager Round",
              "Director Round",
              "HR Round",
            ],
          },
          { type: "h3", text: "Technical Screening Round" },
          {
            type: "p",
            text: `This can be a technical or non-technical one depending on the company. Let's break it down`,
          },
          {
            type: "ul",
            lists: [
              "If you are speaking with someone from Talent Aquisition team, you can expect questions around your current role, what technologies you know and how much are you familiar with the technology they are using internally in their company. Don't worry too much about the technology part though. If you stay confident and give the impression that you can pick up their technology confidently, you are gucci. They will also collect your other information like CTC, expected CTC, reason for leaving your current organization and if you are willing to relocate. It's not very uncommon to get rejected at this part, so be ready with the mentioned stuff just to be sure",
              "If you are speaking with someone technical, expect very basic questions and approaches. Like how to reverse a linkedlist or something like explain hoisting in javascript. On rare occasions, they might even ask you to compare frameworks etc. This round rarely happens only to weed out people if there's too much talent applying for the samerole",
              
            ],
          },
          { type: "h3", text: "Technical Round - Core Concepts" },
          {
            type: "p",
            text: `This will be a very detailed technical round on the technology/language you are working on. They will ask you deeply into javascript/framework and can occasionally touch questions onto HTML/CSS as well. Most candidates will be weeded out here, so be well prepared. If you don't know a concept, accept it and ask him for a hint. Never play around bush only to say nothing and wasting everyone's time. Remember, nobody knows everything`,
          },
          {type:'html',html:`<a style="color:#e46b00" href="/blogs/concepts-to-prepare-for-frontend-interview">Here's a curated list of topics to prepare for</a>`},
          { type: "h3", text: "Technical Round - Datastructures & Algorithms" },
          {
            type: "p",
            text: `But I'm a front-end developer, why am I being asked questions on datastructures and algorithms? Well, you may be a front end developer but optimization is very important regardless of the role you are working on. For the most part, they want to understand your approach to problems and how you cut them down to reasonable pieces and tackle them. You will also be scrutinized for optimizations and possible edge cases. Don't hesitate to ask for a hint if you are stuck and always communicate what's on your mind with the interviewer. You can expect a maximum of 3 questions in this round`,
          },
          { type: "h3", text: "Technical Manager Round" },
          {
            type: "p",
            text: `This round will be primarily to assess your architectural skills as well as understanding your programming skills on a higher level. You will also be tested on your knowledge of current state of javascript ecosystem and expect discussion around your projects/open source projects as well. You will be judged on the way you structure your code and also your communication skills. Never hesitate to accept that you don't know but definitely show interest, because concepts can be learned only if you have zeal to learn it`,
          },
          { type: "h3", text: "Director Round" },
          {
            type: "p",
            text: `It is also called Engineering Manager Round/CTO Round. If you are here, congrats, you made it pretty far and this will mostly remain a behavioral round. You will be judged on your interest to learn, attention to details, confidence, honesty and whether you can approach a problem fast enough to understand your experience. Likewise, you can ask them questions on their organization, structure, culture etc.`,
          },
          { type: "h3", text: "HR Round" },
          {
            type: "p",
            text: `This round is pretty straightforward. It pretty much revolves around CTC negotiation. Your negotiation skills play a huge part in this one. If you have offers from other companies, it helps a lot. But yeah, if you reached this round, you have cracked the interview and Congratulations!`,
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


