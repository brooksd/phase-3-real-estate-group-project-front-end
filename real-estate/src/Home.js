import React from "react";
import background from './components/images/image.jpeg'
function Home(){
    return(
        <div style={{ backgroundImage: `url(${background})`,backRepeat: 'no-repeat' }}>
            <h1>This is our home page</h1>
        </div>
    )
}

export default Home;