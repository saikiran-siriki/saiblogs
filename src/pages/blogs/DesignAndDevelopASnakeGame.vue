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
    title: "HTML CSS Javascript Snake Game",
    meta: [
        {
            key:'description',
            content:`Let's design and develop a snake game`,
            name:'description'
        },
        {
            key:'og:description',
            content:`Let's design and develop a snake game`,
            name:'og:description'
        },
    ]

  },
  data() {
    return {
      blogdata: {
        title: "Design and Develop a Snake Game",
        author: "Saikiran Siriki",
        date:'January 31, 2021',
        blogUrl: "/blogs/implement-a-snake-game",
        authorUrl: "/author/saikiran-siriki",
        items: [
          {
            type: "p",
            text: `Remember the days we used to be excited to play snake game in our parents mobile phone? This probably is a game a lot of non-gamers might also have played and enjoyed with no competitive pressure, purely relaxing. Now let's try and implement a snake game using JS`,
          },
          { type: "h3", text: "Let's breakdown the problem" },
          {type:'ul',lists:[
            "We need a Snake",
            "We need a food",
            "We need a container for the game to happen"
          ]},
          { type: "h3", text: "Define Snake" },
          {
            type:'ul',
            lists:["A snake can be represented as an array of points in an XY co-ordinate",
            "The snake grows in size if it eats the food",
            "Snake can move in top,bottom,left and right",
            "Snake moving in top can't suddenly change directions to bottom and viceversa. Same rule holds true for left and right as well",
            
            ]
          },
          {type:'p',text:`Now that we are clear what a snake is, let's define other rules`},
          {type:'ul',
          lists:["Food is nothing but a random point in our coordinate system","We lose the game as soon as the snake's head hits the walls",
            "We also lose if the snake's head touches any of its own points other than it's head",]},
          {type:'p',text:`Now that we broke it into subproblems, let's start implementing it.`},
          {type:'h3',text:'Implementing the Snakeboard class'},
          {type:'As discussed earlier, we can initialize the contructor class with the following properties'},
          {type:'ul',lists:[
            "coordinates",
            "angle",
            "food_location",
            "is_game_over"
          ]},
          {type:'p',text:'The above fields are self explanatory, our snakeboard class will be'},
          {type:'html',html:`
          <pre>
            <code>
class Snakeboard{
  constructor(angle){
    this.coordinates = [[10,10],[11,10],[12,10],[13,10],[14,10],[15,10],[16,10],[17,10],[18,10],[19,10],[20,10],[21,10],[22,10],[23,10],[24,10]]
    this.angle = angle
    this.food = [50,30]
    this.is_game_over  =false
  }
}
            </code>
          </pre>`},
          {type:'p',text:'We are using the angle as argument since it can be user modified. Going forward, we need to implement methods to define the snake movement, randomizing the food as well as checking for game end.'},
          {type:'h3',text:'Movement method'},
          {type:'p',text:'So what will happen in this method? I encourage you to give it a thought before reading forward. Ok, if the snake is moving to right(180deg), we are going to add an element to the end of coordinates array. The added element will be equal to (last element x coordinate+1, last element y coordinate). This is because we assume that the origin of the coordinate system is at top left corner and the movement to right would mean the x-coodinate would increase by one, thereby a new point with above rule. But as you might have guessed, the first item of the coordinate would be removed unless the snake eats the food. If the snake eats food, we will also generate a new random point for the food based on the size of the container. The similar approach would apply for other angles as well.'},
          {type:'html',html:`
          <pre>
            <code>
  randomize_food(){
    this.food = [Math.floor(Math.random()*document.getElementById("container").width),Math.floor(Math.random()*document.getElementById("container").height)] 
  }
  movement(){
    var last_element = this.coordinates[this.coordinates.length-1]

  	if(this.angle===90){
    	this.coordinates.push([last_element[0],last_element[1]-1])
      if(!(this.food[0]===last_element[0] && this.food[1]===last_element[1]-1)){
      	this.coordinates.shift()
      } else{
      	this.randomize_food()
      }
    }

    if(this.angle===-90){
    	this.coordinates.push([last_element[0],last_element[1]+1])
      if(!(this.food[0]===last_element[0] && this.food[1]===last_element[1]+1)){
      	this.coordinates.shift()
      } else{
      	this.randomize_food()
      }
    }

    if(this.angle===-180){
    	this.coordinates.push([last_element[0]-1,last_element[1]])
      if(!(this.food[0]===last_element[0]-1 && this.food[1]===last_element[1])){
      	this.coordinates.shift()
      }else{
      	this.randomize_food()
      }
    }

    if(this.angle===180){
    	this.coordinates.push([last_element[0]+1,last_element[1]])
      if(!(this.food[0]===last_element[0]+1 && this.food[1]===last_element[1])){
      	this.coordinates.shift()
      } else{
      	this.randomize_food()
			}   
    }
  }
            </code>
            </pre>`},
            {type:'p',text:'We also want to check the game end status while the movement takes place, so we can call the gameend method just before the movement method'},
            {type:'html',html:`
            <pre>
              <code>
game_over(){
  var last_element = this.coordinates[this.coordinates.length-1]
  	if(last_element[0]===0 || last_element[0]===document.getElementById("container").width || last_element[1]===0 || 
    last_element[1]===document.getElementById("container").height){
        this.is_game_over = true
  }  
}
movement(){
  this.game_over()
  ....
}
              </code>
            </pre>
            `},
            {type:'p',text:`Now that we have defined our class, let's call it and try to make our snake run and feasting. We can create an instance of our snakeboard like so:`},
            {type:'html',html:`
            <pre>
              <code>
let new_snake = new Snake(180)
              </code>
            </pre>
            `},
            {type:'p',text:`Inorder to make the snake move in realtime, we need to initialize a setTimeinterval function to call it every few milliseconds. We will also verify the gameend status here so that we can show our users that the game has ended like so`},
            {type:'html',html:`
            <pre>
              <code>
setInterval(()=>{
  if(!new_snake.is_game_over){
    new_snake.movement()
  }
},40)
              </code>
            </pre>
            `},
            {type:'p',text:'We have implemented the majority of the solution, this is what most interviewers would expect from this. You can go ahead and build the rest of it using Canvas Api.'},
            {type:'html',html:`You can find my implementation in this <a target="_blank" href="https://jsfiddle.net/Rookies/cb4eu6L0/">fiddle</a>`}




          
          
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


