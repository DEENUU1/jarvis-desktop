import { Inter } from 'next/font/google'
import {ThemeSwitcher} from "@/app/ThemeSwitch";
import "./globals.css";
import Sidebar from "@/components/SideBar";
import Provider from "./Provider";

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
                <ThemeSwitcher/>
                <Sidebar/>
                <main>
                  {children}
                </main>
      </Provider>
    </body>
    </html>
  )
}
