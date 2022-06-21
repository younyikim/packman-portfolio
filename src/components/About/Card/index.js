import './index.scss'
import Teamble from '../../../assets/images/teamble.svg'
import Profile from '../../../assets/images/profile.png'

const Card = () => {
  return (
    <section>
      <div class="card">
        <div class="face front">
          <h3 class="debit">My project</h3>
          <h3 class="bank">Teamble</h3>
          <img class="chip" src={Teamble} alt="chip" />
          <h3 class="number">29th SOPT AppJam</h3>
          <h5 class="valid">
            <span>Duration</span>
            <span>2021/12 ~</span>
          </h5>
          <h5 class="card-holder">Web frontend developer</h5>
        </div>
        <div class="face back">
          <img class="chip" src={Profile} alt="chip" />
          <p class="text">
            <p>
              김연이 <br />
            </p>
            1999.07.16 (24세) <br />
            동덕여자대학교 컴퓨터학과 <br />
            Teamble Web Developer <br />
            SOPT 29th Web Part 수료 <br />
            Developer Intern in Hayanmind <br />
            # INTJ <br />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Card
