import { useState } from "react";
import MessageIcon from './assets/mail.png';

const Message = () => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[mail, setMail] = useState("");
    const[message, setMessage] = useState("");
    const[isPending, setIsPending] = useState(false);  // write code that will store data to the database and use setIsPending to set button click


    const handlwSubmit = (e) =>{
        e.preventDefault();
    }

    return ( 
        <div className=" text-gray-500 text-[20px] mt-20 mb-10 mx-auto text-center flex flex-col justify-center shadow-custom ">
            <h2 className="p-5 font-bold text-[15px] md:text-[15px]">I would love to here from you.</h2>

           <form onSubmit={handlwSubmit}>
           <div className="mx-auto  justify-center">

                <div className="md:flex">
                <div className="block mt-1">
                    <input value={firstName} required onChange={(e) => setFirstName(e.target.value)} className="my-1 md:ml-2 md:my-1 py-2 bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="first name"/> <br />
                    <input  value={lastName} required onChange={(e) => setLastName(e.target.value)} className="my-1 md:ml-2 md:my-6 py-2 bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="last name"/>  <br />
                    <input  value={mail} required onChange={(e) => setMail(e.target.value)} className="my-1 md:ml-2 md:my-1 py-2 bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="mail"/> 
                </div>

                <div className="md:mx-3">
                    <textarea placeholder="message" value={message} required onChange={(e) => setMessage(e.target.value)} className="px-[10px] mt-2 md:w-[255px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500 h-[200px]"></textarea>
                </div>
                </div>

                <div className="p-2 md:flex">
                {!isPending && <button type="submit"  className="bg-[#10c2aa] mb-2 px-[60px] mr-1 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Submit</button>}
                {isPending && <button disabled className="bg-[#215c54] mb-2 px-[60px] mr-1 md:px-10 p-1 rounded-md text-black"><img src={MessageIcon} className="w-10" alt="" /></button>}
                    <a 
                      href="Resume.pdf"
                      download="Emmanuel Victor"
                    ><button className="bg-[#10c2aa] px-2 md:px-5 p-2 md:ml-[150px] rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Download Resume</button></a>
                </div>
                
            </div>    
           </form>
            
            
        </div>
     );
}
 
export default Message;