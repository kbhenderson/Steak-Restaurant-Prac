import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
    <div class="container">
      <div class="row">
      <div class="col-md-6">
      <h5 class="comp-title">Our Story</h5>
      <h2>Cooking is the Art of Adjustment</h2>
      <p>Lorem ipsum dolor amet yuccie gastropub messenger bag master cleanse asymmetrical, shaman migas fingerstache brooklyn lyft flexitarian. Cornhole whatever man bun food truck lomo, woke raw denim lo-fi taxidermy coloring book plaid mumblecore austin. Schlitz VHS vice hammock live-edge messenger bag jianbing pitchfork ugh marfa PBR&B post-ironic.</p>
      <div class="quote"> "The best steak in town!" - <strong>Thomas Eggsy</strong></div>
      <a href="#" class="reserve-btn">Reserve</a>
      </div>
      <div class="col-md-6">
      <div class="video-img"></div>
      </div>
      </div>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
