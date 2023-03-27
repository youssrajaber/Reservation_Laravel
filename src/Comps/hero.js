import React, { useRef,useEffect } from 'react'
import map from '../img/Mapl.png'
import j from '../img/tokyo.jpg'
import sa  from '../img/south-africa.jpg'
import it  from '../img/italy.jpg'
import w from '../img/wheels.jpg'
import hk from '../img/Hongkong.jpg'
import pl from '../img/pilot.jpg'
import { Link } from 'react-router-dom'


export default function Landing() {
    const ref1=useRef()
    const ref2=useRef()
    const ref3=useRef()
    const screentop=window.innerHeight
    window.addEventListener('scroll',()=>{
        // counting
        let el1t=ref1.current.getBoundingClientRect().top
        if(el1t<screentop){ 
            for(var i=0;i>=12000;i++){
                el1t.current.innerText="+"+i
            }
        }
        let el2t=ref1.current.getBoundingClientRect().top
        console.log(el2t.current)
        if(el1t<screentop){ 
            for(var i=0;i>=73;i++){
                el2t.current.innerText="+"+i
                el2t.current.style.color="red"
            }
        }
        let el3t=ref1.current.getBoundingClientRect().top
        if(el1t<screentop){ 
            for(var i=0;i>=245;i++){
                el3t.current.innerText="+"+i
            }
        }
        
        // animation
        const upanimaton=document.querySelectorAll('.upanim')
        for(var el of upanimaton){
            let top =el.getBoundingClientRect().top
            if(top<screentop){
                el.classList.add('up')
                el.classList.remove('hidden')  
            }
            else{
                el.classList.remove('up')  
                el.classList.add('hidden')  
            }
        }

        const upanimaton1=document.querySelectorAll('.upanim1')
        for(var el of upanimaton1){
            let top =el.getBoundingClientRect().top
            if(top<screentop){
                el.classList.add('up1')
                el.classList.remove('hidden')   
            }
            else{
                el.classList.remove('up1')
                el.classList.add('hidden')   
            }
        }
        
        const upanimaton3=document.querySelectorAll('.op')
        for(var el of upanimaton3){
            let top =el.getBoundingClientRect().top
            if(top<screentop){
                el.classList.add('opc')
                el.classList.remove('hidden')   
            }
            else{
                el.classList.remove('opc')
                el.classList.add('hidden')   
            }
        }

        const el1 =document.querySelector('.simg')
        let top =el1.getBoundingClientRect().top
        if(top<screentop){
            el1.classList.add('wid')
            el1.classList.remove('wh')   
        }
        else{
            el1.classList.remove('wid')
            el1.classList.add('wh')   
        }
    })
  
    return (
      <div>
        <section className="hero-bg"> 
            <section className="hero">
                <div>
                    <h1 className="up">
                        Are you ready to take off ?
                    </h1>
                    <h3 className="up up1">
                        Porro ex aperiam totam praesentium aliquid 
                        corrupti dolore obcaecati ipsam assumenda dicate!
                    </h3>
                    <Link to="/res"className="op">Search for Flights</Link>
                </div>
            </section>
        </section>

        <div className="gra"></div>

        <section className="services">
            <div className="first-child">
                <i id="about" className="op">ABOUT US</i> <br />
                <h2 className="upanim hidden">Plan your Travel with confidence</h2>
            </div>
            <span>
                <div className="simg">
                    <img  src={pl} alt="" />
                </div>
                <div>
                    <p>
                        &nbsp; Accusantium illum iste id nihil, distinctio
                        voluptates maiore satisl ditiis! Cum facilis hic autem 
                        expedita velit ad sint, quos nostrum expedita
                        elit. <br /> Quod fuga
                        amet consectetur adipisicing elit. Odit, neque debitis
                        consectetur eius, adipisicing elit. Quod fuga placeat
                        debitis harum accusantium illum iste id nihil, distinctio
                        voluptates maiores, doloribus obcaecati <br />
                        psum illo veritatisl ditiis! Cum facilis hic autem 
                        expedita velit ad sint, quos nostrum expedita
                        elit. Quod fuga placeat <br />
                        debitis harum accusantium illum iste id nihil, distinctio
                        voluptates maiores, doloribus obcaecati
                        psum illo veritatis quos nostrum
                    </p>
                    <div className="about">
                        <div>
                            <h3 ref={ref1}>+12000</h3>
                            <p>Happy Customer per year</p>
                        </div>
                        <div>
                            <h3 ref={ref2}>+73</h3>
                            <p>Destinations</p>
                        </div>
                        <div>
                            <h3 ref={ref3}>+245</h3>
                            <p>Flight per year</p>
                        </div>
                    </div>
                </div>
            </span>
        </section>

        <section className="dest" id="serv">
        <div className="first-child">
                <i className="op">Destenations</i> <br />
            <h2 className="upanim hidden">Top Destinations of this month</h2>
            </div>
            <div className="span">
                <div className="des">
                    <img src={hk} alt="" />
                    <p className="befor"></p>
                    <h3 className="destitle">HANG KONG</h3>
                </div>
                <div className="des">
                    <img src={j} alt="" />
                    <p className="befor"></p>
                    <h3 className="destitle">JAPAN</h3>
                </div>
                <div className="des">
                    <img src={sa} alt="" />
                    <p className="befor"></p>
                    <h3 className="destitle">SOUTH AFRICA</h3>
                </div>
                <div className="des">
                    <img src={it} alt="" />
                    <p className="befor"></p>
                    <h3 className="destitle">ITALY</h3>
                </div>
                <div className="des">
                    <img src={w} alt="" />
                    <p className="befor"></p>
                    <h3 className="destitle">WALES</h3>
                </div>
            </div>
        </section>

        <section className="news-bg">
            <section className="news">
                <header>
                    <i className="op">Subscribe</i>
                    <h2 className="upanim hidden">Subscribe to our news letter</h2>
                    <h3 className="upanim1 hidden">So you don't miss any new offers,news and more </h3>
                </header>
                <div>
                    <input type="text" placeholder="Your Email Here..."/><button>Subscride</button>
                </div>
            </section>
        </section>
        

        <section className="testm">
            <header>
                <i className="op">Testimonials</i>
                <h2 className="upanim hidden">What our customers says about us?</h2>
            </header>
            <main>
                <div className="content-w">
                    <div className="test-des">
                        <h3>
                            praesentium consectetur amet quam excepturi <br />
                            laborum ut corrupti magnam iste illum culpa ex inventore hic perspiciatis saepe delectus! Architecto
                        </h3>
                    </div>
                    <div  className="content">
                        <span>
                            <p>
                                " <br />&nbsp; iste in quibusdam veniam, placeat oluta quibusdam veniam"
                                odit repellendus autem voluptatem est Provident!
                                Hic tenetur soluta quibusdam veniam, voluptatem est Provident placeat odit 
                            </p>
                            <p>Linda Adams</p>
                        </span>
                        <span>
                            <p>
                                " <br />&nbsp; voluptatem est Provident! Hic tenetur soluta 
                                quibusdam in repellendus autem voluptatem est Provident!
                                Hic tenetur soluta quibusdam veniam, placeat odit 
                            </p>
                            <p>Linda Adams</p>
                        </span>
                        <span>
                            <p>
                                " <br />&nbsp; iste in repellendus autem voluptatem est Provident!
                                Hic tenetur soluta quibusdam veniam, placeat odit 
                            </p>
                            <p>Linda Adams</p>
                        </span>
                    </div>
                    {/* gg */}
                    <div>
                        <span>
                            <div className="prev"><h2>←</h2></div>
                            <div className="next"><h2>→</h2></div>
                        </span>
                    </div>
                </div>
                <div className="map">
                    <img src={map} alt="" />
                </div>
            </main>
        </section>

        <div className="cal-t-a-bg">
        <section className="cal-t-a">
                <div>
                    <header>
                        <i className="op">Reserve</i>
                        <h2 className="h2s upanim hidden">
                            Its time to Discover the world <br /> Find and book great <br />
                            experience
                         </h2>
                    </header>
                        <a href="/res"><button className="upanim1">Explore Flights</button></a>
                </div>
                <span>
                    <div className="company">
                        <h2>
                          North Flights
                        </h2>
                        <a href="" disabled>link </a>
                        <a href=""> link</a>
                        <a href="">link </a>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <a href="">Email</a>
                        <a href="">Support</a>
                        <a href="">Location</a>
                    </div>
                    <div>
                        <h2>About</h2>
                        <a href="">Privacy Policy</a>
                        <a href="">Company</a>
                        <a href="">FAQ</a>
                    </div>
                    <div>
                        <h2>Social</h2>
                        <a href="">Twitter</a>
                        <a href="">Facebook</a>
                        <a href="">LinkedIn</a>
                    </div>
                </span>
                <footer>
                    <hr />
                    <h3>Made By SP_ES Team® 2023</h3>
                </footer>
            </section>
        </div>
       
      </div>
  )
}
