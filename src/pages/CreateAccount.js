import classes from './CreateAccount.module.css'
import GoogleSignupButton from '../components/buttons/GoogleSignupButton';

function CreateAccountPage() {
    return (    
        <div className={classes.page}>
            <div className={classes.page_container}>
                <div className={classes.logo}> LOOK4EVENT</div>
                {/* <div className={classes.actions}>                
                    <button>Sign up with Google</button>
                </div>
                <div className={classes.actions}>
                    <button>Sign up with Apple</button>
                </div> */}
                <div className={classes.vertical_div_line_container}>
                    <hr className={classes.vertical_div_line_solid}/>
                    <hr className={classes.vertical_div_line_solid}/>
                </div>
                <div className={classes.action_container}>
                    <div className={classes.action_prompt}>Create a new account</div>
                    {/* <button className={classes.action_btn}>Sign up with Google</button> */}
                    <button className={classes.action_btn}>Sign up with Apple</button>
                    <GoogleSignupButton></GoogleSignupButton>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountPage;