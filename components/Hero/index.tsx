import Image from "next/image"
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import heroImg from '../assets/imgs/pope-francis.@2x.png'
import WikiSvg from "../assets/WikiSvg"
import Link from "next/link"
import ThumbUp from "../assets/ThumbUp"
import ThumbDown from "../assets/ThumbDown"

export default function Hero() {
  return (
    <header  {...stylex.props(s.hero)}>
      <Image
        {...stylex.props(s.heroImage)}
        src={heroImg}
        alt="Pope Francis"
        width={0}
        height={0}
        fill={true}
        sizes="(min-width: 756px) 1440px, 100vw"
      />

      <div {...stylex.props(s.heroCardWrapper)}>
        <div {...stylex.props(s.card)}>
          <div {...stylex.props(s.cardBackground)}></div>
          <div {...stylex.props(s.cardContent)}>
            <p {...stylex.props(s.cardHairLine)}>What's your opinion on</p>
            <h2 {...stylex.props(s.cardTitle)}>Pope Francis?</h2>
            <p {...stylex.props(s.cardDesc)}>He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
            <p {...stylex.props(s.cardWiki)}>
              <Link href='http://wikipedia.com'>
                <WikiSvg /> <span {...stylex.props(s.cardMoreInfo)}>More information</span>
              </Link>
            </p>
            <p {...stylex.props(s.cardCta)}>
              What’s Your Veredict?
            </p>
            <div {...stylex.props(s.cardButtons)}>
              <button {...stylex.props(s.cardButtonIcon, s.thumbUp)} aria-label="thumbs up">
                <ThumbUp />
              </button>
              <button {...stylex.props(s.cardButtonIcon, s.thumbDown)} aria-label="thumbs down">
                <ThumbDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div {...stylex.props(s.closingGauge)}>
        <div {...stylex.props(s.closingLeft)}>
          <span {...stylex.props(s.closingTitle)}>closing in</span>
        </div>
        <div {...stylex.props(s.closingRight)}>
          <span {...stylex.props(s.closingNumber)}>22</span>
          <span {...stylex.props(s.closingDesc)}>days</span>
        </div>
      </div>
    </header>
  )
}

const s = stylex.create({
  hero: {
    position: 'relative',
    overflow: 'hidden',
    height: {
      default: '80vh',
      "@media (max-width: 756px)": "90vh"
    },
    minHeight: '35rem',
    maxHeight: '38rem',
    marginBottom: '2rem'
  },
  heroImage: {
    position: 'absolute',
    left: '-35vw',
    width: '160vw',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  heroCardWrapper: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    position: 'relative',
    top: '5.5rem',
    left: '1rem',
    overflow: 'hidden',
    width: {
      default: '45%',
      "@media (max-width: 756px)": "60%"
    },
    maxHeight: '25rem',
    zIndex: 4,
    marginTop: '2.5rem'
  },
  cardContent: {
    position: 'relative',
    padding: '1rem',
    color: colors.white,
  },
  cardBackground: {
    position: 'absolute',
    top: '-20%',
    left: '-20%',
    width: '140%',
    height: '140%',
    backdropFilter: 'blur(10px)',
    background: `linear-gradient( rgba(0, 0, 0, .4), rgba(0, 0, 0, .4))`,
    border: '2px solid green'
  },
  cardHairLine: {
    fontWeight: 300,
    whiteSpace: 'nowrap',
    margin: 0
  },
  cardTitle: {
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: 1,
    margin: 0
  },
  cardDesc: {
    overflow: 'hidden',
    maxHeight: '10.5rem',
    margin: '1rem 0',
    boxOrient: 'vertical',
    fontSize: '1.25rem',
    fontWeight: 300,
    textOverflow: 'ellipsis'
  },
  cardWiki: {
    display: {
      default: null,
      '@media (max-width: 756px)': 'none'
    }
  },
  cardMoreInfo: {
    color: colors.white,
    textDecoration: 'underline',
    paddingLeft: '.5rem'
  },
  cardCta: {
    fontWeight: 700
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 -1rem -1rem'
  },
  cardButtonIcon: {
    width: '50%',
    height: '2.75rem',
    cursor: 'pointer',
    border: 'none'
  },
  thumbUp: {
    backgroundColor: {
      default: 'rgba(60, 187, 180, .8)',
      ':hover': 'rgba(60, 187, 180, 1)',
    },
  },
  thumbDown: {
    backgroundColor: {
      default: 'rgba(249, 173, 29, .8)',
      ':hover': 'rgba(249, 173, 29, 1)',

    }
  },
  closingGauge: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    width: '100%',
    height: '3rem',
    backgroundColor: 'rgba(255, 255, 255, .4)'
  },
  closingLeft: {
    position: 'relative',
    display: 'flex',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 .25rem 0 0',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    color: colors.white,
    fontWeight: 300,
    textTransform: 'uppercase',
    '::after': {
      position: 'absolute',
      right: '-.5rem',
      display: 'block',
      width: 0,
      height: 0,
      borderTop: '0.25rem solid transparent',
      borderBottom: '0.25rem solid transparent',
      borderLeft: '0.5rem solid rgba(0, 0, 0, .4)',
      content: ' ',
    }
  },
  closingTitle: {
    fontSize: {
      default: '1.25rem',
      "@media (max-width: 756px)": '1rem'
    }
  },
  closingRight: {
    paddingLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  closingNumber: {
    fontSize: {
      default: '2rem',
      "@media (max-width: 756px)": '1.25rem'
    },
    fontWeight: 400,
    color: 'rgba(70, 70, 70, 1)',
    paddingRight: 4
  },
  closingDesc: {
    fontSize: {
      default: '2rem',
      "@media (max-width: 756px)": '1.25rem'
    },
    fontWeight: 300,
    color: 'rgba(70, 70, 70, 1)'
  },
})