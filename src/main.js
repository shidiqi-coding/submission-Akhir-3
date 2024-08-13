//  import noteComponent from "../src/component/list-item.js";
// import "../src/script/component-web/my-footer.js";
// import "../src/script/component-web/input-form.js"
// import "../src/script/component-web/form-title.js";
// import "../src/script/component-web/logo-bar.js";


import "./script/component-web/index.js";

import "./script/view/home.js";

import "./styles/responsive.css";
import "./styles/loader.css";

import "./styles/style.css";

// document.addEventListener('DOMContentLoaded', () =>{
// });
//import 'regenerator-runtime';

// document.addEventListener('DOMContentLoaded', () =>{
//   customElements.define("note-list",noteComponent);

// });

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  


  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
      document.body.removeChild("loader");
  })
})
//apps();


//document.querySelector('.btn').className = 'fa fa-star';

//document.addEventListener('DOMContentLoaded', () =>{
//  customElements.define("my-footer",myFooter);

//});



