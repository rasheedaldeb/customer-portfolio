import './App.css'
import About from './assets/Components/About/About'
import Contact from './assets/Components/Contact/Contact'
import Education from './assets/Components/Education/Education'
import Footer from './assets/Components/Footer/Footer'
import Hero from './assets/Components/Hero/Hero'
import NavBar from './assets/Components/NavBar/NavBar'
import Projects from './assets/Components/Projects/Projects'
import ServicesSection from './assets/Components/ServicesSection/ServicesSection'
function App() {

  return (
    <>
      <NavBar logo="/images/wael-logo.png"
      menu={[{link:"Home", path:"/#hero"},
        {link:"About Me", path:"/#about"},
        {link:"Services", path:"/#services"},
        {link:"Projects", path:"/#projects"},
        {link:"Education", path:"/#edu"},
        {link:"Contact", path:"/#contact"}
      ]}/>
      <Hero main="/images/wael-main.jpg"
      before="Hi I am" name="Wael Mohamad Kateb" position="Software" position2="Engineer" 
      intro="Hi, I’m Wael, software engineer,AI, mobile, and web application developer.I have worked on several successful projects that involved
      cloud computing and automation. I am passionate about user experience and constantly strive to create intuitive
      and engaging applications."/>
      
      <About img="/images/wael-main.jpg"
      aboutHead="About Me" aboutInfo="
      software engineer
      Graduate of  AL-qalamoun University in Information Technology 
      Fullstack web and mobile application programmer 
      I have a software team for web, mobile, and intelligence projects."/>
      <ServicesSection/>
      <Projects/>
      <Education data={[
        {title:" Degree in Information technology", subtitle:"Everything related to information and how to deal with it Software: programming languages, compiler algorithms Networks: TCP, UDP, and many types of protocols.", date:2024},
        {title:"Flutter Course", subtitle:"It uses the Dart programming language and comes with ready-to-use widgets for designing user interfaces, Build engaging native mobile apps for both Android and iOS", date:2022},
        {title:"Programming Languages Course", subtitle:"Principles of Language Design.Specification of Language Syntax.Survey of Procedural and OO Languages.Intro. to Functional Programming.Intro. to Logic Programming.Programming Language Semantics.Values.Binings.", date:2021},
        {title:"English Language Course", subtitle:" cover all four language skills: reading, writing, listening and speaking.  Study and train myself General English to improve my general confidence and fluency in English.", date:2020}
      ]}/>
      <Contact title="Drop me a line.I would like to hear from you."/>
      <Footer logo="/images/wael-logo.png"
      list={[{link:"Home", path:"/#hero"},
        {link:"About Me", path:"/#about"},
        {link:"Services", path:"/#services"},
        {link:"Projects", path:"/#projects"},
        {link:"Education", path:"/#edu"},
        {link:"Contact", path:"/#contact"}
      ]}/>
    </>
  )
}

export default App
