const Lugo = ()=>
{
    const color=["red","yellow","blue","pink","lavender","gold"]
    return(
        <h1 className="hello">
            { color.map(d=>(

                <center style={{color:d}}>{d}</center>
                ))
            }
        </h1>
    )
}
export default Lugo