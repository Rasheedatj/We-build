# We Build Construction Company Landing page


This is a practice to improve my frontend skills expecially javascript

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
WE BUILD is a construction company that renders achitectural services such as building construction, house renovation, architectural design, maerial deisgn and interior designs. They require a website that convey the purpose of the brnd and services to consumers.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Have good experiemce while usung the website
- Easy navigation and control
-Smooth transitions, slideshows and light gallery
- Beautiful colors that accentuate one another and are peasing to the users
- To build a responsive and user friendly website that conveys the services of a construction company. The website has to be fully responsive and easy to maneuver with lots of transitions, animations and slideshows


### Screenshot
![](./images/Screenshot%202022-10-30%20201435.png)

### Links

- [Repo URL here](https://github.com/Rasheedatj/We-build)
- [Live site URL](https://rasheedatj.github.io/We-build/)

## My process
I started by wrirting the html and then proceeded to stlye the desktop layout before the mobile and tablet layout. I used the javascrip addEventListener function to add the ogin form, search bar and the contact info. Since all the headings had the same styling i used a single css style for them all. I built the all responsive versions simultaneously, I used sswiper js for all the slideshows and lightGallery library for the light gallery. 


### Built with

- Semantic HTML5 markup
 
  ![](./images/html.svg)
- CSS custom properties

    ![](./images/css-3%20logo.svg)
- Javascript

    ![](./images/javascript%20logo.svg)
- Mobile-first workflow

### What I learned

- Swiper using javascript
- Light gallery 
- Onclick event


```html
    <section class="about" id="about">
    <h1 class="heading">about us</h1>

    <div class="row">
    <div class="video">
        <video src="./images/about-vid.mp4" loop muted autoplay></video>
    </div>
    <div class="content">
        <h3>We will provide you with the best work which you dreamt for!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta doloremque, aliquid id commodi inventore eum deleniti error iusto suscipit.</p>
        <a href="#services" class="btn">read more</a>
    </div>
    </div>

    <div class="box-container">
        <div class="box">
            <h3>10&plus;</h3>
            <p>years of experience</p>
        </div>
        <div class="box">
            <h3>1500&plus;</h3>
            <p>projects completetd</p>
        </div>
    
        <div class="box">
            <h3>70&plus;</h3>
            <p>satisfied clients</p>
        </div>
        <div class="box">
            <h3>450&plus;</h3>
            <p>active workers</p>
        </div>
    </div>
</section>
```

```css
.search-form {
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  width: 40rem;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  padding: 0.7rem;
  display: none;
  align-items: center;
  gap: 1rem;
  animation: 200ms fadeIn linear;
}

```

```js
  let nav = document.querySelector('header nav');
let search = document.querySelector('.search-form');
let login = document.querySelector('.login-form');
let info = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('activeMenu');
    search.classList.remove('active')
    login.classList.remove('activeLogin')
    info.classList.remove('activeInfo')
}
```


## Author

- LinkedIn - [Rasheedat](https://www.linkedin.com/in/rashedat-jinadu-066078227)

- Twitter - [@Rashedatj](https://www.twitter.com/Rashedatj)