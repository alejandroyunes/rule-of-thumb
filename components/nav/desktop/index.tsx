"use client"
import * as stylex from "@stylexjs/stylex"
import { colors, spacing } from "../../../app/globalTokens.stylex"
import SearchSvg from "@/components/assets/SearchSvg"

export function DesktopNav() {

  return (
    <nav {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.wrapper)}>

        <div  {...stylex.props(styles.left)}>
          <h1>Rule of thumb.</h1>
        </div>

        <div {...stylex.props(styles.right)}>
          <ul {...stylex.props(styles.unordered)}>
            <li {...stylex.props(styles.list)}>Past Trials</li>
            <li {...stylex.props(styles.list)}>How It Works</li>
            <li {...stylex.props(styles.list)}>Login/Sign Up</li>
          </ul>
          <SearchSvg />
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
    zIndex: 6,
  },
  wrapper: {
    display: "flex",
    width: '1100px',
    justifyContent: "space-between",
    margin: `0 auto`,
    padding: `0 ${spacing.md}`,
  },
  unordered: {
    display: 'flex',
    listStyleType: 'none',
  },
  list: {
    marginRight: 20,
    cursor: 'pointer',
    fontSize: 18,
    color: colors.white
  },
  left: {
    display: "flex",
    alignItems: "center",
    fontSize: 24,
    color: colors.white
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
})