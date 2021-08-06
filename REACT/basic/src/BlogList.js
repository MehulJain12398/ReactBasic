const BlogList = ({data}) => {

    return(
     data.map((x) => {
        return(
            <div className="blog-preview" key={x.id}>
                <h2>{x.name}</h2>
                <p>{x.color} <span><i>as it is written in </i><b>{x.year}</b></span></p>
                {/* <button onClick={() => {handleDelete(x.id)}}>Delete it</button> */}
            </div>
        )
    })
    )
}

export default BlogList