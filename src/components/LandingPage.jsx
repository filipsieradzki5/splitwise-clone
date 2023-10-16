import { Form, Link} from 'react-router-dom';
import classes from '../styles/NewExpense.module.css'
import { ref, set, onValue, remove } from "firebase/database";
import { db } from '../utils/firebase'


function handleFetch() {
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

function handleDelete() {
  remove(ref(db, 'expense/'))

  };

 function LandingPage() {
return <>
<div className={classes.backdrop} />
<Form method='post' className={classes.modal}>
    <div >
    <p>
        <label htmlFor="name">Add user</label>
        <input placeholder='Name'className={classes.input} type="text" id="name" name = 'author' required />
      </p>
      <p>
        <button className={classes.button} type='submit'>Add user</button>
      </p>

      <p>
        <button className={classes.button} type='button' onClick={handleFetch}>Get Data from Firebase</button>
      </p>

      <p>
        <button className={classes.button} type='button' onClick={handleDelete}>Delete Data from Firebase</button>
      </p>

      <li>
        <Link className={classes.button} to='/dashboard'> dashboard </Link>
      </li>
      </div>
</Form>
</>
 }

export async function action({request}) {
  const formData = await request.formData();
  const id = Math.floor(Math.random() *5000)
  const postData = JSON.stringify(Object.fromEntries(formData))
  console.log(postData)
 set(ref(db, 'expense/' + id),{postData, id}).catch(Error)

 document.getElementById('name').value = ''
return postData;
  }


export default LandingPage;