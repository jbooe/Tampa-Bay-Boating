import React from 'react';


function Home(props) {
    return(
        <div className="container">
            <img 
            className='boating'
            src={require ('../images/boatingGeneric2.jpg')} alt="Boating in Tampa Bay"
            
            />
        </div>
    )
}

export default Home;