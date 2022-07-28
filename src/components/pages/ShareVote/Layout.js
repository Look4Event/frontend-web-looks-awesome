import InviteCard from '../../gadgets/InviteCard';
import Email from './Email';
import Link from './Link';

import classes from './Layout.module.css';

import React, { useState } from 'react';

function Layout(props) {

    const [isEmail, setToEmail] = useState(true);
    const [isLink, setToLink] = useState(false);

    function useEmail() {
        setToEmail(() => true);
        setToLink(() => false)
    }
    function useLink() {
        setToLink(() => true);
        setToEmail(() => false);
    }

    return (
        <InviteCard>
            <div className={classes.subtitle}>Send to Vote</div>
            <div className={classes.methods}>
                <p>Send via</p>
                <img 
                    className={classes.emailImg} 
                    onClick={useEmail} 
                    src={process.env.PUBLIC_URL + '/email.jpg'} alt="Email"
                />
                <img 
                    className={classes.linkImg} 
                    onClick={useLink} 
                    src={process.env.PUBLIC_URL + '/link.jpg'}alt="Link"
                />
            </div>
            <div className={classes.line}>
                <hr />
            </div>
            {isEmail && (<div><Email /></div>)}
            {isLink && (<div><Link /></div>)}
        </InviteCard>
    );
}

export default Layout;
