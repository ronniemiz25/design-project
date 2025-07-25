import { useEffect, useState } from "react"
import InnerBanner from "./InnerBanner"
import PostsItem from "./PostsItem"
import Loader from './Loader'

const PostsPage = () => {

    const [postsPage, setPostsPage] = useState([])

    const fetchedPosts = (posts) => {
        setPostsPage(posts)
    }

    const [fetching, setFetching] = useState(false)

    useEffect(() => {

        const controller = new AbortController()
        const signal = controller.signal

        setFetching(true)

        setTimeout(() => {
            fetch('https://dummyjson.com/posts', { signal })
                .then(res => res.json())
                .then(data => {
                    fetchedPosts(data.posts)
                    setFetching(false)
                })
                .catch(err => setFetching(false))

        }, 2000)

        return () => {
            controller.abort()
            setFetching(false)
        }

    }, [])


    return (
        <>
            <InnerBanner />

            {fetching ? <Loader /> :

                (
                    <div className="sectiongap">
                        <div className="postspage">
                            <div className="container">
                                <div className="row g-4">
                                    {postsPage.map((item, id) => <PostsItem key={id} item={item} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }



        </>
    )
}

export default PostsPage