# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

This is a simple Calculator app using HTML, CSS, and JS. Here, in this app the user can choose the preference of the theme out of the three themes and the selected theme will be stored and the same is loaded when the user reloads the page.

### The challenge

Users should be able to:

-   See the size of the elements adjust based on their device's screen size
-   Perform mathmatical operations like addition, subtraction, multiplication, and division
-   Adjust the color theme based on their preference
-   **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./images/theme1-mobile.jpg)
![](./images/theme2-mobile.jpg)
![](./images/theme3-mobile.jpg)
![](./images/theme1-desktop.jpg)
![](./images/theme2-desktop.jpg)
![](./images/theme3-desktop.jpg)

### Links

-   Solution URL: [Add solution URL here](https://github.com/gowthamss/js-calculator-app)
-   Live Site URL: [Add live site URL here](https://gowthamss.github.io/js-calculator-app/)

## My process

My process starts with structuring the HTML first and figure out what classes or ids to use. Then I write common CSS which will be the same in all resoutions. Then thinking about how to minimalize the use of CSS by using the layout principles like flexbox and grid which makes really easy to align things.

When coming to the JS part of this solution, I have to say I struggled a bit, but I have to say this a great exercise to build up the JS skills.

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   SASS

### What I learned

In this challenge in particular,

1. I learned how to load different styles sheet based on the user preference.
2. And how to effectively use localStorage the store the state.
3. Refreshed my knowledge on JS classes.
4. Learned to use SASS variables and mixins.

```js
// Storing the state of the theme locally
const prevserveUserPreferance = () => {
    const preference = localStorage.getItem("preference");
    getStylesheet.setAttribute("href", `./css/theme${preference}.css`);
    themeRadioBtns[preference - 1].checked = true;
};

window.addEventListener("load", prevserveUserPreferance);
```

### Useful resources

-   [Example resource 1](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp) - This helped me with customizing the theme slider. I really liked this pattern and will use it going forward.
-   [Example resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - This is an amazing article from Mozilla on CSS box-shadow in depth, which helped me finally understand what the first four parametrs really represent. I'd recommend it to anyone still learning this concept.
-   [Example resource 3](https://docs.emmet.io/abbreviations/syntax/) - This is a great resource, which is called emmet. It really makes it easy to get HTML structured fast.
-   [Example resource 4](https://dev.to/chrissiemhrk/how-to-setup-sass-in-your-project-2bo1) - This is a great resource on how to set SASS in your project. I highly recomment if you want to use SASS instead of CSS.
-   [Example resource 5](https://www.30secondsofcode.org/blog/s/css-centering) - This is another great resource on how to center elements in CSS. Really useful, if you are really stuck.
-   [Example resource 6](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - This is another great resource on understanding how browser localStorage works.

## Author

-   Website - [Add your name here](https://www.your-site.com)
-   Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gowthamss)
-   Twitter - [@yourusername](https://www.twitter.com/gowthamss15)
