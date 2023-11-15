const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={ require('./images/ilogon.png')} alt='
            logon' width={200} />
            <div className="links">
              <a href="/"> Home</a>
              <a href="/"> About</a>
              <a href="/create">New Blog</a>
              <a href="/"> Contact</a>
            </div>
        </div>
     );
}
 
export default Navbar;