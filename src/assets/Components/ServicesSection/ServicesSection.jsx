import SectionHeading from '../SectionHeading/SectionHeading'
import ServicesCard from '../ServicesCard/ServicesCard'
import './ServicesSection.scss'

const ServicesSection = () => {
    return (
        <div id='services' className='services'>
        <SectionHeading title="Services" subtitle="Our Technical , Web, mobile, and AI services and Support."/>
        <ServicesCard data={[{logo:"/images/UI-UX.png", title:"UI/UX", subtitle:"User interface and User experience for making both web and mobile design and interfaces."},
            {logo:"/images/web-app.png", title:"Web Development", subtitle:"create functional, user-friendly websites and web application, develop and test new web applications."},
            {logo:"/images/mobile-app.png", title:"Mobile App Development", subtitle:" designs, develops, and implements mobile applications, creating software applications"},
            {logo:"/images/AI.png", title:"Artificial intelligence", subtitle:"design, develop, and deploy AI-powered solutions, machine learning algorithms "},
            {logo:"/images/hosting.png", title:"Web Hosting", subtitle:" provides storage for the files that make up your website and the software, physical hardware"}
        ]}/>
        </div>
    )
}

export default ServicesSection
