import { Link } from 'react-router-dom'

function Home(props){
    return (
        <div className="home">
            <div className="home-left">
                <h1>Fran Brauning</h1>
            </div>
            <div className="home-right">
                I'm a New York-based Software Developer with a background in Art and Design. 
                <br/>
                I focus on Full-Stack Web Development, using Technologies such as ReactJS, NodeJS, Django, and Masonite.    
            </div>
        </div>
    )
}

export default Home