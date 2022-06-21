import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Card from './Card'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover ')
    }, 3000)
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          안녕하세요. 저는 이번 앱잼에 웹 파트 비활 OB로 참여하는 김연이입니다.
        </p>
        <p>
          지난 기수의 앱잼은 좋은 사람들과 함께한 좋은 기억들 뿐이었습니다.
          그래서 이번에도 비활 OB로 앱잼에 다시 한 번 참여하게 되었습니다. 이번
          앱잼은 이전보다 더 많은 인원이 함께해 더 좋은 퀄리티의 서비스를 만들수
          있을 것이라고 기대하고 있습니다. 그래서 이번 앱잼에서는 개인적인
          측면에서 뿐만 아니라, 서비스적인 측면에서도 지난 앱잼에서는 하지
          못했던 것들을 많이 시도해보고 싶습니다.
        </p>
        <p>다들 만나서 반갑습니다. 앞으로 잘 부탁드립니다!</p>
      </div>
      <Card />
    </div>
  )
}

export default About
