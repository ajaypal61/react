


// isme jo code likhe hua hai use index.js me paste kre

import { useEffect } from "react";


// react js ke commen code


// import React from "react";
// import ReactDOM  from "react-dom";

// ReactDOM.render(
//   <>
//   <h1>My Best Netflix Movies</h1>
//   </>,
//   document.getElementById("root")
// );



// video Number 10

// ab challenge number 1 krna hai iske liye challenge file ke code dekhe





// video number 11

// react js me javascript kese use kre

// iske liye javascript{} ka use kre



// import React from "react";
// import ReactDOM from "react-dom";


// const fname = "Ajay Rathore";

// ReactDOM.render(
//       <>
//       <h1>My Name Is Ajay</h1>
//       <h1>My Name Is {fname}</h1>
//         <h3>my lucky number {4+4}</h3>
//         <h3>my lucky number {Math.random()}</h3>
//       </>,
//       document.getElementById("root")
// );




// video Number 12
// template literals in js


// iske 3 type hai koi bhi use kr sakte hai

// import React from "react";
// import ReactDOM from "react-dom";


// const fname = "Ajay";
// const lname = "Rathore";


// ReactDOM.render(
//   <>
//     <h1>{`My Name Is ${fname} ${lname}`}</h1>
//     <h1>My Name Is {`${fname} ${lname}`}</h1>
//     <h1>My Name Is {fname} {lname}</h1>
//   </>,
//   document.getElementById("root")
// );



// video Number 13
// challenge Number 2
// date and time
// challenge vali file me dekhe





// video Number 14
// jsx attributes



// import React from "react";
// import ReactDOM from "react-dom";

// const img = "https://picsum.photos/201/300";
// const img1 = "https://picsum.photos/202/300";
// const img2 = "https://picsum.photos/203/300";
// const links = "https://vegamovies.party/";

// ReactDOM.render(
//   <>
//     <h1>My Name Is Ajay Rathore</h1>
//     <img src="https://picsum.photos/200/300" alt="Image" />
//     <img src={img} alt="Image" />
//     <img src={img1} alt="Image" />
//     <a href={links} target="_b">
//     <img src={img2} alt="Image" />
//     </a>

//   </>,
//   document.getElementById("root")
// );




// video Number 15
// css style


// iski css index1.css me hai


// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const img = "https://picsum.photos/201/300";
// const img1 = "https://picsum.photos/202/300";
// const img2 = "https://picsum.photos/203/300";
// const links = "https://vegamovies.party/";

// ReactDOM.render(
//   <>
//     <h1 className="heading">My Name Is Ajay Rathore</h1>
//     <img src="https://picsum.photos/200/300" alt="Image" />
//     <img src={img} alt="Image" />
//     <img src={img1} alt="Image" />
//     <a href={links} target="_b">
//     <img src={img2} alt="Image" />
//     </a>

//   </>,
//   document.getElementById("root")
// );




// video Number 17
// inline css style

// ye likhne ke liye style= {{(fir jo likhna hai) color:'jo dikhana hai'}}



// import React from "react";
// import ReactDOM from "react-dom";



// ReactDOM.render(
//   <>
//     <h1 style={{color:'red', paddingLeft:'100px'}}>My Name Is Ajay Rathore </h1>
//   </>,
//   document.getElementById("root")
// );


// internal css


// import React from "react";
// import ReactDOM from "react-dom";

// const heading ={
//   color: 'green',
//   fontSide:'40px',
// };


// ReactDOM.render(
//   <>
//     <h1 style={heading}>My Name Is Ajay Rathore </h1>
//   </>,
//   document.getElementById("root")
// );





// video Number 17
// challenge 3
// isko challenge file me dekhe





// video Number 18
// react js components

// iske code components folder me dekhe
// heading Components folder me hai
// app1.js me dekhe


// isko index.js me paste kre or app1.js me jo code hai usko App.js me paste kre

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//       <App/>
//   </>,
//   document.getElementById("root")
// );


// video number 21
// import and export


// * jb sare ek sath use krne ho to
// agr hame components ek ek use krne ho to {isme name likhe }
// app1.js me dekhe


// import React from "react";
// import ReactDOM from "react-dom";
// import * as ques from "./App";

// ReactDOM.render(
//   <>
//       <ol>
//         <li>{ques.default}</li>
//         <li>{ques.favprog}</li>
//         <li>{ques.myName()}</li>
//       </ol>
//   </>,
//   document.getElementById("root")
// );





// video number 22
// simple calculator

// iske code components ke calc.jsx file me hai
// app1.js me iske code hai


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App/>
//   </>,
//   document.getElementById("root")
// );




// video number 23
// props in react js

// iske code Components ki card file me hai



// in code ko index.js me peast kre

// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./components/Cards";

// ReactDOM.render(
//   <>
//     <h1>List of top 5 Netflix series in 2022</h1>
//     <Card />
//   </>,
//   document.getElementById("root")
// );





// video number 24
// array in react js


// iske code Component ki sdata.jsx file me



// in code ko indexedDB.js me peast kre

// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./components/Cards";
// import Sdata from "./components/Sdata";

// ReactDOM.render(
//   <>
//     <h1>List of top 5 Netflix series in 2022</h1>
//     <Card
//     sname= "aja"
//     />
//   </>,
//   document.getElementById("root")
// );




// video number 25

// array and Map mathd

//  iske liye Component ki Card.jsx or sdata.jsx file dekhe




// in code ko index.js me peast kre

// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./components/Cards";
// import Sdata from "./components/Sdata";

// ReactDOM.render(
//   <>
//     <h1>List of top 5 Netflix series in 2022</h1>
//     {Sdata.map((val) =>{
//       return(
//         <Card
//         imgsrc= {val.imgsrc}
//         title = {val.title}
//         sname= {val.sname}
//         link= {val.link}
//         />
//       )
//     })}

//   </>,
//   document.getElementById("root")
// );





// video number 26
// developer tools


// "key" naam se errey hai


// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./components/Cards";
// import Sdata from "./components/Sdata";

// ReactDOM.render(
//   <>
//     <h1>List of top 5 Netflix series in 2022</h1>
//     {Sdata.map((val) =>{
//       return(
//         <Card
//         key = {val.id}
//         imgsrc= {val.imgsrc}
//         title = {val.title}
//         sname= {val.sname}
//         link= {val.link}
//         />
//       )
//     })}

//   </>,
//   document.getElementById("root")
// );



// video number 27
// if else in react js

// iske code app1.js and index1.js and Component ki Amozon.jsx, Netflix.jsx me sare code hai


// ye code indexedDB.js me paste kre

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//     <h1>List of top 5 Netflix series in 2022</h1>
//     <App />
//   </>,
//   document.getElementById("root")
// );




// video number 28
// ternary operator in react js




// iske code app1.js and index1.js and Component ki Amozon.jsx, Netflix.jsx me sare code hai


// ye code indexedDB.js me paste kre

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//     <h1>List of top 5 Netflix series in 2022</h1>
//     <App />
//   </>,
//   document.getElementById("root")
// );




// video number 29
// video number 30
// ye dono video chhode diye hai





// video number 30
// hooks in react js
// iski file App1.js me hai



// in code ko index.js me paste kre

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// );




// video number 31
// react hooks challenge 6

// iski file app1.js me hai


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// );






// video number 32
// digital clock in react js

// iske code app1.js me hai

// in code ko index.js me paste kre

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   < >
//     <App />
//   </>,
//   document.getElementById("root")
// );






// video number 33
// event in react js

// ye video chhod diya hai



// video number 34
// form in react js

// iske code app1.js me hai


// in code ko index.js me paste kre

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   < >
//     <App />
//   </>,
//   document.getElementById("root")
// );



// video number 35
// log in form in react js


// iske code app1.js me hai


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   < >
//     <App />
//   </>,
//   document.getElementById("root")
// );





// video number 36 to 39
// log in form in react js
// iske code app1.js me hai



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// )











// video Number 40 ###############################
// todo list in react js

// iske code components ki TodoList.jsx me hai and app1.js me hai


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// )




// video number 41
// challenge 8
// incrementing and decrementing

// iske code app1.js me hai


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// )



// ##########################################################################


// hooks in react js




// 1. useState hooks

// iska ek alg se video hai complect react hooks name se
// iske code app1.js and hooks me hai

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// )


// video 36 dekhe






// 2. useeffect hook in react js
// useEffect 3 type ke hote hai


// 1. no dependency passed
// useEffect(() => {

// });


// 2.an empty array

// useEffect(() => {

// }, []);

// 3.props and state vslues

// useEffect(() => {

// }, [props, state]);



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// )






// 3. useContext hooks








// 4. useReducer hooks
// iske code app1.js me hai

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// )



// 5. useRef hooks
// iske code app1.js me hai



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// )







// ################################################################################################################/

// material ui ke liye ek video dekha hai

// iske liye muivs folder dekhe


// video Number 48
// accordion in rreact js 





















