// app/layout.tsx
import {fonts} from './fonts'
import {Providers} from './providers'
import {ColorModeScript} from "@chakra-ui/react";
import {theme} from './../theme'

export default function RootLayout({children}) {
    return (
        <html lang='fr' className={fonts.rubik.variable}>
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Providers>{children}</Providers>
        </body>
        </html>
    )
}
