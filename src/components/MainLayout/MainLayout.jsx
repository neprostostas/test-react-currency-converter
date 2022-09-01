import React from 'react'
import s from './MainLayout.module.css'

export const MainLayout = ({ children, rateUAH, rateUSD, rateEUR }) => {

    return (
        <div className={s.wrapper}>

            <header>
                <div className={s.headerWrapper}>
                    <p>rateUAH: {rateUAH}</p>
                    <p>rateUSD: {rateUSD}</p>
                    <p>rateEUR: {rateEUR}</p>
                </div>
            </header>

            <main className={s.mainWrapper}>
                {children}
            </main>

            <footer className={s.footerWrapper}>Test task by Stanislav Kinash</footer>

        </div>
    )
}