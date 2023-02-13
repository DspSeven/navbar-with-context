// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const lightThemeImage =
    'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
  const darkThemeImage =
    'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
  const lightTheme =
    'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
  const darkTheme =
    'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const themeImage = isDarkTheme ? darkThemeImage : lightThemeImage
        const theme = isDarkTheme ? darkTheme : lightTheme
        const color = isDarkTheme ? 'dark' : 'light'
        const changeColor = () => {
          toggleTheme()
        }
        return (
          <ul className={color}>
            <img src={themeImage} alt="website logo" />
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
            <button type="button" data-testid="theme" onClick={changeColor}>
              <img src={theme} alt="theme" />
            </button>
          </ul>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Navbar
