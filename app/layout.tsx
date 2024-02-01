import "./globals.css"
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing } from "./globalTokens.stylex"
import { ReactNode } from "react"

export const metadata = {
  title: "Rule of thumb",
  description: "tests",
}

type Props = {
  children?: ReactNode
}

export default async function RootLayout({ children }: Props) {

  return (
    <html {...stylex.props(s.html, s.reset)} lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet" />
      </head>
      <body {...stylex.props(s.reset, s.body)}>
        {children}
      </body>
    </html>
  )
}

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const s = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    minHeight: "100%",
  },
  body: {
    color: colors.black,
    backgroundColor: colors.white,
    fontFamily: $.fontSans,
    margin: '0 auto',
    position: 'relative',
    animationName: fadeIn,
    animationDuration: '2.8s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in-out',
  }
})

