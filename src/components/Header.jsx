import { Link } from 'react-router-dom'


function Header(props){
    return (
        <div className='header'>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/projects"><h3>Projects</h3></Link>
            <Link to="/contact"><h3>Contact</h3></Link>
        </div>
    )
}

export default Header