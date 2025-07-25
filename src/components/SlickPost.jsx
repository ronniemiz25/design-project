const slickPost = ({item}) => {

    return (
        <>

            <div className="caroitem position-relative">
                <img src={item.pic} alt="" className="img-fluid"/>
                <div className="overlay">
                    <h4>{item.title}</h4>
                    {item.tags.map((taglist,id) => <span key={id} className="badge rounded-pill bg-dark me-1">{taglist}</span>)}
                </div>
            </div>
        </>
    )
}


export default slickPost