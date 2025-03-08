import facebook from '../assets/facebook-icon.svg'
import Instagram from '../assets/Instagram-icon.png'
import googlelogo from '../assets/GoogleDevelopersLogo.svg'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 w-full h-[455px] flex flex-row">
      {/* left section of footer */}  
      <div className='footer-left flex-1/2 flex flex-col  m-3'>
      <div>
      <div className='GoogleLogo flex flex-row'>
        <img src={googlelogo}/>
        <div className='GDGTitle ml-6'>
        <h2 className="text-lg  font-sans font-normal text-[20px]">Google Developer Group</h2>
              <p className=" ml-20 text-[15px] font-sans font-normal">VIT-AP</p>
              </div>
        </div>
        </div>
       <div className='mt-auto footer-left-bottom-social-media flex flex-row gap-6'>
        <img className="w-[16px] h-[16px]" src={facebook}/>
        <img  className="w-[16px] h-[16px]" src={Instagram}/>
       </div>
      </div>
      <div className='footer-right flex-1/2 flex flex-col m-3 mb-8'>
      <div className='footer-right-top-our-info flex flex-row justify-evenly'>
      <div className='services'>
        <h1 className='font-sans font-normal text-[12px] text-[#D3D8DE] mb-8'>Services</h1>
        <p className='text-[14px] '>Feedback Page</p>
      </div>
      <div className='info'>
      <h1 className='font-sans font-normal text-[12px] text-[#D3D8DE] mb-8'>info</h1>
      <p className='text-[14px] '>About us</p>
      <p className='text-[14px] '>Our Team</p>
      <p className='text-[14px] '>Events</p>
      <p className='text-[14px] '>Home</p>
      </div>
      </div>
      <div className='footer-right-bottom-our-info mt-auto flex flex-row justify-between'>
        <div className='contact-email'>
            <p>+91000000000</p>
            <p>gdg@vitapgmail.com</p>
        </div>
        <div className='text-[12px] font-normal font-sans text-[#D3D8DE] mt-auto'>©2025 - Copyright</div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
