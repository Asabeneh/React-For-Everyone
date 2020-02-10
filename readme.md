# React For Everyone

![React Logo](images/react_logo.gif)

- [React For Everyone](#react-for-everyone)
  - [Introduction](#introduction)
  - [1. What is React ?](#1-what-is-react)
    - [Exercises](#exercises)
  - [2. Why React ?](#2-why-react)
    - [Exercises](#exercises-1)
  - [3. JSX](#3-jsx)
    - [Exercises](#exercises-2)
  - [JSX Element](#jsx-element)
    - [Exercises](#exercises-3)
  - [Rendering JSX Element](#rendering-jsx-element)
  - [Style and className](#style-and-classname)
  - [Injecting data to JSX Element](#injecting-data-to-jsx-element)
    - [Injecting a string to JSX Element](#injecting-a-string-to-jsx-element)
    - [Injecting a number to JSX Element](#injecting-a-number-to-jsx-element)
    - [Injecting an array to JSX Element](#injecting-an-array-to-jsx-element)
    - [Injecting an object to JSX Element](#injecting-an-object-to-jsx-element)
  - [Component](#component)
  - [Rendering component](#rendering-component)
  - [Props](#props)
    - [propTypes](#proptypes)
    - [defaultProps](#defaultprops)
    - [Rendering lists](#rendering-lists)
  - [Events](#events)
  - [State](#state)
  - [Class Component and Functional Component](#class-component-and-functional-component)
  - [Container and Presentation component](#container-and-presentation-component)
  - [React Form](#react-form)
  - [Controlled and uncontrolled inputs](#controlled-and-uncontrolled-inputs)
  - [Conditional Rendering](#conditional-rendering)
    - [Using if condition](#using-if-condition)
    - [Using ternary operators](#using-ternary-operators)
    - [Using and operator](#using-and-operator)
  - [Component Life cycles](#component-life-cycles)
  - [React Router](#react-router)
  - [React Hooks](#react-hooks)

## Introduction

Prerequisite to get started with React. You should have a good understanding of the following technologies:
Prerequisite technologies:

- HTML
- CSS
- JavaScript

If you have the above skills you will enjoy doing react.

## 1. What is React ?

React is a JavaScript library for building user interfaces. It was initially released on May 29, 2013. The current version is 16.12.0 and somehow it is stable. React was created by Facebook. It is a tool for building UI components.

To summarize:

- React was released in May 2013
- React was created by Facebook
- React is a JavaScript library for building user interfaces
- React is used to build single page applications
- React allows us to create reusable UI components
- React latest release is 16.12.0

### Exercises

1. What is React?

## 2. Why React ?

React is one of the most popular JavaScript library. Many developers and companies have been using it for the last couple of years. Its popularity has been growing fast and it has a huge community.

Why we choose to use react ? We use react because of the following reasons:

- fast
- modular
- scalable
- flexible
- big community and popular
- open source

### Exercises

1. Why chose to use react? 

## 3. JSX

JSX stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code together in React. To create HTML elements in React we do not use the _createElement()_ instead we just use JSX elements.Therefore, JSX makes it easier to write and add HTML in React. JSX will be converted to JavaScript on browser using transpiler(Babel). See the JSX code below.

```js
const jsxElement = <h1>I am a JSX element</h1>
```

The above strange looking code seems a JavaScrip but not and it seems an HTML but not completely an HTML element. It is a mix of JavaScript and and HTML element. JSX can allow us to use HTML in JavaScript

### Exercises

1. What is JSX?

## JSX Element

As you have seen, JSX has a JavaScript and HTML like syntax. JSX element could be just a single HTML element or many HTML elements wrapped in a parent HTML element.

This JSX element has only on HTML element which is h2.

```js
const jsxElement = <h1>I am a JSX element</h1>
```

Let's make more JSX elements by declaring a new variable name title and content inside h1.

```js
const title = <h1>Getting Started React</h1>
```

Let us add a subtitle to the above JSX element by adding additional HTML element. Every HTML element should be wrapped by an outer HTML element to create a valid JSX element. The name title variable also should be changed to header because our JSX element is containing almost all the header information.

```js
const header = (
  <header>
    <h1>Getting Started React</h1>
    <h2>JavaScript Library</h2>
  </header>
)
```

Let us keep adding more elements. Additional HTML element to display the author name and year.

```js
const header = (
  <header>
    <h1>Getting Started React</h1>
    <h2>JavaScript Library</h2>
    <h3>Asabeneh Yetayeh</h3>
    <h4>Feb 10, 2020</h4>
  </header>
)
```

As you can see the header element is a parent element for all the inner HTML elements and JSX has to be wrapped by an outer parent element. Without the header HTML element or other parent HTML element the above JSX is invalid.

### Exercises

1. What is JSX 
2. Write some JSX?

## Rendering JSX Element

## Style and className

## Injecting data to JSX Element

### Injecting a string to JSX Element

### Injecting a number to JSX Element

### Injecting an array to JSX Element

### Injecting an object to JSX Element

## Component

## Rendering component

## Props

### propTypes

### defaultProps

### Rendering lists

## Events

## State

## Class Component and Functional Component

## Container and Presentation component

## React Form

## Controlled and uncontrolled inputs

## Conditional Rendering

### Using if condition

### Using ternary operators

### Using and operator

## Component Life cycles

## React Router

## React Hooks
