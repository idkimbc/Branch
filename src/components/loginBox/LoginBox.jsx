'use client'
import React from 'react'
import styles from './loginBox.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginBox() {
    const {status} = useSession()
    console.log(status)
    const router = useRouter()
    if (status === "authenticated") {
        router.push("/")
    }
    if (status === "unauthenticated") {
        router.push("/login")
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftContainer}>
                    <div className={styles.text}>Travel<span className={styles.italics}>travel</span>
                        &nbsp;<span className={styles.coolvetica}>I want to <span className={styles.write}>write</span> <span className={styles.italics}>something</span> here</span><span className={styles.trees}>Trees</span> <span className={styles.italics}>are</span> <span className={styles.nice}>nice !!!</span></div>
                    <div className={styles.thefuck}>whateven the <br/> <span className={styles.fuck}>fuck</span></div>
                    <div className={styles.imgContainer}>
                        <Image src="/pfp.jpeg" fill className={styles.img} />
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <h1 className={styles.header}>Where have you been?!</h1>
                    <form className={styles.form} action="/">
                        <label className={styles.emailLabel} htmlFor="email">Email</label>
                        <input className={styles.email} type="email" id='email' />
                        <label className={styles.pwLabel} htmlFor="password">Password</label>
                        <input className={styles.password} type="password" id='password' />
                        <button type='submit' className={styles.submitBtn}>Log in</button>
                    </form>
                    <div className={styles.or}>OR</div>
                    <button className={styles.loginBtn} onClick={() => signIn("google")}>Continue with Google</button>
                    <div className={styles.register}>
                        <div>New user?</div>
                        <Link href='.'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBox