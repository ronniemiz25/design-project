const posts = ({ postitem }) => {

    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100 border-0">
                    <img src={postitem.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4>{postitem.title}</h4>
                        <h6>{postitem.date}</h6>
                        <p>{postitem.content}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default posts