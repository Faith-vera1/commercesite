import React from 'react' 
import img2 from '../Images/logo classyrobes.jpeg'

const Navbar = () => {
  return (
    <>

     <div>

     <nav className="navbar navbar-light bg-light d-flex ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={img2} alt="" width="50" height="24" className="d-inline-block align-text-top"/>
      
    </a>

    <ul className='d-flex'>
      <li><a href='#'>Login</a></li>
      <li><a href='#'>Signup</a></li>
      <li><a href='#'>Help?</a></li>
      <li><a href='#'>Shop</a></li>
    </ul>
  </div>
</nav>
     </div>



    </>
  )
}

export default Navbar