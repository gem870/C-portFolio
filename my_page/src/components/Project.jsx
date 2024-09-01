import menu from './assets/work station.jpg';
import hamb from './assets/hamburger.png'

const Project = () => {
    return ( 
        <div className="text-white  flex flex-col items-center justify-center py-10  ">
           

            <div className="md:flex relative shadow-custom">
                {/* <div className="border-2 bg-[#0e463e] ml-[230px] md:m-4 rounded-full h-[50px] w-[50px] md:w-[70px] md:h-[70px] absolute z-10 mt-[-20px] md:mt-[-30px] md:ml-[40px]">
                        <img src={hamb} alt="" className='w-5 ml-[13px] md:w-10 mt-[14px] md:mt-[12px] md:ml-[14px]'/>
                </div> */}
                <div className=" h-[450px] w-[280px] md:w-[800px] m-2 flex justify-end rounded-md">

                <div className="flex items-center justify-center w-full h-[450px] bg-cover bg-center border rounded-md md:w-[800px]">
                    <img
                         src={menu}
                        alt="Full Image"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>


                    <div className=" flex flex-col h-[450px] w-[280px]  md:max-w-[450px] absolute  bg-gray-900 bg-opacity-60 rounded-md">
                      
                      <div>
                       <h2 className='font-bold text-gray-900 text-xl p-1 pt-3'>Title of the project.</h2>
                       <div className='h-[330px]'>
                       <p className='text-gray-300 pl-4'>  sit amet consecteturLorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui adipisci quis reiciendis consectetur adipisicing elit. Aliquid qui adipisci quis reiciendis aliquam quibusdam omnis quaerat laboriosam tenetur nemo.</p>
                       </div>
                      </div>

                      <div className='p-4'>
                       <button className='bg-[#04b099] p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110'>Access ..</button>
                     </div>
                   </div>

                </div>

                
            </div>


        </div>
     );
}
 
export default Project;