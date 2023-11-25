import { useRef } from 'react';

const EmailDisplay = ({ contactEmail }) => {
  const emailRef = useRef(null);

  const copyToClipboard = () => {
    emailRef.current.select();
    document.execCommand('copy');
  };
  
  return(
    <section className=" bg-container_color6 mt-20 py-12 rounded-[2rem] text-center px-9 lg:px-10 border-[1.5px] border-solid border-border_color1 ">
        <h3 className="text-[2.2rem] font-bold mb-4 text-highlighted_text_color">Mi dirección de correo</h3>
        <p>Si estás ocupado ahora, puedes guárdala con un sencillo click 😉 ¡Espero escuchar de ti pronto!</p>
    <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mt-4">
        <div className='w-full transparentInput bg_white'>
          <input 
            className='bg-[white] bg-opacity-[4%]'
            name={'contactEmail'}
            readOnly
            ref={emailRef}
            type={'text'} 
            value={contactEmail}
          />
        </div>
        <div className='mt-5 lg:mt-0'>
          <button  
            className="button_transparent_rounded shadow-sm shadow-border_color1 hover:shadow-md hover:shadow-neon_color2
            flex justify-center items-center w-fit border-[1.5px] border-solid border-border_color1 bg-[black] bg-opacity-40" 
            onClick={copyToClipboard}
            >
            <span className='hover:text-black'>
              COPIAR
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default EmailDisplay;