import classes from '../styles/Dashboard.module.css'
import Header from './Header';

function Dashboard() {
 return (
    <>
    <Header />
    <div className={classes.container}>     

<select name="cars" id="cars">
  <option value="volvo">John</option>
  <option value="saab">Nicole</option>
  <option value="mercedes">Natalie</option>
  <option value="audi">Robert</option>
  <option value="audi">Tom</option>
</select>
<label for="cars"> paid </label>
<select name="cars" id="cars">
<option value="volvo">John</option>
  <option value="saab">Nicole</option>
  <option value="mercedes">Natalie</option>
  <option value="audi">Robert</option>
  <option value="audi">Tom</option>
  </select>
  <input placeholder='value' type="number" required />
  PLN
</div>
   </>
 )
}

export default Dashboard;