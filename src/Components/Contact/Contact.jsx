import React, {useState} from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
const Contact = () => {
    const [details, setDetails] = useState({
        fname: '',
        femail: '',
        fpass:'',
    });

    const OnchangeEvenet = (e)=>{
        const value = e.target.value;
        const name = e.target.name;

        setDetails((preValue)=>{
            if(name==="Fname"){
                return{
                    fname: value,
                    femail: preValue.email,
                    fpass:preValue.password,
                }
            }

            else if(name==="Email"){
                return{
                    fname: preValue.fname,
                    femail: value,
                    fpass:preValue.password,
                }
            }

            else{
                return{
                    fname: preValue.fname,
                    femail: preValue.email,
                    fpass:value,
                }
            }
        });

    };
  return (
    <>
      <Navbar />
      <Hero title='Contact Us' text='Contact Us To Be Our Member'/>

      <div className="contact">
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" value={details.fname} onChange={OnchangeEvenet} name="Fname" placeholder='Name' />
            <input type="email" value={details.femail} onChange={OnchangeEvenet} name="Email" placeholder='@Email' />
            <input type="password" value={details.fpass} onChange={OnchangeEvenet} name="Password" placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
