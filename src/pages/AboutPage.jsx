import Card from '../components/share/Card'
import { Link } from 'react-router-dom'
export default function AboutPage() {
    return (
        <Card>
        <Link to ="/" />
<h1>Thi is Project</h1>
<p>This is react app to leave feedback for a project</p>           

<Link to="/">Back to home</Link>
        </Card>
    )
}
