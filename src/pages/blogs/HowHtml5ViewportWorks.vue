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
    title: "HTML5 Viewport | Configurations",
    meta: [
        {
            key:'description',
            content:`What is HTML5 viewport, what are it's uses and configurations`,
            name:'description'
        },
        {
            key:'og:description',
            content:`What is HTML5 viewport, what are it's uses and configurations`,
            name:'og:description'
        },
    ]

  },
  data() {
    return {
      blogdata: {
        title: "Viewport, what does it solve and it's configurations",
        author: "Saikiran Siriki",
        date:'January 28, 2021',
        blogUrl: "/blogs/how-html5-viewport-works",
        authorUrl: "/author/saikiran-siriki",
        items: [
          {
            type: "p",
            text: `A viewport is the visible area on a screen. It varies from device to device. It is smaller on a mobile than it is on a desktop. Before the advent of mobiles and tablets, websites used to have fixed and static design. This became very inconvenient as the mobile market boomed. Initially, mobile browsers scaled down the webpage to display the page, but that's not an optimal user experience`,
          },
          { type: "h2", text: "HTML5 viewport fix" },
          {
            type: "html",
            html: `HTML5 introduced a new way to tame the viewport, using the <code>meta</code> tag like so:`,
          },
          {
            type: "html",
            html: `<code><meta name="viewport" content="width=device-width, initial-scale=1.0"></code>`,
          },
          {
            type: "p",
            text: `What is this code achieving? What are the properties of this meta tag and how is it helping with smaller devices?`,
          },
          {
            type:'ul',
            lists:[{type:'html',html:`The <code>width</code> enables the developer to control the width of the viewport. It can be set to a specific value like 400px or you can choose to set to <code>device-width</code>(recommended) which sets the width of the viewport to be the device width.`},
            {type:'html',html:`The <code>initial-view</code> property controls the page's default zoom level when it's initially loaded. You can also control the maximum and minimum zoom level using the <code>maximum-view</code> and <code>minimum-view</code> properties.`}
            ]
          }
          
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


