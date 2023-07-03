
// 1. no dependency passed
// useEffect(() => {

// });


// import React, { useEffect, useState } from "react";

// const UseEffect = () => {

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

//     useEffect(() => {
//         document.title = num;
//     })

//     return (
//         <>
//             <div>
//                 <h1>{num}</h1>
//                 <button onClick={incNum}>incNum</button>
//                 <button onClick={decNum}>decNum</button>
//             </div>
//         </>
//     )
// }

// export default UseEffect;




// 2.an empty array

// useEffect(() => {

// }, []);


// import React, { useEffect, useState } from "react";

// const UseEffect = () => {

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

//     useEffect(() => {
//         document.title = num;
//     }, []);

//     return (
//         <>
//             <div>
//                 <h1>{num}</h1>
//                 <button onClick={incNum}>incNum</button>
//                 <button onClick={decNum}>decNum</button>
//             </div>
//         </>
//     )
// }

// export default UseEffect;



// 3.props and state vslues

// useEffect(() => {

// }, [props, state]);


// import React, { useEffect, useState } from "react";

// const UseEffect = () => {

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

//     useEffect(() => {
//         document.title = num;
//     }, [num]);

//     return (
//         <>
//             <div>
//                 <h1>{num}</h1>
//                 <button onClick={incNum}>incNum</button>
//                 <button onClick={decNum}>decNum</button>
//             </div>
//         </>
//     )
// }

// export default UseEffect;


