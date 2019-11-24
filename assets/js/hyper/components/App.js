import {h, app} from 'hyperapp'
import Header from './Header.js'
import Topimg from './Topimg.js'
import OurStory from './OurStory.js'
import SpecialMenu from './SpecialMenu.js'
import RandomQoute from './RandomQoute.js'
import Reviews from './Reviews.js'
import ContactUs from './ContactUs.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
    <Header state={state} actions={actions}/>
    <Topimg state={state} actions={actions}/>
    <OurStory state={state} actions={actions}/>
    <SpecialMenu state={state} actions={actions}/>
    <RandomQoute state={state} actions={actions}/>
    <Reviews state={state} actions={actions}/>
    <ContactUs state={state} actions={actions}/>
    </div>
  )
}

