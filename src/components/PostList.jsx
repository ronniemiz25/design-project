import Post from './Post'

const postList = () => {


    const postdetails = [
        {
            img: 'public/images/postpic-1.webp',
            title: 'Always Remember Your Goals!',
            content: 'In the heart of a bustling city, where innovation meets opportunity, the story of our digital agency...',
            date: 'March 6, 2025',
        },
        {
            img: 'public/images/postpic-2.webp',
            title: 'Simple Ways To Optimize Your Website For SEO',
            content: 'In the heart of a bustling city, where innovation meets opportunity, the story of our digital agency...',
            date: 'March 16 2025',
        },
        {
            img: 'public/images/postpic-3.webp',
            title: '10 Principles Of Effective Web Design',
            content: 'In the heart of a bustling city, where innovation meets opportunity, the story of our digital agency...',
            date: 'March 24 2025',
        },
    ]

    return (
        <>
            <div className="sectiongap">
                <div className="postsect">
                    <div className="container">
                        <h2>Posts</h2>
                        <div className="row">
                            {postdetails.map((postitem, id) => (
                                <Post key={id} postitem={postitem} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default postList