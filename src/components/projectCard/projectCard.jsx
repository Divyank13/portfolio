/* eslint-disable react/prop-types */
import './projectCard.css'

export const ProjectCard = ({ project }) => {
    return (
        <div className={project.id % 2 === 0 ? 'project-card rev-flex' : 'project-card'}>
            <div className="contents">
                <p className="title">{project.title}</p>
                <div className="feat-container">
                    {project.features.map((feat, index) => (
                        <p className="feat" key={index}>{`${index + 1}. ${feat}`}</p>
                    ))}
                </div>
                <div className="url-container">
                    <a href={project.git} className="url" target='_blank' rel="noreferrer">Github</a>
                    <a href={project.url} className="url" target='_blank' rel='noreferrer'>Project</a>
                </div>
            </div>
            <div className="media">
                {project.img.length === 0
                    ?
                    <video controls src={project.vid}>
                        {`Sorry, your browser doesn't support embedded videos`}
                    </video>
                    :
                    <img src={project.img} alt="" />
                }
            </div>
        </div>
    )
}
