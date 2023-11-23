import { Inter } from 'next/font/google'
import { AuthUser, getCurrentUser, signOut } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<AuthUser | undefined>();
  
  useEffect(() => {
    (async () => {
      setUser(await getCurrentUser());
    })();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Menu</div>
        <div>User: {user?.username}</div>
        <button onClick={() => {
          signOut();
        }
        }>Sign Out</button>
        {children}
      </body>
    </html>
  )
}
