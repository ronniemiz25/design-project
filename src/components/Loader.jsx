const Loader = () =>{

    return (
        <>
            <div className="text-center p-4 mt-5">
                <div className="spinner-border text-primary " style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className={`text-center mt-2`}>
                
                <h3>Post List is Loading</h3>
            </div>
        </>
    )
}


export default Loader