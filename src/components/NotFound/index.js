// Write your code here
import Navbar from '../Navbar'

const Notfound = () => {
  console.log('')
  return (
    <div>
      <Navbar />
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1>Lost Your Way</h1>
      <p>We cannot seem to find the page</p>
    </div>
  )
}
export default Notfound
