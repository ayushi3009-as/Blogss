'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../../styles/Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </nav>
  );
}
