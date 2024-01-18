'use client';


import {ThemeProvider} from "./ThemeProvier"
import {NextUIProvider} from "@nextui-org/react";

interface Props {
    children: React.ReactNode;
}

export default function Provider({ children }: Props) {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </NextUIProvider>

    )
}