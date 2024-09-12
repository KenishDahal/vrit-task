// app/layout.js
import '../styles/globals.css';
import '../styles/typo.css' // Import global styles including Tailwind CSS

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
