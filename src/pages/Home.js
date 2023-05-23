import React from 'react'
import main_bg from '../assets/img/main_bg.svg'
import HeroImg from '../assets/img/hero.png'
import '../css/Home.css'

const Home = () => {
    return (
        // <div className='container'>
        //     <section className='hero-section' style={{ background: "white" }}>
        //         <div className='main_bg_img'>
        //             <img src={main_bg} alt="" />
        //         </div>
        //         <div className='hero-img-position'>
        //             <div className='hero-svg-wrapper'>
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1342.114 351.984">
        //                     <g id="Group_18" data-name="Group 18" transform="translate(1657.53 610.723)">
        //                         <path id="Path_5" data-name="Path 5" d="M475.716,562.133l-5.9-249.237H604.977L718.089,487.188h0l-2.383,175.751H597.792L478.768,430.393v141.45Z" transform="translate(-2127.341 -923.618)" fill="#e5dbca" />
        //                         <path id="Path_6" data-name="Path 6" d="M766.39,664.88,737.161,314.436H880.884l91.094,201.609,38-201.609h134.936V664.88h-126.7V413.853L927.124,664.88H861L774.068,460.094V664.88Z" transform="translate(-1988.341 -923.618)" fill="#e5dbca" />
        //                         <path id="Path_7" data-name="Path 7" d="M1156.941,664.88V314.436h106.816s99.01,1.294,132.513,20.845c54.087,31.564,73.258,107.024,73.258,161.343,0,38.374-18.382,109.171-62.886,138.769-56.8,37.776-142.885,29.487-142.885,29.487Z" transform="translate(-1784.944 -924.389)" fill="#e5dbca" />
        //                     </g>
        //                 </svg>
        //             </div>
        //             <div className='hero-img-wrapper'>
        //                 <img src={HeroImg} alt="" />
        //             </div>
        //         </div>
        //     </section>
        // </div>

        <div className="containesr">
            <div className='hero_back_imsg'>
                <img src={main_bg} alt="Responsive Image"  />
            </div>
            <div className='hero-img-wrapper'>
                <img src={HeroImg} alt="" className="overlay-image" />
            </div>
        </div>

    )
}

export default Home