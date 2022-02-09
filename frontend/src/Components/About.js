import React from 'react';
import './about.css';

export default function About()
{
return <div>
    	<div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>Our Mission</h1>
				</div>
				<p>To make the process of donation easier for you!</p>
				<div className="social">
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""><i className="fab fa-twitter"></i></a>
					<a href=""><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section">
				<img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
			</div>
		</div>
	</div>
<section>
    <div className="contain"/>
        <h2>Frequently Asked Questions</h2>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              How will my donation be used?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Once you fill the form, the data will go to relevent NGOs and suitable NGOs will be selected to pick the item up for you. These will then be donated to the needy.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              How much of my donation is going directly to people in need?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">We ensure that 100 % of your donation will go towards our programs. We work very hard to keep our administrative costs extremely low.No administrative costs are funded by donations, which means that 100 % of all donations from individuals, associations, foundations, and businesses, provide direct services to people living in poverty. </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              How can I donate food?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">You can donate raw rice, pulses, wheat flour, cooking oil, canned food and other groceries. Companies, individuals, schools and groups of people can collect food by running a food drive in your network. We also have partnerships with food and retail companies to donate safe raw food/ration.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Where / Can I donate non-food items or supplies for children?
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Yes, you can donate school bags, stationery, clothes and toys for children that study at our feeding sites.</div>
          </div>
        </div>
      </div>
    

   
</section>
  
   <footer>
    <div className="footer-content">
        <h3>The Giving Tree</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti </p>
        <ul className="socials">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <p>copyright &copy;2022 The Giving Tree. designed by <span>Error_404</span></p>
    </div>
</footer>
</div>;
}