// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
const About = () => {
  const aboutLightImg =
    'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
  const aboutDarkImg =
    'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const aboutColor = isDarkTheme ? 'dark' : 'light'
        return (
          <div className={aboutColor}>
            <Navbar />
            {isDarkTheme ? (
              <img src={aboutDarkImg} alt="about" />
            ) : (
              <img src={aboutLightImg} alt="about" />
            )}
            <h1>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default About
