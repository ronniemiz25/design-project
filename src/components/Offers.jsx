const Offers = () => {

    const offerpoints = [
        {
            points : 'User Research & Analysis'
        },
        {
            points : 'Wireframing & Prototyping'
        },
        {
            points : 'Mobile App UI/UX Design'
        },
        {
            points : 'Website UI/UX Design'
        },
        {
            points : 'Usability Testing & Optimization'
        },
        {
            points : 'Design System & Branding'
        },
        {
            points : 'Web Development'
        },
        {
            points : 'E-commerce Solutions'
        }
    ]

    return(
        <>
            <div className="sectiongap">
                <div className="offerdiv">
                    <div className="container">
                        <h3>We specialize in creating, developing, and managing a brand’s identity to help businesses stand out in the marketplace and connect with their target audience.</h3>
                        <ul>
                            {offerpoints.map((pointers,id)=> 
                                <li key={id}>{pointers.points}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Offers