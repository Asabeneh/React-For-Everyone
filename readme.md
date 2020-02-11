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
    <p>Feb 10, 2020</p>
  </header>
)
```

As you can see the header element is a parent element for all the inner HTML elements and JSX has to be wrapped by an outer parent element. Without the header HTML element or other parent HTML element the above JSX is invalid.

### Exercises

1. What is JSX element
2. Write some JSX?

## Rendering JSX Element

Now, you knew JSX and JSX element. Lets render the JSX element on the browser, in order to do so we need the react and ReactDOM library. In addition to the React and ReactDOM we need babel to transpile the JSX to JavaScript code. The ReactDOM package has a method render. The render method takes two arguments:a JSX element or a component and the root document.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React For Everyone</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')

      // JSX element
      const jsxElement = <h1>I am a JSX element</h1>

      // we render the JSX element using the ReactDOM package
      // ReactDOM has the render method and the render method takes two argument
      ReactDOM.render(jsxElement, rootElement)
    </script>
  </body>
</html>
```

![Rendering JSX](images/rendering_jsx.png)

Let us render more content. To render more content the JSX element should have more content. For instance, we can create a header of a website and header may have a title subtitle, author or date etc.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React For Everyone</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')

      // JSX element
      const header = (
        <header>
          <h1>Getting Started React</h1>
          <h2>JavaScript Library</h2>
          <h3>Asabeneh Yetayeh</h3>
          <p>Feb 10, 2020</p>
        </header>
      )

      // we render the JSX element using the ReactDOM package
      // ReactDOM has the render method and the render method takes two argument
      ReactDOM.render(header, rootElement)
    </script>
  </body>
</html>
```

![Rendering more content](images/rendering_more_content.png)

We have created a JSX element for the header of our website. How about the main and the footer for the website? Similar to the header, let us create a JSX element for the main and the footer.

JSX element for the main part of the website.

```js
// JSX element
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li> JavaScript</li>
    </ul>
  </main>
)
```

JSX element for the footer part of the website.

```js
// JSX element
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)
```

Now, we have three JSX elements:the header, main and footer. The best way to render all the three JSX element is by wrapping in a parent JSX element. To include JSX element inside another JSX element we use the {} and call the name of the JSX inside the curly bracket.

```js
const header = (
  <header>
    <h1>Getting Started React</h1>
    <h2>JavaScript Library</h2>
    <h3>Asabeneh Yetayeh</h3>
    <p>Feb 10, 2020</p>
  </header>
)

const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li> JavaScript</li>
    </ul>
  </main>
)

const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
```

Now, let us put everything together and render it to the browser.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React For Everyone</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')

      // JSX element, header
      const header = (
        <header>
          <h1>Getting Started React</h1>
          <h2>JavaScript Library</h2>
          <h3>Asabeneh Yetayeh</h3>
          <p>Feb 10, 2020</p>
        </header>
      )

      // JSX element, main
      const main = (
        <main>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li> JavaScript</li>
          </ul>
        </main>
      )

      // JSX element, footer
      const footer = (
        <footer>
          <p>Copyright 2020</p>
        </footer>
      )

      // JSX element, app
      const app = (
        <div>
          {header}
          {main}
          {footer}
        </div>
      )

      // we render the JSX element using the ReactDOM package
      // ReactDOM has the render method and the render method takes two argument
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>
```

![Rendering Multiple JSX Elements](./images/rendering_multiple_js_elements.png)

## Style and className

So far, we did not say anything about style in react. Now, let us add style to our JSX elements. Inline style became very popular after the emergence of react. Let us add border to the header JSX element.

```js
const header = (
  <header style={{ border: '2px solid orange' }}>
    <h1>Getting Started React</h1>
    <h2>JavaScript Library</h2>
    <h3>Asabeneh Yetayeh</h3>
    <p>Feb 10, 2020</p>
  </header>
)

// or we can write it

const style = { border: '2px solid orange' }

const header = (
  <header style={style}>
    <h1>Getting Started React</h1>
    <h2>JavaScript Library</h2>
    <h3>Asabeneh Yetayeh</h3>
    <p>Feb 10, 2020</p>
  </header>
)
```

Let us apply some style to our JSX elements and see the result.

![Styling JSX Element](images/styling_jsx_element.png).

It is good practice to open the browser console while you are developing your application to know if everything goes well.

Let us keep styling all the JSX elements we have created:the header, main and footer. We can also use regular internal styling to style our application. It is very common in the react developer community people using only classes instead of id. In this material, I will use only class instead of id.

In JSX element we write className instead of class because class is a reserved word in JavaScript. Similar to className, htmlFor instead of for in label. See the example below.

```js
const title = <h1 className='title'>Getting Started React</h1>
const inputField = (
  <div>
    <label htmlFor='firstname'>First Name</label>
    <input type='text' id='firstname' placeholder='First Name' />
  </div>
)
```

The id used in the input element is not for styling purpose instead to refer the label to the input field.

If class is used instead of className you will see such kind of warning.

![Class Name warning](../ReactForEveryone/images/className_warning.png)

Now, you know how to use the inline style and how to use className and let us style all the JSX elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React For Everyone</title>
    <style>
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        line-height: 1.5;
        font-family: 'Lato';
      }

      .root {
        min-height: 100%;
        position: relative;
      }
    </style>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')

      // style
      const headerStyles = {
        backgroundColor: '#61DBFB',
        fontFamily: 'Helvetica Neue',
        padding: 25,
        lineHeight: 1.5
      }

      // JSX element, header
      const header = (
        <header style={headerStyles}>
          <div className='header-wrapper'>
            <h1>Getting Started React</h1>
            <h2>JavaScript Library</h2>
            <h3>Asabeneh Yetayeh</h3>
            <p>Feb 10, 2020</p>
          </div>
        </header>
      )

      // JSX element, main
      const mainStyles = {
        backgroundColor: '#F3F0F5'
      }
      const main = (
        <main style={mainStyles}>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li> JavaScript</li>
          </ul>
        </main>
      )

      const footerStyles = {
        backgroundColor: '#61DBFB'
      }
      // JSX element, footer
      const footer = (
        <footer style={footerStyles}>
          <p>Copyright 2020</p>
        </footer>
      )

      // JSX element, app
      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )

      // we render the JSX element using the ReactDOM package
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>
```

![Styling all jsx elements](images/styling_all_jsx_elements.png)

Instead of style object using regular styling method is more easier than the above. Now, let us use internal style or external style method to style all the JSX elements.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        href="https://fonts.googleapis.com/css?family=Aldrich|Lato:300,400,700|Montserrat:300,400,500|Nunito:300,400,600|Oswald|Raleway+Dots|Raleway:300,400|Roboto:300,400,500&display=swap"
        rel="stylesheet">


    <title>React For Everyone</title>
    <style>
        /* == General style === */
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0
        }


        html,
        body {
            height: 100%;
            line-height: 1.5;
            font-family: 'Montserrat';
            font-weight: 300;
            color: black;

        }

        .root {
            min-height: 100%;
            position: relative;
        }

        .header-wrapper,
        .main-wrapper,
        .footer-wrapper {
            width: 85%;
            margin: auto;

        }

        .header-wrapper,
        .main-wrapper {
            padding: 10px;
            margin: 2px auto;
        }

        h1 {
            font-size: 70px;
            font-weight: 300;
        }

        h2,
        h3 {
            font-weight: 300;
        }

        header {
            background-color: #61DBFB;
            padding: 25;
            padding: 10px;
        }

        main {
            padding: 10px;
            padding-bottom: 60px;
            /* Height of the footer */

        }

        ul {
            margin-left: 15px;
        }



        ul li {
            list-style: none;
        }

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            /* Height of the footer */
            background: #6cf;

        }

        .footer-wrapper {
            font-weight: 400;
            text-align: center;
            line-height: 60px;
        }
    </style>
</head>

<body>
    <div class="root"> </div>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        // To get the root element from the HTML document
        const rootElement = document.querySelector('.root')

    


    // JSX element, header
    const header = (
    <header>
  
        <div className = "header-wrapper">
             <h1>Getting Started React</h1>
             <h2>JavaScript Library</h2>
             <h3>Instructor: Asabeneh Yetayeh</h3>
             <p>Date: Feb 10, 2020</p>
        </div>
    </header>
    )

    // JSX element, main
    const main = (
    <main>
        <div className="main-wrapper">
             <p>Prerequisite to get started <strong><em>react.js</em></strong>:</p>
             <ul>
                 <li>HTML</li>
                 <li>CSS</li>
                 <li> JavaScript</li>
             </ul>
        </div>
    </main>
    )

     // JSX element, footer
    const footer = (
    <footer>
        <div className="footer-wrapper">
             <p>Copyright 2020</p>
        </div>
    </footer>
    )

     // JSX element, app
    const app = (
    <div className="app">
        {header}
        {main}
        {footer}
    </div>
    )

    // we render the JSX element using the ReactDOM package
    ReactDOM.render(app, rootElement)
    </script>
</body>
</html>
```

![Internal Style](../ReactForEveryone/images/internal_style.png)

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
