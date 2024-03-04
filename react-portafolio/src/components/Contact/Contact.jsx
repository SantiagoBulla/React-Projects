import { getImageUrl } from '../../utils';
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={
                            getImageUrl('contact/emailIcon.png')
                        }
                        alt='email-icon'
                    />
                    <a href='mailto:santiagobulla1216@gmail.com'>
                        santiagobulla1216@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={
                            getImageUrl('contact/githubIcon.png')
                        }
                        alt='gitHub-icon'
                    />
                    <a href='#'>
                        Santiago Bulla
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={
                            getImageUrl('contact/linkedinIcon.png')
                        }
                        alt='linkedin-icon'
                    />
                    <a href='#'>
                        Santiago Bulla
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;
