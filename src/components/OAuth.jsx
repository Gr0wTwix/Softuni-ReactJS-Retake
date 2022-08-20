import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '../assets/svg/googleIcon.svg';

function OAuth() {
    const navigate = useNavigate();
    const location = useLocation();

    const onGoogleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Checking for User
            const docRef = doc(db, 'users', users.uid);
            const docSnap = await getDoc(docRef);

            // If user doesn't exist, create User
            if (!docSnap.exists()) {
                await setDoc
            }
        } catch (err) {

        }
    }

    return (
        <div className='socialLogin'>
            <p>
                Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with
            </p>
            <button className="socialIconDiv" onClick={onGoogleClick}>
                <img className='socialIconImg' src={googleIcon} alt="google"/>
            </button>
        </div>
    )
}

export default OAuth