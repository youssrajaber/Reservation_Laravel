import React, { useState,useEffect ,useRef} from 'react'; 
import axios from 'axios'
import logo from '../img/Static.png'
import wp from '../img/Wplanelogo.png'
import p from '../img/Logop.png'
import bar from '../img/Bar.png'
import {useSelector} from 'react-redux';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function FF() {
    const f3 = useSelector(state => state.f3); 
    const f2 = useSelector(state => state.f2); 

    const [dateb1, setDateb] = useState(null);
    const [scity1, setScity] = useState(null);
    const [ecity1, setEcity] = useState(null);
    const [duration1, setDuration] = useState(null);
    const [feh1, setFeh] = useState(null);
    const [clientname1, setClientName] = useState(null);
    const divRef = useRef(null);

    const [ec,setec]=useState([])
    const [arr,setarr]=useState([])
    const fn=f3.fname+' '+f3.lname
    const data={
        Dateb:f3.Dateb,
        Scity:f2.Scity,
        Ecity:f2.Ecity,
        duration:f2.duration,
        feh:f2.feh,
        fsh:f2.fsh,
        classs:f2.classs,
        price:f2.price,
        clientemail:f3.email,
        clientname:fn
     }
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/res_models', data).then(res => {
            setec(res.data.message)
        })
      }, [])

    useEffect(() => {
    setarr(Object.values(ec))
    
    }, [ec]);

    useEffect(() => {
        if (arr.length > 0) {
          setDateb(arr[0]);
          setScity(f2.Scity);
          setEcity(arr[2]);
          setDuration(arr[3]);
          setFeh(f2.feh);
          setClientName(arr[9]);
        }
      }, [arr, f2.Scity, f2.feh, f2.fsh]);
    
    
    const printDiv = () => {
        const input = document.getElementById('myDiv');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape');
            pdf.addImage(imgData, 'PNG', 10, 10);
            pdf.save('download.pdf');
          });
      };
    return (
        <div className='ticket'>
            <h1>Your Air Ticket</h1>
                <main id="myDiv"> 
                <header><img src={logo} alt="" /><h3>Air ticket</h3></header>
                <article>
                    <div>
                        <span><p>Passenger</p><h3>{clientname1}</h3></span>
                        <span><p>Flight</p><h3>Ex423</h3></span>
                        <span><p>Date</p><h3>{dateb1}</h3></span>
                        <span><p>Seat</p><h3>8A</h3></span>
                    </div>
                    <div className='flight'>
                        <strong>{scity1}</strong>
                        <div><img src={p} alt="" /></div>
                        <strong>{ecity1}</strong>
                    </div>
                    <div>
                        <span><p>Gate</p><h3>D 04</h3></span>
                        <span><p>Boarding Time</p><h3>{feh1}</h3></span>
                        <span><p>Duration</p><h3>{duration1}</h3></span>
                    </div>
                </article>
                <div className='cut'>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
                <aside>
                    <div className='barc'><img  src={bar} alt="" /></div>
                    <div>
                        <span><p>Passenger</p><h3>{clientname1}</h3></span>
                        <span><p>Date</p><h3>{dateb1}</h3></span>
                        <aside>
                            <span><p>Flight</p><h3>Ex423</h3></span>
                            <span><p>Seat</p><h3>8A</h3></span>
                        </aside>
                        <span><p>Boarding Time</p><h3>{feh1} AM</h3></span>
                    </div>
                    <div className='vertical'>
                        <strong>{scity1}</strong>
                        <strong><img src={wp} alt="" /></strong>
                        <strong>{ecity1}</strong>
                    </div>
                </aside>
                </main>
                <button onClick={printDiv}>Print</button>
        </div>

    )
}
