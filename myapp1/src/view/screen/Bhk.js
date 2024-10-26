const Bhk = () => {

const  data=[
    {id:1,bh:"2 BHK",image:require('../assets/1.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:2,bh:"3 BHK",image:require('../assets/2.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:3,bh:"2 BHK",image:require('../assets/3.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:4,bh:"4 BHK",image:require('../assets/4.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:5,bh:"2 BHK",image:require('../assets/5.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:6,bh:"3 BHK",image:require('../assets/6.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:7,bh:"3 BHK",image:require('../assets/7.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:8,bh:"3 BHK",image:require('../assets/8.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:7,bh:"3 BHK",image:require('../assets/9.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
    {id:7,bh:"3 BHK",image:require('../assets/10.png'),name:"2 BHK Flat For Sale in Balaji residency kanakpura, Jaipur",rate:25,persq:3000},
]


    return (
        <div style={{ padding: 20 }}>
{

    data.map(d=>(

   
            <div style={{ display: 'flex', height: 200, backgroundColor: "white", borderRadius: 10, marginTop: 30 }} className="product">
               <div>
                
                <img src={d.image} style={{ width: 200, height: 150 }} /><br></br>
                <span>Owner: RAVI NADOLA</span>
                </div>
                <div style={{ padding: 10, marginLeft: 10, width: '80%', }}>
                    <p>{d.name}</p>
                    <div style={{ padding: 10, marginLeft: 10, display: 'flex', }}>
                        <div style={{ width: '100%' }}>
                            <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', }}>


                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={require('../assets/carpet.png')} style={{ width: 40, height: 40, }} />
                                    <div style={{ marginLeft: 10 }}>
                                        <span> Carpet Area</span><br />
                                        <b><span> 925 sqft</span></b>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={require('../assets/readytomove.png')} style={{ width: 40, height: 40, }} />
                                    <div style={{ marginLeft: 10 }}>
                                        <span> Status</span><br />
                                        <b><span> ready to move</span></b>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={require('../assets/icons8-stairs-100.png')} style={{ width: 40, height: 40, }} />
                                    <div style={{ marginLeft: 10 }}>
                                        <span> Floor</span><br />
                                        <b><span> 9 out of 9</span></b>
                                    </div>
                                </div>


                            </div>
                            <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', }}>


                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={require('../assets/carpet.png')} style={{ width: 40, height: 40, }} />
                                    <div style={{ marginLeft: 10 }}>
                                        <span>Transaction</span><br />
                                        <b><span> Resale</span></b>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={require('../assets/readytomove.png')} style={{ width: 40, height: 40, }} />
                                    <div style={{ marginLeft: 10 }}>
                                        <span>Furnishing</span><br />
                                        <b><span>Fully furnished / Semi furnished</span></b>

                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={require('../assets/icons8-stairs-100.png')} style={{ width: 40, height: 40, }} />
                                    <div style={{ marginLeft: 10 }}>
                                        <span>Facing</span><br />
                                        <b><span>East / West</span></b>
                                    </div>
                                </div>


                            </div>
                        </div>

                       

                    </div>
                    

                </div>
                <div style={{ backgroundColor:'red',width:300,textAlign:'center',paddingTop:20 }}>
                   <div>
                    <span> ₹ 90 lakh</span><br>
                    </br><span> ₹ 3000/sqft</span>
                    </div> 
                    <div>
                        <button style={{backgroundColor:'black',color:'white',border:'none'}}>Contact owner</button><br>
                        </br><button style={{backgroundColor:'white',color:'black',border:'none'}}>View contact no.</button>
                        </div>        
                </div>
            </div>
             ))
}

        </div>
    )
}
export default Bhk;
