import Image from "next/image"
import * as stylex from "@stylexjs/stylex"
import img from '../assets/bg-people.png'
export default function BannerSubmit() {
  return (
    <aside {...stylex.props(s.banner)}>
      <Image
        {...stylex.props(s.bannerBackground)} src={img}
        alt="" role="none" />

      <div {...stylex.props(s.bannerLeft)}>
        <h2 {...stylex.props(s.bannerHeading)}>Is there anyone else you would want us to add?</h2>
      </div>

      <div {...stylex.props(s.bannerRight)}>
        <button {...stylex.props(s.bannerCta)}>
          Submit a name
        </button>
      </div>
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
    justifyContent: 'space-between',
    flexDirection: {
      default: null,
      '@media (max-width: 756px)': 'column'
    },
    padding: '1rem',
    margin: '0 auto',
    backgroundColor: 'rgba(235, 235, 235, 1)'
  },
  bannerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    objectFit: 'cover',
    opacity: '.2',
    pointerEvents: 'none',
  },
  bannerHeading: {
    display: 'relative',
    margin: '0 0 1rem',
    color: 'rgba(70, 70, 70, 1)',
    FontSize: '2rem',
    fontWeight: 400,
  },
  bannerLeft: {
    flexBasis: '60%'
  },
  bannerRight: {
    flexBasis: '40%'

  },
  bannerCta: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: '1rem 2rem',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .6)',
    backgroundColor: 'transparent',
    color: 'rgba(51, 51, 51, 1)',
    fontSize: '1.5rem',
  },

})