import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type ThemeColor = 'dark' | 'light'

export function Menu() {

    const [theme, setTheme] = useState<ThemeColor>('dark')

    function handleClickTheme(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault()
        console.log('vendo o estado')

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return console.log(nextTheme)
        })
    }

    return <nav className={styles.menu}>
        <a className={styles.menuLink} href="#">
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#">
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#">
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#" onClick={handleClickTheme}>
            <SunIcon />
        </a>
    </nav>;
}