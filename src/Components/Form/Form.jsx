import React,{useState} from 'react';
import axios from 'axios';

const Form = () => {
    const [test, setTest] = useState({
        title:'',
        body:'',
    });

    const change =(e)=>{
        const value = e.target.value;
        const name = e.target.name;

        setTest((preValue)=>{
            if(name==='Title'){
                return{
                    title:value,
                    body:preValue.body,
                }
            }

            else{
                return{
                    title:preValue.title,
                    body:value,
                }
            }
        });
    };

   const formSubmit = async (e)=>{
        e.preventDefault();

        const Datas ={
            
            test
        };

        try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', Datas);
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
   };

  return (
    <>
      <form action="" onSubmit={formSubmit}>
        <input type="text" value={test.title} onChange={change} name="Title" placeholder='Title' />
        <br />
        <input type="text" value={test.body} onChange={change} name="Body" placeholder='Body' />
        <br />
        <button type='submit'>Click</button>
      </form>
    </>
  );
};

export default Form;
