import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const PostsItem = ({ item }) => {

    return (
        <>

            <div className="col-lg-4">
                <div className="card h-100 border-0">
                    <img src='src/assets/postpic-2.webp' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <div className="footer-left">
                            <span className="me-2"><AiOutlineLike /> {item.reactions.likes}</span>
                            <span><AiOutlineDislike /> {item.reactions.dislikes}</span>
                        </div>
                        <div className="footer-right">
                            <span><FaRegEye className="me-1"/>{item.views}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default PostsItem