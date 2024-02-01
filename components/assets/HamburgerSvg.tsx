import { colors } from "../../app/globalTokens.stylex"
import stylex from "@stylexjs/stylex"

export default function HamburgerSvg() {
  return (
    <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" {...stylex.props(s.svgFill)} fillRule="nonzero"></path></svg>
  )
}

export const s = stylex.create({
  svgStroke: {
    stroke: colors.white,
  },
  svgFill: {
    fill: colors.white
  },
})