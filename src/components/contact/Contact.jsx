import React,{useRef,useState} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();
    const [done ,setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_06gypmk', 'template_9lfah7r', form.current, '_6YQox5SHEiYQ14wb')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div  className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div  className="c-left">
                <h1 className="c-title">
                   Ready for entry level
                </h1>
                <div className="c-info-item">
                    <img src="phonecall.jpg" alt="" className="c-icon" />
                    +972 524011321
                </div>
                <div className="c-info-item">
                    <img src="email.png" alt="" className="c-icon" />
                    matanb2296@gmail.com
                </div>
                <div className="c-info-item">
                    <img src="map-location.webp" alt="" className="c-icon" />
                    Israel , Yavne Haatzmaut Street
                </div>
            </div>
            <div className="c-right">
                <p  className="c-desc"><b>Hiring ? Need A website ? </b><br/>feel free to contact me , in love with Developing , Designing , Passionate about programming ,
                and allways happy to learn new Technologies/languages </p>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="user_name" id="" />
                    <input type="text" placeholder="Subject" name="user_subject" id="" />
                    <input type="text" placeholder="email" name="user_email" id="" />
                    <textarea name="user_message" placeholder="Massage" rows="5"/>
                    <button>Submit</button>
                    {
                        done && <p className="thanks">Your datails sent Thank You...</p>
                    }
                </form>
            </div>
        </div>
    </div>
  )
}
