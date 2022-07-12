import classes from './FormLayout.module.css';
import FormMainNavigation from './FormMainNavigation';

function Layout(props) {
    return (
        <div>
            <FormMainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    ); 
}

export default Layout;