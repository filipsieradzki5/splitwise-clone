import classes from '../styles/Dashboard.module.css'
import Header from './Header';

function Dashboard() {
 return (
    <>
    <Header />
    <div className={classes.container}>
        <ul>
            <li>Adam paid 5 $</li>
            <li>Adam paid 5 $</li>
            <li>Adam paid 5 $</li>
            <li>Adam paid 5 $</li>
            <li>Adam paid 5 $</li>
            <li>Adam paid 5 $</li>
        </ul>
   </div>
   </>
 )
}

export default Dashboard;