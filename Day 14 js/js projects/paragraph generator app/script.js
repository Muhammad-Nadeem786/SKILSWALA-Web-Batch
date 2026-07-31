let text = [
   `'HTML is the foundation of web development, used to structure content on the internet. It provides elements like headings, paragraphs, images, and links, defining the layout and organization of a webpage.
   
   `,
  
   `CSS is a styling language that enhances the visual presentation of web pages. It allows developers to apply colors, fonts, layouts, and animations to HTML elements. Styles can be defined using inline, internal, or external stylesheets, with the latter being the most efficient for maintaining consistency. CSS properties like color, margin, and display control the appearance of elements. CSS3 introduced advanced features like Flexbox, Grid, transitions, and animations, making modern web design more dynamic and user-friendly.
   
   `,
   
   `JavaScript is a powerful scripting language that adds interactivity to web pages. It enables dynamic updates, form validation, and interactive elements like sliders and dropdown menus. JavaScript runs on the client side, meaning it executes in the user's browser, reducing the need for server requests. With ES6 (ECMAScript 2015), JavaScript introduced features like arrow functions, template literals, and modules, making coding more efficient. JavaScript frameworks like React, Vue, and Angular further enhance web development by providing reusable components and efficient state management.
   
   `,
   
   `Forms in HTML allow users to input data through text fields, checkboxes, radio buttons, and dropdown menus. The form element wraps all input fields, and the action attribute specifies where the form data should be sent. Input elements such as input type="text", textarea, and select provide various ways to gather user input. HTML5 introduced new input types like email, date, and range, improving validation and usability. Combined with JavaScript, forms can validate user input dynamically before submission.
   
   `,
   
   `Flexbox and CSS Grid are two powerful layout models in CSS. Flexbox (display: flex) is ideal for one-dimensional layouts, aligning items horizontally or vertically with properties like justify-content and align-items. CSS Grid (display: grid) is perfect for two-dimensional layouts, allowing precise control over rows and columns using properties like grid-template-columns and grid-gap. Both methods simplify responsive design, ensuring elements adjust smoothly across different screen sizes.
   
   `,
   
   `The Document Object Model (DOM) allows JavaScript to interact with and modify HTML elements. By selecting elements using methods like document.getElementById or document.querySelector, developers can change content, styles, and attributes dynamically. Events like click, mouseover, and keydown enable interactive behavior. With JavaScript, developers can create dynamic experiences, such as expanding menus, validating forms, and updating content without reloading the page.
   
   `,

   `Responsive web design ensures that websites adapt to different screen sizes and devices. CSS media queries '(@media)' allow developers to apply specific styles based on screen width, height, resolution, or device type. Breakpoints, such as @media (max-width: 768px), help tailor layouts for mobile, tablet, and desktop views. Features like relative units (%, em, rem) and flexible layouts (Flexbox and Grid) further enhance responsiveness, providing a seamless experience across devices.
   
   `,
   
   `JavaScript supports asynchronous programming through callbacks, promises, and async/await. Asynchronous operations prevent blocking the execution of other tasks, enhancing performance. The fetch API, for instance, retrieves data from a server without freezing the webpage. Promises (.then()) handle success and failure cases, while async/await simplifies asynchronous code readability. These concepts are crucial for web applications that rely on real-time data, such as chat apps, stock market updates, and weather dashboards. 
   
   `,
   
   `HTML, CSS, and JavaScript work together to create interactive and visually appealing websites. HTML provides structure, CSS styles the elements, and JavaScript adds interactivity. For example, a webpage can have an HTML button (button), styled with CSS (background-color: blue), and JavaScript can make it interactive (button.addEventListener('click', function() {...})). Modern frameworks like React, Vue, and Angular combine these technologies to build dynamic single-page applications (SPAs) with smooth user experiences.
   
   `
];

let generateBtn = document.getElementById('generate_btn')
let inputValue = document.getElementById('input_val')
let paragraphs = document.getElementById('para_txt')


function shuffle(text) {
    let currentIndex = text.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [text[currentIndex], text[randomIndex]] = [
        text[randomIndex], text[currentIndex]];
    }
        return text;
  };
  
generateBtn.addEventListener('click',function(){
    if(isNaN(inputValue.value) || inputValue.value < 0 || inputValue.value > 9){
      let  randomIndex = Math.floor(Math.random() * text.length)
       paragraphs.innerHTML = `<p>${text[randomIndex]}</p>`
    }

    else{
        let localText = shuffle(text)
        let selectedIndex = localText.slice(0,inputValue.value)
        let paras = selectedIndex.map((d) =>{
            return ` <p> ${d} </p> <br>`;
        });

        paragraphs.innerHTML = paras.join(" ");
        
    }

})