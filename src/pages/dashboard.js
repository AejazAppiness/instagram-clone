import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
    return <div>
        <Header />
        <div>
            <Timeline />
            <Sidebar />
        </div>
    </div>
}