// app/layout.tsx
import '../styles/globals.css';
import '../styles/Navbar.css';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'My Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
