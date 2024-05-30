import { Link } from "react-router-dom"

function Header() {
  return (
    <div style={{ margin: 10 }}>
      <Link style={{ marginRight: 20 }} to='/'>Home</Link>
      <Link to='/login'>Start Here</Link>
    </div>
  )
}

export default Header