//import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

import Spreadsheet from "x-data-spreadsheet";

const s = new Spreadsheet("#x-spreadsheet-demo", {
   showToolbar: true,
   showGrid: true,
/*
   view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  }
*/
   view: {
    height: () => document.querySelector('#x-spreadsheet-base').clientHeight,
    width:  () => document.querySelector('#x-spreadsheet-base').clientWidth,
  }

})
  .loadData({}) // load data
  .change(data => {
    // save data to db
          s.reRender();
  });


const target = document.querySelector('#x-spreadsheet-base');

function resizeWindow(){
    console.log('Resize');
          s.reRender();
}

target.addEventListener('resize', resizeWindow);

// data validation
s.validate()

