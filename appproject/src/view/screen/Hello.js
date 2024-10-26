const Hello=()=>
{
    const Marks=[
        {name:"Tom",age:20,subject:"Maths",marks:19},
        {name:"Nick",age:21,subject:"Science",marks:50},
        {name:"John",age:19,subject:"English",marks:100},
        


    ]
    return(
        <div>
            <h1>Student Details</h1>
            {
            
            Marks.map(s=>(
                <h1>
                    <p>Student Name:{s.name}</p>
                    <p>Student Age:{s.age}</p>
                    <p>Student Subject:{s.subject}</p>
                </h1>
            ))
}

        </div>
    )
}
export  default Hello;
