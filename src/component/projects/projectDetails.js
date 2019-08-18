import React from 'react'

const projectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project-Title -{id}
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda tempora tempore, animi provident deserunt, cumque perspiciatis culpa consequuntur fuga optio sit illo error voluptas totam fugiat. Corrupti, fuga quam!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the author</div>
                    <div>2nd of july, 5pm</div>
                </div>
            </div>
        </div>
    )
}

export default projectDetails
