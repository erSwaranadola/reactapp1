import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signature from "./screen/Signature";
import './style.css'
import Login from "./screen/Login";
import Booking from "./screen/Booking";
import Search from "./screen/Search";
import Bhk from "./screen/Bhk";


const App=()=>
{
    return(
    <div>
       <BrowserRouter>
       <div style={{
        backgroundColor:'#000',zIndex:100,position:'fixed',justifyContent:'space-between',width:"100%",height:"auto",display:"flex",paddingTop:20}}>
                <div style={{display:"flex",position:'relative'}}>
                    <Link to={"/"}>
                <img src={require('./assets/icons8-building-100 (1).png')} style={{width:50,height:50,paddingTop:10}}/>
                    </Link>
            <div>
                <div style={{margin:0,padding:0}}>
                <span style={{marginLeft:15,margin:0,fontSize:120,padding:0,fontFamily:'onyx',color:"white",marginbottom:10}}>SIGNATURE</span>
                <span style={{marginLeft:15,margin:0,fontSize:80,padding:0,fontFamily:'Times new roman',color:"white",marginbottom:50}}>buildcon</span>
                    </div>
                <div style={{marginRight:10,position:'absolute',bottom:-20,left:0}}>
                    <ol style={{listStyleType:'none',display:'flex'}}>
                        <li style={{padding:10, color:'white'  ,marginLeft:40 ,marginTop:80}}>
                        <Link to ={"/Bhk"} style={{textDecoration:'none',color:'white'}}>
                           
                            2 bhk
                           </Link>
                             </li>
                        <li style={{padding:10 , color:'white'  ,marginLeft:30,marginTop:80}}>
                        <Link to ={"/Bhk"} style={{textDecoration:'none',color:'white'}}>
                             3 bhk
                             </Link>
                             </li>

                        <li style={{padding:10 , color:'white',marginLeft:20,marginTop:80}}> 
                            <Link to ={"/Bhk"} style={{textDecoration:'none',color:'white'}}>
                            4 bhk 
                            </Link>
                             </li>
                        
                        </ol> 
                </div>
                </div>
                </div>
                <div>
               {/*  <input placeholder='search..' style={{height:30,width:200}}/> */}
                    </div>

                <div style={{marginRight:10}}>
                    <ol style={{listStyleType:'none',display:'flex'}}>
                        <li style={{padding:10}}>
                            {/* Login */}
                            <Link to={"/Search"}>
                            <img onClick={()=>{}} src={require('./assets/icons8-search-100.png') } style={{width:30,height:30}}/>
                            </Link>
                            </li>
                        <li style={{padding:10}}> 
                           {/*  Help */}
                            <Link to={'login'}>
                            <img onClick={()=>{}} src={require('./assets/icons8-login-100.png') } style={{width:30,height:30}}/>
                            </Link>
                            
                            </li>
                        <li style={{padding:10}}> 
                            {/*  booking */}
                            <Link to={'booking'}>

<img onClick={()=>{}}src={require('./assets/icons8-room-100.png') } style={{width:30,height:30}}/>
</Link>
                            
                            
                          {/* <span className='menu'>  Book A Flat</span>  */}


                         </li>
                        </ol> 
                </div>
              
                </div>
                <div  style={{paddingTop:130,position:'relative'}}>
       <Routes>
            <Route path="/" Component={Signature}/>
            <Route path="/login" Component={Login}/>
            <Route path="/Booking" Component={Booking}/>
            <Route path="/Search" Component={Search}/>
            <Route path="/Bhk" Component={Bhk}/>

       </Routes>
       </div>
       </BrowserRouter>


    </div>)
}
export  default App;
