// import thr react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// var getButtonText = () => {
//    return 'Click on me!';
// }

// create a react component
const App = () => {
   var buttonText = { yo: 'foo' };
   var labelText = 'Enter name';

   return (
      <div>
         <label className="label" htmlFor="name">
            {labelText}
         </label>
         <input id="name" type="text" />
         <button style={{
            background: 'blue',
            color: 'white',
            border: '1px solid black',
         }}>
            {buttonText.yo}
         </button>
      </div>
   );
}

   ;

// show component on screen
ReactDOM.render(
   <App />, document.querySelector('#root')
);

//looks like HTML, its JSX
// makes use of deoendency called babel