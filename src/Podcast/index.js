import './index.css'

const Cast = () => {
    return(
<>

     <div className='podcast'>

     {/* <div className='pod'>
        <img src='/images/PODCAST-GUIDE-new-2.avif'/>
        </div> */}

<div className="podcasts">
            <div className="one-episode">
            <div className="cast">
        <img src='/images/PODCAST-GUIDE-new-2.avif' alt=" showing a book for trevor noah" className="love"/>
        </div>
        <div className="cast1">
        <img src='/images/technology.jpeg' alt=" showing a book for trevor noah" className="love"/>
        </div>
        <div className="cast2">
        <img src='/images/life.jpg' alt=" showing a book for trevor noah" className="love"/>
        </div>
        </div>


        <div className='text'>
            <div className='text-text'>
        <h2>Welcome to Our Podcast</h2>
        <div>
        Hello, We are Techchix, and welcome to the ‘The Women In Tech’ podcast,where we cover all things robotic in K12 education! Today we have the young women, who are software Developers, and semi-professional Battle Bot makers. We’re going to talk about the latest news of women in tech and how some of them got started to become who they are now. I’m looking forward to an interesting fun interview with tech women.

        </div>
   
        <p id='follow'>follow us www.quantum.com</p>
        </div>
        <div id='episodes'>
        <button><h1>Episodes</h1>
            <h2>1. Episode 1<a href= "https://drive.google.com/file/d/1k-jWPv2J3DF5wNSEqqJ_Exg6-RmXIcxq/view" id='unfiltered'>:Unfiltered Love in Born  A Crime</a></h2></button>
        </div>
        
        </div>
       

        <div className="one-episode">
            <div className="cast">
        <img src='/images/women.jpg' alt=" showing a book for trevor noah" className="love"/>
        </div>
        <div className="cast1">
        <img src='/images/Love.png' alt=" showing a book for trevor noah" className="love"/>
        </div>
        <div className="cast2">
        <img src='/images/family.jpg' alt=" showing a book for trevor noah" className="love"/>
        </div>
        </div>
        </div>
        
       



       
    
    </div>
    

    </>
    
    )
}

export default Cast;