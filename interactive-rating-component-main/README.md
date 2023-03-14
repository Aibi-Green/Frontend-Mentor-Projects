# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Questions](#questions)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Desktop  
![Desktop 1st](./screenshots/desktop1.png)
![Desktop 2nd](./screenshots/desktop2.png)  

Mobile  
![Mobile 1st](./screenshots/mobile1.png)
![Mobile 2nd](./screenshots/mobile2.png)


### Links

- Solution URL: [solution](https://github.com/Aibi-Green/Frontend-Mentor-Projects/tree/main/interactive-rating-component-main)
- Live Site URL: [live site](https://interactive-rating-ivydev.netlify.app/)

## My process

### Built with

- HTML5
- CSS3
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Javascript  
- Adding an event listener to an element
```js
element.addEventListener("click", function);
```
- Adding or removing a class for styling an element (does not change hover and active states)
```js
child.classList.add("selected");
child.classList.remove("selected");
```
- Using event.target gets that event's element
```js
const rate = event.target;
const parentContainer = event.target.parentElement;
```

CSS  
- Use :root or html to incorporate CSS custom properties
- To select an input with only a type
```css
input[type='submit'] {
    display: block;
    margin-top: 1em;
}
```

### Questions
- What is event.preventDefault() for? Code works fine without it.

## Author

- GitHub - [Ivy Lariosa](https://github.com/Aibi-Green)
- Frontend Mentor - [@Aibi-Green](https://www.frontendmentor.io/profile/Aibi-Green)

## Acknowledgments

- [Kevin Powell's solution to Product Preview Card Component](https://github.com/kevin-powell) - CSS conventions.
- [alejandroaperez1994g's solution to Interactive Rating Component](https://github.com/alejandroaperez1994g/interactive-rating-component) - javascript functions
