import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
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
    <>
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
            안녕하세요. 저는 이번 앱잼에 웹 파트 비활 OB로 참여하는&nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['김', '연', '이']}
              idx={15}
            />
            입니다.
          </p>
          <p>
            지난 기수의 앱잼은 좋은 사람들과 함께한 좋은 기억들뿐이었습니다.
            앱잼을 통해 성장했고, 소중한 인연들을 만났습니다. 그래서 이번 30기
            앱잼에 다시 한번 비활 OB로 참여하게 되었습니다. 이번에는 어떤 좋은
            사람들과 멋진 서비스를 개발하게 될까 시작 전부터 많은 기대를 하고
            있습니다. 최고의 서비스와 최고의 팀을 만들기 위해, 늘 사용자와 팀을
            배려할 줄 아는 개발자가 되도록 노력하겠습니다.
          </p>
          <p>
            새로 만나게 된 여러분, 다시 만난 여러분 모두 반갑습니다. 앞으로 잘
            부탁드립니다!
          </p>
        </div>
        <Card />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
