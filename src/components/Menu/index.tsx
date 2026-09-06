import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type ThemeColor = 'dark' | 'light'

export function Menu() {

    const [theme, setTheme] = useState<ThemeColor>(() => {
        const storageTheme = localStorage.getItem('theme') as ThemeColor || 'dark'

        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleClickTheme(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault()

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

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
            {nextThemeIcon[theme]}
        </a>
    </nav>;
}