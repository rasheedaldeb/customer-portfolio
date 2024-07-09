import './SectionHeading.scss'
const SectionHeading = ({title, subtitle}) => {
    return (
        <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        </div>
    )
}

export default SectionHeading
