import React from 'react'
import styles from './login.module.css'
import LoginBox from '@/components/loginBox/LoginBox';

function LoginPage() {
    const items = Array.from({ length: 500 }, (_, i) => i);

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.bodyText}>
                    {items.map((_, i) => (
                        <>something&nbsp;</>
                    ))}
                </div>
                <div className={styles.oppDir}>
                    {items.map((_, i) => (
                        <p>something&nbsp;</p>
                    ))}
                </div>
                <div className={styles.bodyText}>
                    {items.map((_, i) => (
                        <>something&nbsp;</>
                    ))}
                </div>
                <div className={styles.oppDir}>
                    {items.map((_, i) => (
                        <p>something&nbsp;</p>
                    ))}
                </div>
            </div>
            <div className={styles.box}>
            <LoginBox />
            </div>
        </div>
    )
}

export default LoginPage