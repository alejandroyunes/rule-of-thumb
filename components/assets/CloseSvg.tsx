import { colors } from "../../app/globalTokens.stylex"
import stylex from "@stylexjs/stylex"

const CloseSvg = () => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g {...stylex.props(s.svgStroke)} strokeWidth="2" fill="none" fillRule="evenodd"><path d="M1 19L19 1M1 1l18 18" /></g></svg>
)

export default CloseSvg

export const s = stylex.create({
  svgStroke: {
    stroke: colors.white,
  },
  svgFill: {
    fill: colors.white
  },
})