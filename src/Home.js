const Home = () => {

    const trymeClick = (e) => {
        console.log('hello, fellas', e);
    }

    const handleClicks = (name, e) => {
        console.log('hello' + name, e.target
        );
    }
    return ( 
        <div className="home">
         <h2>HomePage</h2>
         <button onClick={trymeClick}>Try me</button>
        <button onClick={(e) => handleClicks('irumva', e)}>Try again!</button>
        </div>
     );
}
 
export default Home;