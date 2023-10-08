import classes from '../styles/Header.module.css'
import user_male from '../img/user_male.jpg'
import user_female from '../img/user_female.jpg'

function Header() {
 return (
    <div className={classes.wrapper}>
    <div className={classes.user}>
        <p>
            John
        </p>
        <img className={classes.img} alt='user' src={user_male}/>
    </div>
    <div className={classes.user}>
    <p>
        Nicole
    </p>
    <img className={classes.img} alt='user' src={user_female}/>
</div>
<div className={classes.user}>
        <p>
            Natalie
        </p>
        <img className={classes.img} alt='user' src={user_female}/>
    </div>
    <div>
    <p>
        Robert
    </p>
    <img className={classes.img} alt='user' src={user_male}/>
</div>
<div className={classes.user}>
        <p>
            Tom
        </p>
        <img className={classes.img} alt='user' src={user_male}/>
    </div>

    <button className={classes.addUser}>Add user</button>
    </div>
 )
}

export default Header;