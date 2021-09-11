// import React,{useState, useEffect} from 'react'
// import {initializeApp} from '../../Firebase/Firebase'
// //import Sabana from '../Pages/Sabana'

// function GetItem() {

//     const [products,setProducts] = useState([])
//     const [load,setLoad]=useState(false)

//     useEffect(() => {
//         setLoad(true);
//         const db = initializeApp();
//         const itemCollection = db.collection("Items");
//         itemCollection
//           .get()
//           .then((querySnapShot) => {
//             if (querySnapShot.size === 0) {
//               console.log("No results");
//             }
//             setProducts(querySnapShot.docs.map((doc) => doc.data()));
//           })
//           .catch((error) => {
//             console.log("Error searching items", error);
//           })
//           .finally(() => {
//             setLoad(false);
//           });
//       }, []);

//     console.log("products")
//     return (
//         <div>
//             {
//                 products.map((products)=>{
//                     return(
//                        // <Sabana id={products.id} name={products.productname} price={products.price} img={products.firstimage}/>
//                     <h1>{products.productname}</h1>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// //export default GetItem
