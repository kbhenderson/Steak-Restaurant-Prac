import {h, app} from 'hyperapp'

export default function RandomQoute({state, actions}) {
  return (
    <section id="RandomQoute" style={{
      backgroundImage: 'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url("https://2rt9loawzcmbvlze40mhj9n0-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/cooking-offer.jpg")'
    }}>
    <div class="container">

      <h1>“I cook with wine, sometimes I even add it to the food.” </h1>
      <span class="author">- W.C. Fields -</span>

    </div>
    </section>
  )
}

