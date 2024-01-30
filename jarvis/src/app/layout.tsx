import { Inter } from 'next/font/google'
import "./globals.css";
import Sidebar from "@/components/SideBar";
import Provider from "./Provider";
import Setup from "@/components/utils/Setup";


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}
    >
      <Provider>
          <Setup/>
              <nav className="fixed">
                <Sidebar/>
              </nav>
            <main>
              {children}
            </main>
      </Provider>
    </body>
    </html>
  )
}
