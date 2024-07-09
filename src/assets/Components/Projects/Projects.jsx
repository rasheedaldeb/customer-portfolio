import './Projects.scss'
import SectionHeading from '../SectionHeading/SectionHeading'
const Projects = () => {
    return (
        <div id='projects' className='projects'>
        <SectionHeading title="Projects" subtitle="Our Amazing and Personal Projects"/>
        <div className="projects-cards">
        <div className="card">
        <img src="/images/pro-1.jpg" alt="" width={500} height={300}/>
        <h2>Weather App</h2>
        </div>
        <div className="card">
        <img src="/images/pro-2.jpg" alt="" width={500}  height={300}/>
        <h2>sign up (Home care)</h2>
        </div>
        <div className="card">
        <img src="/images/pro-3.jpg" alt="" width={500}  height={300}/>
        <h2>Home care</h2>
        </div>
        <div className="card">
        <img src="/images/pro-4.jpg" alt="" width={500}  height={300}/>
        <h2>Admin panal</h2>
        </div>
        <div className="card">
        <img src="/images/pro-5.jpg" alt="" width={500}  height={300}/>
        <h2>Courses website</h2>
        </div>
        </div>
        </div>
    )
}

export default Projects
