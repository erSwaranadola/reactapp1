const Marks=()=>{
    const Mark=[
        {"name":"Swara","marks":"100","result":"Pass",},
        {"name":"Tavishi","marks":"80","result":"Pass",},
        {"name":"alexandra","marks":"40","result":"Fail",},
    ]
        return(
            <div>
                {
                    Mark.map(s=>(
                        <h1>
                            {s.name}-{s.marks}-{s.result}
                        </h1>
                    ))
                }
            </div>

)
}
export default Marks



