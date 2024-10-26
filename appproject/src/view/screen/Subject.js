const Subject=()=>{
    const Subjects=["computers","english","Maths","Science"]
    const Calor=["black","pink","blue","lavender"]
    return(
        <div >
            {
                Subjects.map((s,index)=>(
                    <h1 style={{color:Calor[index]}}>
                        {s}

                    </h1>
                ))
            }
        </div>
    )
}
export default Subject