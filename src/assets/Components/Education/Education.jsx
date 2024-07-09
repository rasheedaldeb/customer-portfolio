import './Education.scss'
import SectionHeading from '../SectionHeading/SectionHeading'
const Education = ({data}) => {
    return (
        <div id='edu' className='edu'>
        <SectionHeading title="Education/Courses" subtitle="My Education, Technical Trainings and  Courses"/>
        <div className="cards">
        {data.map((item, index)=>{
            return(
                <div className="card">
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                    <h3>{item.date}</h3>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default Education
