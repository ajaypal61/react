


// isme jo bhi code hai vo app.js me paste kre




// video number 18
// Component



// components folder me heading.jsx me iska kam kiya hua hai



// import React from "react";
// import Heading from "./components/Heading";

// const App = () =>{
//   return(
//     <>
//       <Heading/>
//     </>
//   );
// }

// export default App;




// components folder me list.jsx me iska kam kiya gya hai


// import React from "react";
// import List from "./components/list";

// const App = () =>{
//   return(
//     <>
//       <List/>
//     </>
//   );
// }

// export default App;






// video number 21
// import and export




// const youtuber = "AjAy";

// const favprog = "React Js";


// const myName = () =>{
//   let name = "vikram";
//   return name;
// }

// export default youtuber;

// export {favprog , myName};





// video number 22
// simple calculator

// iske code calc.js me hai





// import React from "react";
// import {add,sub,mult,div} from "./components/Calc";


// const App = () =>{
//   return(
//     <>
//       <ul>
//         <li>{add(40,4)}</li>
//         <li>{sub(40,4)}</li>
//         <li>{mult(40,4)}</li>
//         <li>{div(40,3)}</li>
//       </ul>
//     </>
//   );
// }


// export default App;




// video Number 27
// if else react js



// import React from "react";
// import Netflix from "./components/Netflix"
// import Amozon from "./components/Amazon";

// const favser= "netflix";

// const Favs = () =>{
//   if(favser === "netflix"){
//     return(
//       <Netflix/>
//     )
//   }else{
//     return(
//       <Amozon/>
//     )
//   }
// }


// const App = () =>{
//   return (
//     <>
//     <Favs/>
//     </>
//   )
// };

// export default App;





// video number 28
// ternary operator in react js


// import React from "react";
// import Netflix from "./components/Netflix"
// import Amozon from "./components/Amazon";

// const favser= "neflix";


// const App = () =>{
//   return (
//     <>
//     {favser=== "netflix" ? <Netflix/> : <Amozon/>}
//     </>
//   );
// };

// export default App;





// video number 30
// // hooks in react js


// import React, { useState } from "react";

// // {iske andar us hook ko likha jata hai jis ka use kiya gya hai }

// const App = () =>{

//   const state = useState();

//   const [count, setCount] = useState(0);

//   const IncNum = () =>{
//     setCount(count+1);
//   }
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={IncNum}>Click Me</button>
//     </>
//   );
// };

// export default App;



// video number 31
// // react hooks challenge 6

// import React, { useState } from "react";


// const App = () =>{

// const time = new Date().toLocaleTimeString();
// const [ctime, setCtime] = useState(time);

// const UpTime = () =>{
//   let newTime = new Date().toLocaleTimeString();
//   setCtime(newTime);
// }
//   return(
//     <>
//      <h2>{time}</h2>
//      <button onClick={UpTime}>Get Time</button>
//     </>
//   )
// };


// export default App;





// video number 32
// digital clock in react js


// import React, { useState } from "react";


// const App = () => {

//     let time = new Date().toLocaleTimeString();

//     const [ctime, setCtime] = useState(time);

//     const UpTime = () => {
//         let time = new Date().toLocaleTimeString();
//         setCtime(time);
//     };

//     setInterval(UpTime, 1000);

//     return (
//         <>
//             <h1>{ctime}</h1>
//         </>
//     )
// };


// export default App;






// video number 34
// // form in react js

// import React, { useState } from "react";


// const App = () => {

//     const [name, setName] = useState("");

//     const [fullName, setFullName] = useState("");
//     const inEvent = (event) => {
//         // console.log(event.target.value);
//         setName(event.target.value);
//     }

//     const onSub = () => {
//         setFullName(name);
//     }
//     return (
//         <>
//             <div>
//                 <h1>Hello {fullName}</h1>
//                 <input type="text" placeholder="Enter Your Name" value={name} onChange={inEvent}></input>
//                 <button onClick={onSub}>Click Me</button>
//             </div>
//         </>
//     )
// };

// export default App;



// video number 35
// // log in form in react js



// import React, { useState } from "react";


// const App = () => {

//     const [name, setName] = useState("");

//     const [fullName, setFullName] = useState("");

//     const [lastName, setLastName] = useState("");

//     const [lName, setLName] = useState("");

//     const sub = (event) => {
//         setFullName(name);
//         setLName(lastName);
//         event.preventDefault();
//     }

//     const inputEvent = (event) => {
//         setName(event.target.value);
//     }

//     const inputEventTow = (event) => {
//         setLastName(event.target.value);
//     }

//     return (
//         <>
//             <form onSubmit={sub}>
//                 <div>
//                     <h2>Hello {fullName} {lName}</h2>
//                     <input type="text" value={name} onChange={inputEvent}></input>
//                     <input type="text" value={lastName} onChange={inputEventTow}></input>
//                     <button>Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default App;





// video number 36 to 39
// log in form in react js





// import React, { useState } from "react";


// const App = () => {

//     const [formData, setFormData] = useState({
//         text: "",
//         email: "",
//         password: "",
//     })

//     const handleInput = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;

//         setFormData((prev) => {
//             return { ...prev, [name]: value };

//         });
//     };

//     const sub = (event) => {
//         event.preventDefault();
//     }

//     return (
//         <>
//             <form onSubmit={sub}>
//                 <div>
//                     <h2>Hello </h2>
//                     <input type="text"
//                         id="text"
//                         name="text"
//                         value={formData.text}
//                         onChange={handleInput}
//                     />
//                     <input type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInput}
//                     />
//                     <input type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInput}
//                     />

//                     <button >Submit</button>

//                     <p>{formData.text} {formData.email} {formData.password}</p>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default App;



// ###########################
// video number 40
// todo list in react js

// iske code components ki TodoList.jsx me hai and app1.js me hai


// import React, { useState } from "react";
// import TodoList from "./components/TodoList";

// const App = () => {

//     const [todoList, setTodoList] = useState('');
//     const [items, setItems] = useState([]);

//     const itemEvent = (event) => {
//         setTodoList(event.target.value);
//     }
//     const listOfItem = () => {
//         setItems((oldItem) => {
//             return [...oldItem, todoList];
//         });
//         setTodoList("");
//     };

//     const deleteItems = (id) => {
//         console.log("dele");

//         setItems((oldItem) => {
//             return oldItem.filter((arrElem, index) => {
//                 return index !== id;
//             })
//         })

//     }

//     return (
//         <>
//             <div>
//                 <div>
//                     <h1>Todi List</h1>
//                     <input type="text"
//                         placeholder="Add A Items"
//                         value={todoList}
//                         onChange={itemEvent} />
//                     <button onClick={listOfItem}>+</button>

//                     <ol>
//                         {items.map((itemVal, index) => {
//                             return <>
//                                 <TodoList
//                                     key={index}
//                                     id={index}
//                                     onSelect={deleteItems}
//                                     text={itemVal} />
//                             </>
//                         })}
//                     </ol>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default App;







// video number 41
// challenge 8
// incrementing and decrementing



// import React, { useState } from "react";

// const App = () => {

//     const [num, setNum] = useState(0);

//     const incNum = () => {
//         setNum(num + 1);
//     }
//     const decNum = () => {
//         if (num > 0) {
//             setNum(num - 1);
//         } else {
//             alert("sorry")
//         }
//     }

//     return (
//         <>
//             <div>
//                 <h1>{num}</h1>
//                 <div>
//                     <button onClick={incNum}>IncNum</button>
//                     <button onClick={decNum}>decNum</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default App;



// #####################################################################################





// hooks in react js
// iska ek alg se video hai complect react hooks name se


// 1. useState hook

// iske code app1.js and hooks me hai

// iska ek alg se video hai complect react hooks name se
// iske code hooks me hai


// import React from "react";
// import UseState from "./hooks/usestate";


// const App = () => {
//     return (
//         <>
//             <UseState />
//         </>
//     )
// }

// export default App;




// 2. useeffect hook in react js
// iske code hooks me dekhe

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
// import UseEffect from "./hooks/UseEffect";

// const App = () => {
//     return (
//         <>
//             <UseEffect />
//         </>
//     )
// }

// export default App;



// 3. useContext hook
// iske code hooks me dekhe






// 4. useReducer hooks
// iske code hooks me dekhe


// import React from "react";
// import UseReduce from "./hooks/UseReduce";

// const App = () => {
//     return (
//         <>
//             <UseReduce />
//         </>
//     )
// }

// export default App;





// 5. useRef hooks
// iske code hooks me dekhe


//import React from "react";
// import UseRef from "./hooks/UseRef";

// const App = () => {
//     return (
//         <>
//             <UseRef />
//         </>
//     )
// }

// export default App;



