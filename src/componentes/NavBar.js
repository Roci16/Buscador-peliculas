import {AiFillHome} from "react-icons/ai";
import {Link} from "react-router-dom"
const NavBar = ()=>{
    return(
        <nav>
            <ul>
                <li className="home">
                    <Link to="/">
                        <AiFillHome className="home"/>
                    </Link>
                </li>
                <li className="botones-nav">
                    <Link to="/populares">
                        Populares
                    </Link>
                </li>
                <li className="botones-nav">
                    <Link to="/estrenos" >
                        Estrenos
                    </Link>
                </li>
                <li className="botones-nav">
                    <Link to="/buscar">
                        Buscar
                    </Link>
                </li>
            </ul>
             {/* {/* <AiFillHome className="home"/>
             <button className="botones-nav">Populares</button>
             <button className="botones-nav">Estrenos</button> 
             <form>
                <input type="text" placeholder="Buscador"   type="text"/> 
            </form>
            <input type="submit" value="Buscar"/> */}
        </nav>
       
    )
}
export default NavBar;