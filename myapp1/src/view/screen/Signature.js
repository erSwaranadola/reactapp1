
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signature=()=>
    {
    
        const[search,setSearch]=useState(false)
        const[login,setLogin]=useState(false)
        const[booking,setBooking]=useState(false)
    const image =[
        {"id":1,"name":"rooftop",img:require('../assets/5.png')},
        {"id":2,"name":"bedroom",img:require('../assets/6.png')},
        {"id":2,"name":"bedroom",img:require('../assets/3.png')},
        {"id":3,"name":"rooftop",img:require('../assets/4.png')},
        {"id":3,"name":"r1",img:require('../assets/7.png')},
        {"id":3,"name":"r1",img:require('../assets/8.png')},
        {"id":3,"name":"r2",img:require('../assets/9.png')},
        {"id":3,"name":"r2",img:require('../assets/10.png')},
        {"id":3,"name":"r3",img:require('../assets/1.png')},
        {"id":3,"name":"r3",img:require('../assets/2.png')},
    ]
    
        return(
            <div style={{position:'relative',backgroundColor:''}}>
               
                <div>
                  
                    <h1></h1>
                <div style={{display:"flex"}}>
                    
                    {
                        image.map((item,index)=>{
                            if(item.name=="bedroom")
                            return <div style={{width:"50%",height:500,padding:20}}>
                            
                            <img src={item.img} style={{width:'100%',height:'100%'}}/>
                            </div> 
    })
                    }
                </div>
                <div style={{display:'flex'}}>
                    
                    {
                        image.map((item,index)=>{
                            if(item.name=="rooftop")
                                return <div style={{width:"50%",height:500,padding:20}}>
                            
                            <img src={item.img} style={{width:'100%',height:'100%'}}/>
                            </div> 
    })
                    }
                </div>
                <div style={{display:'flex'}}>
                    
                    {
                        image.map((item,index)=>{
                            if(item.name=="r1")
                                return <div style={{width:"50%",height:500,padding:20}}>
                            
                            <img src={item.img} style={{width:'100%',height:'100%'}}/>
                            </div> 
    })
                    }
                </div>
                <div style={{display:'flex'}}>
                    
                    {
                        image.map((item,index)=>{
                            if(item.name=="r2")
                                return <div style={{width:"50%",height:500,padding:20}}>
                            
                            <img src={item.img} style={{width:'100%',height:'100%'}}/>
                            </div> 
    })
                    }
                </div>
                <div style={{display:'flex'}}>
                    
                    {
                        image.map((item,index)=>{
                            if(item.name=="r3")
                                return <div style={{width:"50%",height:500,padding:20}}>
                            
                            <img src={item.img} style={{width:'100%',height:'100%'}}/>
                            </div> 
    })
                    }
                </div>
                <div>
                    
                    {
                        image.map((item,index)=>{
                            if(item.name=="frontview")
                            return  <img src={item.img} style={{width:400,height:400}}/>
    })
                    }
                </div>
                </div>
            </div>
        )
    
    }
    export  default Signature;
    
    