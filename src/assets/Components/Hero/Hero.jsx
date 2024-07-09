import './Hero.scss'

const Hero = ({main, before, name, position, position2, intro}) => {
    return (
        <div id='hero' className='hero'>
            <div className="hero-info">
            <h3>{before}</h3>
            <h2>{name}</h2>
            <h1>{position}</h1>
            <h1 className='end'>{position2}</h1>
            <p>{intro}</p>
            </div>
        <div className="hero-img">
            <img src={main} alt="" />
        </div>
        </div>
    )
}

export default Hero
