const Home=()=>
{

const image =[
    {"id":1,"name":"ring",img:require('../assets/Screenshot (31).png')},
    {"id":2,"name":"ring",img:require('../assets/Screenshot (32).png')},
    {"id":3,"name":"bracelet",img:require('../assets/Screenshot (33).png')},
]

    return(
        <div>
           <div style={{justifyContent:'space-between',width:"100%",height:"auto",backgroundColor:"white",display:"flex",paddingTop:20}}>
            <div style={{display:"flex",position:'relative'}}>
            <img src={require('../assets/menu.png')} style={{width:50,height:50,paddingTop:10}}/>
        <div>
            <div style={{margin:0,padding:0}}>
            <span style={{marginLeft:15,margin:0,fontSize:180,padding:0,fontFamily:'onyx'}}>JOYAR</span>
                </div>
            <div style={{marginRight:10,position:'absolute',bottom:-20,left:0}}>
                <ol style={{listStyleType:'none',display:'flex'}}>
                    <li style={{padding:10}}>Necklaces/Pendants</li>
                    <li style={{padding:10}}> Earings</li>
                    <li style={{padding:10}}> Rings </li>
                    <li style={{padding:10}}> Bracelets </li>
                    </ol> 
            </div>
            </div>
            </div>
            <input placeholder='search..' style={{height:30,width:300}}/>
            <div style={{marginRight:10}}>
                <ol style={{listStyleType:'none',display:'flex'}}>
                    <li style={{padding:10}}>Login</li>
                    <li style={{padding:10}}> Help</li>
                    <li style={{padding:10}}> Shopping bag </li>
                    </ol> 
            </div>
            </div>
            <div>
                <h1>Ring</h1>
                {
                    image.map((item,index)=>{
                        if(item.name=="ring")
                        return  <img src={item.img} style={{width:400,height:400}}/>
})
                }
            </div>
            <div>
                <h1>bracelet</h1>
                {
                    image.map((item,index)=>{
                        if(item.name=="bracelet")
                        return  <img src={item.img} style={{width:400,height:400}}/>
})
                }
            </div>
        </div>
    )

}
export  default Home;

