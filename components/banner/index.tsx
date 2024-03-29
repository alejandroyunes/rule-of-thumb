import Image from "next/image"
import * as stylex from "@stylexjs/stylex"
import CloseSvg from "../assets/CloseSvg"

export default function Banner() {
  return (
    <aside {...stylex.props(s.banner)}>
      <div {...stylex.props(s.bannerLeft)}>
        <span {...stylex.props(s.bannerHairLine)}>Speak out. Be heard.</span>
        <span {...stylex.props(s.bannerTitle)} >Be counted</span>
      </div>
      <div {...stylex.props(s.bannerRight)}>
        <p {...stylex.props(s.bannerText)}>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <button {...stylex.props(s.iconButton)} aria-label="close">
       <CloseSvg />
      </button>
    </aside>
  )
}

const s = stylex.create({
  banner: {
    position: 'relative',
    display: 'flex',
    maxWidth: '1100px',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    margin: '0 auto',
    backgroundColor: 'rgba(235, 235, 235, 1)'
  },
  bannerLeft: {
    flexBasis: '40%',
    paddingRight: '1rem'
  },
  bannerHairLine: {
    color: 'rgba(70, 70, 70, 1)'
  },
  bannerTitle: {
    display: 'block',
    color: 'rgba(70, 70, 70, 1)',
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '-.05rem'
  },
  bannerRight: {
    flexBasis: '60%',
  },
  bannerText: {
    display: 'block',
    color: 'rgba(70, 70, 70, 1)',
    fontSize: '1.25rem',
    fontWeight: 300,
    letterSpacing: '-.05rem'
  },
  iconButton: {
    backgroundColor: 'transparent',
    paddingLeft: 8,
    margin: 0,
    border: 'none'
  },
})