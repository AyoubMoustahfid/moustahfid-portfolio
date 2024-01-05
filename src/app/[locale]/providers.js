"use client"

import {useEffect} from "react"
import { ThemeProvider } from "next-themes"

export default function Providers({ children }) {
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const prefersDarkMode = darkModeMediaQuery.matches;

        document.documentElement.classList.toggle('dark', prefersDarkMode);

        // Listen for changes in the user's color scheme preference
        darkModeMediaQuery.addEventListener('change', (event) => {
        document.documentElement.classList.toggle('dark', event.matches);
        });
    }, []);
    return (
        <ThemeProvider enableSystem={true} attribute="class">
			{children}
		</ThemeProvider>
    )
}
