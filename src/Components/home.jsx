import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React,{useState} from 'react';
import { ChromePicker } from 'react-color';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';


export default function Home() {

        const [color, setColor] = useState('#ffffff');
        const [displaycolor, setDisplaycolor]= useState('#ffffff')
        const [showPicker, setShowPicker] = useState(false);


        const handleColorChange = (newColor) => {
            setColor(newColor.hex);
          };
          
      
        const togglePicker = (event) => {
            event.preventDefault();
          setShowPicker(!showPicker);
        };

        const ChangeColor = (event)=>{
            event.preventDefault();
            setDisplaycolor(color);
        }
    
  return (

    <>
    <h1 style={{color:displaycolor}}>Color Changing Form</h1>
<div className='form-billing' style={{backgroundColor:displaycolor}} onClick={()=>{
    if(showPicker==true){
        setShowPicker(false)
    }
}}>
    <p>Billing Details</p>
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput className='mb-4' type='email' id='typeEmail' label='Email' />
      <MDBInput label='Address' id='typeText' type='text' className='mb-4'/>
      <MDBInput label='Phone number' id='typePhone' type='tel' className='mb-4' />


            <div className='showcolor mb-4' onClick={togglePicker}>
                <div className='colordisplay' style={{backgroundColor:color}}>

                </div>
            </div>
      {showPicker && (
        <ChromePicker className='picker mb-4' color={color} onChange={handleColorChange}/>
      )}
     

    

      <MDBBtn type='submit' className='mb-4' block onClick={ChangeColor}>
        Change Color
      </MDBBtn>

    </form>
    </div>
    </>
  );
}