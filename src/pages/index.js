import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Meet us in the mountains!</h2>
    <p>Our wedding will be held at the <a href="https://www.mountainviewgrand.com/" target="_blank">Mountain View Grand</a> in Whitefield, NH, during the peak of the beautiful foliage season on October, 17, 2020. There will be dancing, drinks, cute animals, 360 degree mountain views and even axe-throwing! We can't wait to celebrate with you! We will be keeping this website up to date as the wedding approaches, so check back often for updates.</p>
    <h2>Lodging</h2>
    <p>Room blocks are reserved at the <a href="https://www.mountainviewgrand.com/" target="_blank">Mountain View Grand</a>. To reserve, call the reservations department at (866) 801-3653 and mention the event code BH00009222 or our names.</p>
    <p>Room blocks are limited, so other options include:</p>
    <ul>
      <li><a href="https://www.cabotinnandsuites.com/" target="_blank">Cabot Inn and Suites</a>, Lancaster, NH (6.7 miles away)</li>
      <li><a href="https://arlingtonhotelnh.com/" target="_blank">Arlington Hotel</a>, Bethlehem, NH (11.5 miles away)</li>
      <li><a href="https://www.airbnb.com/s/Northfield--NH--United-States/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&source=mc_search_bar&search_type=unknown&screen_size=large&hide_dates_and_guests_filters=false&checkin=2020-10-16&checkout=2020-10-18&adults=2&ne_lat=43.80474850853288&ne_lng=-71.33910603027346&sw_lat=43.14102506926267&sw_lng=-71.81838459472658&zoom=10&search_by_map=true" target="_blank">Local AirBnBs</a> - We have had a lot of luck with Burns Pond options, but there are many nice options</li>
    </ul>
    <h2>RSVP</h2>
    <p>An RSVP link will be available shortly with meal preferences.</p> 
   <h2>Updates</h2>
   <p>As the date approaches, this page will contain more information about the wedding, including schedule information.</p>

   <h2>Registry</h2>
   <p>Currently, we are registered at <a href="https://www.wayfair.com/registry/wedding/connoramanda" target="_blank">Wayfair</a>. Keep an eye out for more information about our registry here!</p>
  </Layout>
)

export default IndexPage
