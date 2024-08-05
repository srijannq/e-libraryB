import React,{useState} from 'react';
import '../css/Popupd2.css';
const da='/images/400bg.png';
const gi='/images/girl.png';
const ra='/images/ratantata.jpg';
const iki='/images/ikigai.jpg';
const kal='/images/kalkibg.png';
const bio='/images/dhoni.jpg';
const uni='/images/universe.jpg';
const m='/images/ml.jpg';
const Popup=()=>{
    const[isHovered,setIsHovered]=useState(false);
    const[isHovered1,setIsHovered1]=useState(false);
    const[isHovered2,setIsHovered2]=useState(false);
    const[isHovered3,setIsHovered3]=useState(false);
    const[isHovered4,setIsHovered4]=useState(false);
    const[isHovered5,setIsHovered5]=useState(false);
    const[isHovered6,setIsHovered6]=useState(false);
    const[isHovered7,setIsHovered7]=useState(false);

    return(
    <>
        <h3 style={{color:'blue',textAlign:'center', fontFamily:'Poppins'}}><b>"Today a reader, tomorrow a leader." – Margaret Fuller.</b></h3><hr></hr>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <img src={da} alt={da} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered && (
                        <div className="popup"><span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>400 Days</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'19px',fontFamily:'Poppins'}}><b>Chetan Bhagat</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'19px'}}><b>400 days is a romance and mystery story like no other...<br></br>The storyline of the novel is very engaging.</b></span><br></br>
                        <span style={{fontSize:'19px',color:'black'}}><b>Status:</b><span style={{color:'red',fontSize:'19px'}}><b>Available</b></span></span><br></br>
                        <div className="d-flex justify-content-center ">
                       <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:'#DBB5B5',color:'black', marginRight:'10px'}}><b>Borrow</b></button>
                       </div>
                       </div>)}
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>
                        <img src={gi} alt={gi} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered1 && (
                            <div className="popup"><span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>The Girl in Room No.105</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'25px',fontFamily:'Poppins'}}><b>Chetan Bhagat</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'19px'}}><b>This is not a love story. It is an unlove story.<br></br>A mind-blowing fiction..<br></br>It's simply a fun and addicting thriller.</b></span><br></br>
                        <span style={{fontSize:'19px',color:'black'}}><b>Status:</b><span style={{color:'red'}}><b>Available</b></span></span><br></br>
                        <div className="d-flex justify-content-center ">
                       <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:'#DBB5B5',color:'black', marginRight:'10px'}}><b>Borrow</b></button>
                       </div>
                        </div>)}
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}>
                        <img src={ra} alt={ra} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered2 && (
                            <div className="popup"><span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>THE STORY OF TATA</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'19px',fontFamily:'Poppins'}}><b>Peter Casey</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'19px'}}><b>The first and only authorized biography on Tata Group<br></br>This book brings an intimate side of Ratan Tata.<br></br>The reclusive industrialist</b></span><br></br>
                        <span style={{fontSize:'19px',color:'black'}}><b>Status:</b><span style={{color:'red'}}><b>Available</b></span></span>
                        <div className="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:'#DBB5B5',color:'black'}}><b>Borrow</b></button>
                       </div>
                            </div>)}
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}>
                        <img src={iki} alt={iki} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered3 && (
                            <div className="popup"><span style={{color:'black',fontFamily:'Poppins',fontSize:'16px',textAlign:'center'}}><b>IKIGAI</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'16px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'16px',fontFamily:'Poppins'}}><b>Héctor García and Francesc Miralles.</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'16px'}}><b>The Japanese Secret to a Long and Happy Life....</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand',fontSize:'16px'}}><b>Ikigai is a beautifully nuanced concept....</b></span><br></br>
                        <span style={{fontSize:'16px',color:'black'}}><b>Status:</b><span style={{color:'red'}}><b>Available</b></span></span><br></br>
                        <div className="d-flex justify-content-center mt-3 ">
                       <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:'#DBB5B5',color:'black'}}><b>Borrow</b></button>
                       </div>
                        </div>
                        )}
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}>
                        <img src={kal} alt={kal} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered4 && (<div className="popup">
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Kalki</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'19px',fontFamily:'Poppins'}}><b>Kevin Missal</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'19px'}}><b>This book is basically about the fight for good cause.</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand',fontSize:'19px'}}><b> It's very well edited and fast paced.</b></span><br></br>
                        <span style={{fontSize:'19px',color:'black'}}><b>Status:</b><span style={{color:'red'}}><b>Available</b></span></span><br></br>
                        <div className="d-flex justify-content-center ">
                       <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:'#DBB5B5',color:'black'}}><b>Borrow</b></button>
                       </div>
                        </div>
                        )}
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered5(true)}
                        onMouseLeave={() => setIsHovered5(false)}>
                        <img src={bio} alt={bio} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered5 && (<div className="popup">
                            <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>The Dhoni Touch</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'19px',fontFamily:'Poppins'}}><b>Bharat Sundaresan</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'19px'}}><b>The Dhoni Touch reveals an ordinary man living an extraordinary life.<br></br>Te book is a one-time read..</b></span><br></br>
                        <span style={{fontSize:'19px',color:'black'}}><b>Status:</b><span style={{color:'red'}}><b>Available</b></span></span><br></br>
                        <div className="d-flex justify-content-center ">
                       <button type="button" class="btn btn-primary btn-lg"  style={{backgroundColor:'#DBB5B5',color:'black'}}><b>Borrow</b></button>
                       </div>
                        </div>
                        )}
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered6(true)}
                        onMouseLeave={() => setIsHovered6(false)}>
                        <img src={uni} alt={uni} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered6 && (<div className="popup">
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Unlocking The Universe</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'19px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'19px',fontFamily:'Poppins'}}><b>Stephen Hawking,Lucy Hawking</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'19px'}}><b>This book takes us on a journey through space and time.<br></br>An incredible non-fiction book written especially for kids</b></span><br></br>
                        <span style={{fontSize:'19px',color:'black'}}><b>Status:</b><span style={{color:'red'}}><b>Available</b></span></span><br></br>
                        <div className="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:'#DBB5B5',color:'black'}}><b>Borrow</b></button>
                       </div>
                        </div>
                        )}
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                        <div className="image-container"
                        onMouseEnter={() => setIsHovered7(true)}
                        onMouseLeave={() => setIsHovered7(false)}>
                        <img src={m} alt={m} className="img-fluid" style={{width:'450px',height:'300px'}}></img>
                        {isHovered7 && (<div className="popup">
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'15px',textAlign:'center'}}><b>Machine Learning</b></span><br></br>
                        <span style={{color:'black',fontFamily:'Poppins',fontSize:'15px',textAlign:'center'}}><b>Author:</b><span style={{color:'blue',fontSize:'15px',fontFamily:'Poppins'}}><b>S.Sridhar,M.Vijaylakshmi</b></span></span><br></br>
                        <span style={{color:'black',fontFamily:'Edu AU VIC WA NT Hand', fontSize:'15px'}}><b>This book is designed for engineering.<br></br>'Simple Explanation' to topics such as <br></br> clustering.</b></span><br></br>
                        <span style={{fontSize:'15px',color:'black'}}><b>Status:</b><span style={{color:'red'}}><b>Available</b></span></span><br></br>
                        <div className="d-flex justify-content-center ">
                       <button type="button" class="btn btn-primary btn-sm" style={{backgroundColor:'#DBB5B5',color:'black'}}><b>Borrow</b></button>
                       </div>
                        </div>
                        )}
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>

    </>
    )
}
export default Popup