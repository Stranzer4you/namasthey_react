
 
//  so far , we created a tag using pure html,pure java script,from the below we are demonstrating how to create that tag using REACT library. 

const h1 = React.createElement("h2", { className: "background" }, "Namasthey from React");  //creating an h2 element 

const h3 = React.createElement("h3", { key: "h3" }, "heading 3");
const h4 = React.createElement("h4", { className: "background", key: "h4" }, "heading 4");
const container = React.createElement("div", {}, [h3, h4]) // we can create multiple elements by passing them in that array and render it using root.render() method.
const root = ReactDOM.createRoot(document.getElementById("root")); // telling the browser this is the root element,here I want to run the react code.
console.log(h4);
root.render(container);  // this will render the react code into the <div id="root"> element in the html.if there are any existing elements in that root div, those will be overriden by this element.
//   for example, in the above  <div id="root"> , h1 with "hello world"  is there
//   that will be overriden by with h2 with "Namasthey from react" element.

// note :   we might see, if there's any tag inside the root div,
//          that is appearing before the react is rendering the element into div root,
//          that is because ,react takes a bit time to get installed into our code.

//  we can directly write this code in script tag of index.html file also.
// but using another file for javascript and css makes the index.html more readable.


//  we can render any element in the render method
        //  h3,h4, list of react elements i.e, container, or simple string "Namasthey from React"