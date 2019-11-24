import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="Reviews">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <img src="https://image.freepik.com/free-photo/chef-making-ok-sign-white-background_1368-2804.jpg"/>
        </div>
        <div class="col-md-4">
          <h5 class="comp-title">Reviews</h5>
          <h2>The Food Network</h2>
          <h4>Best Restaurant in the L.A. area!</h4>
          <p>Dreamcatcher banjo fashion axe slow-carb, whatever keffiyeh quinoa. Biodiesel occupy deep v VHS mixtape taxidermy. Kinfolk slow-carb tote bag normcore pabst franzen humblebrag.</p>
          <div class="author"><strong>Joe Pastacio</strong> - <em>Winner Of Chef Masters</em></div>
          <div class="arrows">
          <i class="fas fa-arrow-left"></i>
          <i class="fas fa-arrow-right ready"></i>
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}
