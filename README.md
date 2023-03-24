# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/anwari-fikri/news-homepage-react]
- Live Site URL: [https://anwari-fikri.github.io/news-homepage-react/]

## My process

### Built with

- React
- Tailwind
- Flexbox
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

text hover: I was trying to figure out why my text does not hover on hovering a div

This does not work: the h3 stays white

<div className="cursor-pointer flex flex-col items-left justify-center gap-2 py-6  hover:text-soft-orange">
  <h3 className="font-bold text-off-white text-lg">{title}</h3>
  <p className="font-extralight text-dark-grayish-blue text-sm">
    {content}
  </p>
</div>

This works: the h3 now change to orange on hover

<div className="cursor-pointer flex flex-col items-left justify-center gap-2 py-6 text-off-white hover:text-soft-orange">
  <h3 className="font-bold text-lg">{title}</h3>
  <p className="font-extralight text-dark-grayish-blue text-sm">
    {content}
  </p>
</div>

## Author

- Website - [Anwari Fikri](https://www.anwarifikri.com/)
- Frontend Mentor - [@anwari-fikri](https://www.frontendmentor.io/profile/anwari-fikri)
