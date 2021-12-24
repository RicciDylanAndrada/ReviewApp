import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function AboutIconlink() {
    return (
        <div className="about-link">
        <Link to={{
            pathname:'/about',
            search:"?sort=nameta"
        }}>
            <FaQuestion size={30}/>
            </Link>
        </div>
    )
}
