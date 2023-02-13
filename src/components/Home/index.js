// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => {
  const homeLightImg =
    'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
  const homeDarkImg =
    'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeColor = isDarkTheme ? 'dark' : 'light'
        return (
          <div className={homeColor}>
            <Navbar />
            {isDarkTheme ? (
              <img src={homeDarkImg} alt="home" />
            ) : (
              <img src={homeLightImg} alt="home" />
            )}
            <h1>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home
