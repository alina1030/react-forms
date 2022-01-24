// // import logo from './logo.svg';
// import React from "react";
// import { BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
// import Next from "./components/Next";
// import About from "./components/About";

// // function PageTwo()
// // { 
// //   return (
// //     <form >
// //       hello
// //     </form>
// //   )
// // }

// function App() {
//   return <>
//     <Router>
//     <div className="App" style={{backgroundColor:"white"}}>
//       <form>
//         <p style={{color:"blueviolet",paddingTop:"20px",marginLeft:'150px',fontSize:"large",fontFamily:"arial"}}>PERSONAL</p>
//         <br></br>
//         <br></br>
//         <input type="text" placeholder="First name" style={{width:'400px',marginLeft:"100px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="text" placeholder="Last name" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="text" placeholder="Email" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="text" placeholder="Phone number" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="text" placeholder="IFSC code" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="number" placeholder="account number" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="number" placeholder="Country Id" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="text" placeholder="city" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="number" placeholder="postcode" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>
//         <input type="text" placeholder="address" style={{width:'400px',marginLeft:'100px',marginTop:"20px",height:'30px',borderRight:"none",borderLeft:"none",borderTop:"none"}}></input>
//         <br></br>
//         <br></br>

//         <div id="nav" style={{color:"white",height:"30px",backgroundColor:"blueviolet",paddingTop:"5px",paddingLeft:"15px",paddingRight:"5px",width:"50px",margin:"10px"}}>
//         <Link to="/Next" style={{textDecoration:"none",color:"white"}} >Next</Link>
//         <br></br>
//         <br></br>
//         {/* <Link to="/about" >About Us</Link> */}
//         </div>

//       <Switch>
//         <Route exact path='/Next' component={Next}></Route>
        
//         {/* <Route exact path='/about' component={ About } ></Route> */}
//       </Switch>  
      
      
      
//       </form>
//     </div>
//     </Router>
//   </>
// }

// export default App;


/////////////////////////////////////////////////////////////////////////////////

import FormComponent from "./Components/steps/formComponent";
import './index.css';
import './App.css';

function App()
{
  return (
    <FormComponent/>
  );
}

export default App;