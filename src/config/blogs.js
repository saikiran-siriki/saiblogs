const blogsArr = [
    {
        title: "Choosing the best framework - Comparision 2021",
        author: "Saikiran Siriki",
        blogUrl: "choosing-the-best-framework-comparision-2021",
        authorUrl: "/author/saikiran-siriki",
        metaInfo: {
            title: "Choosing the best framework - Comparision 2021",
            meta: [
                {
                    key: 'description',
                    content: 'Confused what should be the choice of your frontend framework in 2021?',
                    name: 'description'
                },
                {
                    key: 'og:description',
                    content: 'Confused what should be the choice of your frontend framework in 2021?',
                    name: 'og:description'
                },

            ]

        },
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
    {
        title: "What are the concepts to prepare for a Software Engineer - Frontend Interview?",
        author: "Saikiran Siriki",
        date: 'January 27, 2021',
        blogUrl: "concepts-to-prepare-for-frontend-interview",
        authorUrl: "/author/saikiran-siriki",
        metaInfo: {
            title: "Questions for Frontend Interview Preparation",
            meta: [
                {
                    key: 'description',
                    content: 'Questions and concepts asked in a Frontend Interview',
                    name: 'description'
                },
                {
                    key: 'og:description',
                    content: 'Questions and concepts asked in a Frontend Interview',
                    name: 'og:description'
                },

            ]

        },
        items: [
            {
                type: "p",
                text: `Internet is an endless ocean and it's hard to find all the learning resources in one place. Well, if you are worried what you should study to crack the javascript interview, well I got your back. I will provide a detailed study plan on how to crack frontend interview. Remember, don't think of it as a chore but as something you will learn that makes you a better javascript developer. Let's get started.`,
            },
            { type: "h3", text: "HTML&CSS" },
            {
                type: "ul",
                lists: [
                    { type: "html", html: "<a href='/blogs/how-html5-viewport-works' target='_blank'>What is viewport, explain it's properties and configurations?</a>" },
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
            { type: "img", src: `https://res.cloudinary.com/deks86ilr/image/upload/v1611769030/Blog/sweating.gif` },
            { type: "p", text: "Well, that's a lot, isn't it? Don't worry, I will be covering all of those topics soon and make you feel comfortable with the above mentioned concepts. Always remember, knowledge is power and in the case of interviews, it's your leverage. See you soon!" }

        ],
    },
    {
        title: "Viewport, what does it solve and it's configurations",
        author: "Saikiran Siriki",
        date: 'January 28, 2021',
        blogUrl: "how-html5-viewport-works",
        authorUrl: "/author/saikiran-siriki",
        metaInfo: {
            title: "HTML5 Viewport | Configurations",
            meta: [
                {
                    key: 'description',
                    content: `What is HTML5 viewport, what are it's uses and configurations`,
                    name: 'description'
                },
                {
                    key: 'og:description',
                    content: `What is HTML5 viewport, what are it's uses and configurations`,
                    name: 'og:description'
                },
            ]

        },
        items: [
            {
                type: "p",
                text: `A viewport is the visible area on a screen. It varies from device to device. It is smaller on a mobile than it is on a desktop. Before the advent of mobiles and tablets, websites used to have fixed and static design. This became very inconvenient as the mobile market boomed. Initially, mobile browsers scaled down the webpage to display the page, but that's not an optimal user experience. Is that an optimal experience? Considering most of the customers of a webpage are from mobile? Definitely Not. The web saw a major shift in how it's developed and it's often a common practice among developers to do mobile first development.`,
            },
            { type: "h2", text: "HTML5 viewport fix" },
            {
                type: "html",
                html: `HTML5 introduced a new way to control the viewport, using the <code>meta</code> tag like so:`,
            },
            {
                type: "html",
                html: `<textarea readonly style="width:100%;resize:vertical"><meta name="viewport" content="width=device-width, initial-scale=1.0" ></textarea>`,
            },
            {
                type: "p",
                text: `What is this code achieving? What are the properties of this meta tag and how is it helping with smaller devices?`,
            },
            {
                type: 'ul',
                lists: [{ type: 'html', html: `The <code>width</code> enables the developer to control the width of the viewport. It can be set to a specific value like 400px or you can choose to set to <code>device-width</code>(recommended) which sets the width of the viewport to be the device width.` },
                { type: 'html', html: `The <code>initial-view</code> property controls the webpage's default zoom level on initial load. You can also control the maximum and minimum zoom level using the <code>maximum-view</code> and <code>minimum-view</code> properties.` }
                ]
            }

        ],
    },
    {
        title: "How many rounds can you expect in a Software Engineer - Frontend Interview?",
        author: "Saikiran Siriki",
        blogUrl: "rounds-in-frontend-interview",
        date: 'January 26, 2021',
        authorUrl: "/author/saikiran-siriki",
        metaInfo: {
            title: "Frontend Interviews | What to expect?",
            meta: [
                {
                    key: 'description',
                    content: 'How many rounds can you expect in a Software Engineer - Frontend Interview?',
                    name: 'description'
                },
                {
                    key: 'og:description',
                    content: 'How many rounds can you expect in a Software Engineer - Frontend Interview?',
                    name: 'og:description'
                },

            ]

        },
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
            { type: 'html', html: `<a style="color:#e46b00" target="_blank" href="/blogs/concepts-to-prepare-for-frontend-interview">Here's a curated list of topics to prepare for</a>` },
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

]

export default blogsArr;