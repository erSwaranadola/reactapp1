const Student= ()=>
{
    const names=["karshni","omaira","jaagvi","vidhi","Uma","Gaargi"]
    return (
        <div>
            {
                names.map(s=>(
                    <h1>
                        {
                            s
                        }
                    </h1>
                ))
            }
        </div> 
    )
}
export default Student