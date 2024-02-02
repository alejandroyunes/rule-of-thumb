import { colors } from "../../app/globalTokens.stylex"
import stylex from "@stylexjs/stylex"

export default function DownArrow() {
  return (
    <svg {...stylex.props(s.svgFill)} width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
  )
}

export const s = stylex.create({
  svgStroke: {
    stroke: colors.black,
  },
  svgFill: {
    fill: colors.black
  },
})