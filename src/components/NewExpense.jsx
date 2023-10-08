import { Form, Link} from 'react-router-dom';
import classes from '../styles/NewExpense.module.css'
// import {database } from '../firebase';

 function NewExpense() {
return <>
<div className={classes.backdrop} />
<Form method='post' className={classes.modal}>
    <div >
    <p>
        <label htmlFor="name">Your name</label>
        <input placeholder='Name'className={classes.input} type="text" id="name" name = 'author' required />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea placeholder='text' className={classes.input} id="body" name = 'text' required rows={3} />
      </p>
      
      <p>
        <button className={classes.button}>Add user</button>
      </p>
      <li>
        <Link to='/dashboard'> dashboard </Link>
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
  
  //   await fetch('https://splitwise-clone-a37a3-default-rtdb.firebaseio.com/', {
  //       method: 'POST',
  //       body: JSON.stringify(postData),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   })
}




export default NewExpense