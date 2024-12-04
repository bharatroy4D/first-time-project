import { useState } from "react"
import Student from "./student"
import { useEffect } from "react"
export default function Teams(){
    const [team, setTeam] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[])

    return(
        <div className="design">
            <h1> I am student</h1>
            {
                team.map(student => <Student name={student}></Student>)
            }
            
        </div>
    )
}