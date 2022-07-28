import classes from './Link.module.css';

function Link() {
    function copyLinkHandler(){
        console.log('copied');
    }
    return <div>
        <div className={classes.title}>Link</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text" 
            defaultValue={'https://xxxx.xxxxx.com/xxxx/'}/>
        </div>
        <div className={classes.shorten}>
            <label>
                <input className={classes.checkbox} type='checkbox'/>
                <span>Shorten URL</span>
            </label>
        </div>
        <div className={classes.right_div}>
            <button className={classes.copy_btn} onClick={copyLinkHandler}>Copy</button>
        </div>
    </div>
}

export default Link;