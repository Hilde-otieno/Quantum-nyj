import './index.css';
import React from 'react';

const Resumes = () => {
    return(
 <div className='team-section'>
     <h2 className='team'>Our Team</h2>

 <div className='our-team'>
   <div className='images'>
     <div >
        <img src= "/images/Faith.jpg" alt='member-one' className='team-photo'/>
      <div className='caption'>
         <h5>Faith Munyao</h5>
         <p><a href='https://faith-s-portfolio-5951fte3h-ada-lab.vercel.app/' className='software'> Software Developer</a></p>
        </div>
        </div>
  <div>
    <img src="/images/jango.jpg" className='team-photo'/>
       <div className='caption'>
          <h5>Maureen Njango</h5>
          <p><a href='https://trialcover.vercel.app/' className='software'> Software Developer</a></p>
        </div>
        </div>

  <div>
    <img src="/images/Megan.jpg" alt='member-three' className='team-photo'/>
    <div className='caption'>
       <h5>Megan Adhiambo</h5>
        <p><a href='https://portfolio-fzh7.vercel.app/' className='software'>Software Developer</a></p>

        </div>
        </div>
    </div>

  <div className='image-bottom'>
     <div>
        <img src='/images/Loice.png'alt='member-four' className='team-photo'/>
     <div className='caption'>
       <h5>Loice Staice</h5>
      <p> <a href ='https://www.freepik.com/designer/edit?template=9c7fb692-0334-4259-a9a8-312c14cb9d74' className='software'>Software Developer</a></p>
         <p></p>
            </div>
           </div>

   <div>
     <img src='/images/Cynthia.png' alt='member-five' className='team-photo'/>
        <div className='caption'>
         <h5>Cynthia Nthenya</h5>
         <p> <a href ='https://www.freepik.com/designer/edit?template=9c7fb692-0334-4259-a9a8-312c14cb9d74' className='software'>Software Developer</a></p>
        </div>
        </div>
        </div>


    <div className='container'>
    <div className="footer">
      <div className="footer-text">
        <div className='headers'>
        <h1>Subscribe To Our Newsletter</h1>
        <br></br>
        <p className='header2'>To get newly updated news</p>
        </div>
         <div className="signup">
          <input className="text" type="text-footer" placeholder="Enter email address" />
          <button className='button'>Send</button>
        </div>
        </div>
    
      <div className="contact-info">
      
      <div className='footer-nav'>
      <div className="navigation">
      <ul>Home</ul>
      <ul>Video</ul>
      <ul>Writting</ul>
      <ul>Podcast</ul>
      <ul>Portfolio</ul>
      </div>

      <div className="navi-gation">
      <ul>Cellphone</ul>
      <ul>+254707416386</ul>
      <ul>Tellphone</ul>
      <ul>+254107839749</ul>
      </div>

      <div className='socials'>
      <img src="/images/Quantum Logo.jpg" className='logo-footer' />
       <p className='logo-words'>@quantumteam.gmail.com</p>
       <p className='logo-words'> Quantum Team</p>
      </div>

      <div className='social'>
      <img src="/images/instagram.jpeg" className='footer-logo' />
      <img src="/images/linked.png" className='footer-logo' />
      <img src="/images/twitter.png" className='footer-logo' />
      <img src="/images/youtube.png" className='footer-logo' />
      </div>
      </div>
      </div>
    </div>
    </div>

        </div>



        
        </div>
      
    )
}

export default Resumes;










        
    