import styles from './price.module.scss'
import cx from 'classnames'

export default function Price() {
    return <>
        <div className={styles.container}>
            <div className={cx(styles.box, styles.box1)}>
                <h4 className={styles.titlecyan}>Join our community</h4>
                <p className={styles.greenword}>30-day, hassle free money back guarantee</p>
                <p>Gain access to our full library of tutorials along with experts code reviews. Perfect for any developers who are serious about honing their skils.
                </p>
            </div>
            <div className={cx(styles.box, styles.box2)}>
                <b>Monthly Subscription</b>
                <p className={styles.subtext}> <strong>$29</strong> per month</p>
                <p>Full access for less than $1 a day</p>
                <button type="submit" className={styles.signupbutton}>Sign up</button>
            </div>
            <div className={cx(styles.box, styles.box3)}>
                <b>Why Us</b>
                <p className={styles.poinParagraph}>Tutorial by industry experts
                    <br />
                    Peer & export code review
                    <br />
                    Coding exercises
                    <br />
                    Access to our Github Repo
                    <br />
                    Community Forum
                    <br />
                    Flashcard decks
                    <br />
                    New videos every week
                </p>
            </div>
        </div>
    </>
}