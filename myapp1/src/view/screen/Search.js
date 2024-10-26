const Search=()=>
    {const image =[
        {"id":1,"name":"rooftop",img:require('../assets/Screenshot (38).png')},
        {"id":2,"name":"bedroom",img:require('../assets/Screenshot (35).png')},
        {"id":2,"name":"bedroom",img:require('../assets/Screenshot (39).png')},
        {"id":3,"name":"rooftop",img:require('../assets/Screenshot (37).png')},
    ]
    
        return(
            <div style={{position:'relative',alignItems:'center',padding:30}}>
              <div style={{paddingLeft:10,justifyContent:'space-between', marginTop:20,borderStyle:'solid',borderWidth:1,borderColor:'black',borderRadius:10, backgroundColor:'white',display:'flex',alignItems:'center'}}>
                
                <input type='text' placeholder='Search...' className='inputsearch'  onFocus={(e) => {
                    e.target.style.border = 'none'; // Ensure no border on focus
                }}
                onBlur={(e) => {
                    e.target.style.border = 'none'; // Ensure no border when blurred
                }}/>
                <img src={require('../assets/icons8-search-100 (1).png')} style={{width:30,height:30,marginRight:10}} />
                
                </div> 

<div style={{paddingTop:100,paddingBottom:20}}> 
    <p>You might be interested in:</p>
    </div>

                <div style={{display:"flex",}}>
                    
                    {
                        image.map((item,index)=>{
                            if(item.name=="bedroom")
                            return <div style={{width:200,height:200}}>
                            
                            <img src={item.img} style={{width:'100%',height:'100%'}}/>
                            </div> 
    })
                    }
                </div>
            </div>
        )
    }

    export  default Search;