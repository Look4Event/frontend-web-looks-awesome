// Reference: https://www.youtube.com/watch?v=75aTZq-qoZk

import GoogleLogin from "react-google-login";

function GoogleSignupButton(props) {
    function handleLogin(data) {
        console.log(data);
    }

    function handleFailure(result) {
        alert(result);
    }

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Sign up with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}>
            </GoogleLogin>
        </div>
    )
}

export default GoogleSignupButton;