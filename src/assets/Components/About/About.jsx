import './About.scss'

const About = ({img, aboutHead, aboutInfo}) => {
    return (
        <div id='about' className='about'>
        <div className="about-img">
        <img src={img} alt="" />
        </div>
        <div className="about-info">
            <h1>{aboutHead}</h1>
            <p>{aboutInfo}</p>
            <div className="progress">
            <div className="prog-data">
                <h3>HTML, CSS, JS, React </h3>
                <div className="prog">
                    <span style={{display:"block",width:"90%"}}></span>
                </div>
            </div>
            <div className="prog-data">
                <h3>NodeJs, php, C#, C++, python, Java </h3>
                <div className="prog">
                    <span style={{display:"block",width:"75%"}}></span>
                </div>
            </div>
            <div className="prog-data">
                <h3>Mysql, MongoDB </h3>
                <div className="prog">
                    <span style={{display:"block",width:"80%"}}></span>
                </div>
            </div>
            <div className="prog-data">
                <h3>Flutter, Dart </h3>
                <div className="prog">
                    <span style={{display:"block",width:"88%"}}></span>
                </div>
            </div>

        </div>
        </div>
        </div>
    )
}

export default About
