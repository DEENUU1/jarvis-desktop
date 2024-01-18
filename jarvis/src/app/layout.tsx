import { Inter } from 'next/font/google'
import {ThemeProvider} from "./ThemeProvier"
import {ThemeSwitcher} from "@/app/ThemeSwitch";
import "./globals.css";
// import {NextUIProvider} from "@nextui-org/react";
import Sidebar from "@/components/SideBar";

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
      {/*<NextUIProvider>*/}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeSwitcher/>
            <Sidebar/>
            <main>
              {children}
            </main>
        </ThemeProvider>
      {/*</NextUIProvider>*/}
    </body>
    </html>
  )
}
