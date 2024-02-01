"use client"
import * as stylex from "@stylexjs/stylex"
import { colors, spacing } from "../../../app/globalTokens.stylex"
import HamburgerSvg from "@/components/assets/HamburgerSvg"

export function MobileNav() {

  return (
    <nav {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.wrapper)}>

        <div  {...stylex.props(styles.left)}>
          <h1>Rule of thumb.</h1>
        </div>

        <div {...stylex.props(styles.right)}>
          <HamburgerSvg />
        </div>
      </div>
    </nav>
  )
}

const styles = stylex.create({
  container: {
    width: '100%',
    position: 'fixed',
    minHeight: '10rem',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 80%)',
    top: 0,
    zIndex: 2,
  },
  wrapper: {
    display: "flex",
    width: '100%',
    justifyContent: "space-between",
    margin: `0 auto`,
    padding: `0 ${spacing.md}`,
  },
  left: {
    display: "flex",
    alignItems: "center",
    fontSize: 18,
    color: colors.white

  },
  right: {
    display: "flex",
    alignItems: "center",
  },
})