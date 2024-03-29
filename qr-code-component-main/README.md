# QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot
![solution](solution/qr-code-component-main-solution-ss.png)

### Links

- Solution URL: [github repository](https://github.com/Aibi-Green/Frontend-Mentor-Projects/tree/main/qr-code-component-main)
- Live Site URL: [live site](https://qr-code-component-main-ivydev.netlify.app/)

## My process

### Built with

- HTML 5
- CSS 3

### What I learned

- ~~Vertical align using transform and absolute position~~
```css
.qr-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- Use display flex for center aligning
```css
body {
  position: flex;
  justify-content: center;
  align-items: center;
}
```

- Image size adjusting to container size
```css
container {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

img {
  width: 100%;
}
```

### Continued development

- ~~Find a better way to adjust image size according to div width (padding does not reduce an image's size)~~

### Useful resources

- [HTML Element Alignment](https://blog.hubspot.com/website/center-div-css) - Aligning HTML elements
- [Box-Shadow Property](https://www.w3schools.com/cssref/css3_pr_box-shadow.php) - Box-Shadow Property

## Author

- GitHub - [Ivy Lariosa](https://github.com/Aibi-Green)
- Frontend Mentor - [@Aibi-Green](https://www.frontendmentor.io/profile/Aibi-Green)
