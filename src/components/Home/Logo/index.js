import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useRef } from 'react'
// import gsap from 'gsap'
// import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  //   useEffect(() => {
  //     gsap.registerPlugin(DrawSVGPlugin)

  //     gsap.timeline()
  //     toString(bgRef.current, {
  //       duration: 1,
  //       opactiy: 1,
  //     })
  //   }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
      <svg
        width="788"
        height="728"
        viewBox="0 0 788 728"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          //   transform="translate(0 457) scale(.1,-.1)"
          filter="url(#filter0_d_2_7)"
        >
          <path
            ref={outlineLogoRef}
            d="M80.821 0.727251H277.199L430.963 305.06H437.355L591.119 0.727251H787.497L521.517 485.102V728H346.801V485.102L80.821 0.727251Z"
            fill="#125173"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2_7"
            x="0.821045"
            y="0.727295"
            width="786.676"
            height="727.273"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-80" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_7"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_7"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Logo
