export default function Student({name}){
    // const {id, title, body}={name}
    return(
        <div className="design">
            <h2>Id :{name.id}</h2>
            <h2>Title :{name.title}</h2>
            <h2>Body :{name.body}</h2>

        </div>
    )
}