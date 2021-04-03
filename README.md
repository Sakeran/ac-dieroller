# ac-dieroller

## Spring 2021 Web Development Challenge - Die Roller

This is the first project in my [Spring 2021 - Web Development Challenge](https://10in30.alexander-morse.com/) series, where I am attempting to design, code, and ship ten different web projects in the space of one month, under a variety of constraints.

For my first project, I've decided to visit Vue.js and build a simple web application using the Vue CLI tool. This is a simple die-rolling application that allows users to set up and execute custom dice rolls.

## Blog Post

**Start Date**: April 1, 2021

**End Date**: April 3, 2021

The projects I have in mind for this month will fall broadly into one of two categories. In the first category, I’ll aim to test my front-end design skills with little more than HTML and CSS - aside from build processes, there will be little JavaScript involved in the final products. In the second category, I’m going to focus on building out working applications with different JavaScript frameworks. Aesthetics still count here, but the challenge is meant to come mostly from my self-imposed deadlines.

I decided to start off this month with a project from the second category. And I thought I was starting off simple. I decided to use a framework I’ve known of for a while, but have never gotten around to actually using - Vue.js. I know a few people who swear by this framework, and after a few days with it, it’s easy to see why. A few tutorials and the Vue CLI made it so easy to start working with that it felt like cheating, and installing Vuex when I realized I needed it took all of two minutes. By the time I finished with the project, I was already looking forward to building something else with it.

That was the good news. While I had a lot of fun working with Vue, I ran into a few DOM-related roadblocks while trying to make the application display well everywhere. As you can see from the thumbnail, I had the idea in my head that I was going to make a full-height web application, a mobile-first display with most of the controls on the bottom of the screen where they would be easy to use. Furthermore, there is a sliding-drawer effect to switch between views - pressing ‘Show Rolls’ causes the roll-editor section to slide up and cover most of the screen.

In other words, I chose a layout which gave mobile browsers every conceivable chance to bug out. And they did. The biggest issue was always with the slide-out keyboard on my Android device - it tends to push the layout up and out of the view when it extends, and the layout tends to stay pushed up even when it retracts, leaving the header hidden from view. I was able to alleviate this problem a little by switching from absolute positioning to a grid-based, but it still crops up from time to time. Ultimately I ran out of time, and the project ended with mobile usability not quite being what I’d hoped.

This wasn’t the worst start to the month - and I’m happy with the tools I used. But I might go with some more standard layout decisions going forward.

## Installation / Development

This project was created with Vue, and scaffolded using the Vue CLI.

After cloning:

```bash
# Install dependencies
npm install

# Start Development server
npm run serve

# Build
npm run build
```
