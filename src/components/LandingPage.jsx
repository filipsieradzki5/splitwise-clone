import { Form, Link} from 'react-router-dom';
import classes from '../styles/NewExpense.module.css'
// import {database } from '../firebase';

 function NewExpense() {
return <>
<div className={classes.backdrop} />
<Form method='post' className={classes.modal}>
    <div >
    <p>
        <label htmlFor="name">Add user</label>
        <input placeholder='Name'className={classes.input} type="text" id="name" name = 'author' required />
      </p>
      <p>
        <button className={classes.button}>Add user</button>
      </p>
      <li>
        <Link className={classes.button} to='/dashboard'> dashboard </Link>
      </li>
      </div>
</Form>
</>
}

export async function action({request}) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData);
  postData.id = Math.floor(Math.random() *5000)
 // database.ref('expense/' + postData.id).set(JSON.stringify(postData)).catch(Error)
 
return postData;
  }

export default NewExpense