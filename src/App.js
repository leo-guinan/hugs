import {ReactComponent as Phone} from './phone__01.svg';
import {ReactComponent as PlayStoreButton} from './google-play-badge.svg'
import {ReactComponent as AppStoreButton} from './app-store-badge.svg'
import {ReactComponent as HugsLogo} from './hug_logo_01.svg'
import {ReactComponent as LeftArm} from './Arm_L.svg'
import {ReactComponent as RightArm} from './Arm_R.svg'

import {ReactComponent as SupportHeart} from './support_heart_01.svg'
import './App.scss';

function App() {


  return (
    <section>
      <section className="container">

      
            <div className="columns">
              
              <div className="column is-two-thirds">
                <HugsLogo className='logo'/>
                <p>On April 10, 2020 members of the Columbus College of Art &amp; Design Master of Design Program conducted a series of interviews with members of  Star House (An agency that operates Central Ohio’s only drop-in center for youth, age 14-24, who are experiencing homelessness. </p>
                <p>In these interviews they addressed the increased fatigue and morale of social workers and staff of the Star House whose work with homeless youth is affected by the pandemic. </p>
                <p>After completing eight interviews and desk research a stakeholder and empathy map were created. A need that arose was the need for affection and with the need a challenge: How can we find new ways for the staff to communicate.</p>
                <p>affection and promote well being, when greeting and communicating with the youth, while complying with Covid-19 guidelines?</p>
                <p>The solution - create a wearable mobile option that produces a physical representation of a “hug feeling”.</p>
                <p>Hugging means a natural, basic, and intrinsic reaction to share appreciation and feel connected to those we love. It is a human ritual</p>
                <p>In response to the challenge a diverse team developed a mobile hug sharing application that anyone can download to their mobile device.  The application was made with support from Can’t Stop Columbus, The Columbus Foundation, Columbus College of Art &amp; Design, Star House, Huckleberry House, Novvia, and OSSA Teams.</p>
                <p>Simply launch the application and hold your phone to your heart to actually feel the sensation of a hug through vibrations in your phone.</p>
                <p>Or share a hug remotely by clicking “Send a Hug” and share it! The receiver clicks on the message and holds the phone to their heart to feel the hug.</p>
              </div>
              <div className="column is-align-items-flex-start">
                <figure className="image phone ">
                  <Phone />
                  <AppStoreButton />
                  <PlayStoreButton />
                
                </figure>
              </div>
                
            </div>
                
      </section>
      <section>   
      <div className='level'>
        <LeftArm className="level-item" />
                
        <SupportHeart className="is-align-content-center"/>
        <RightArm className="level-item" />
      </div>
    </section>
  </section>
  );
}

export default App;
