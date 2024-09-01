import myPic from './assets/vitor.png'


const About = () => {
    return ( 
       <div>
          <div className=" max-w-[800px] mt-[-96px] w-full h-[500px] mx-auto text-center flex flex-col justify-center mb-[130px] md:mb-[70px]">

          <div className="grid md:flex  min-w-10 items-center justify-center h-[800px] ]">

                <div className="border-2 border-[#04b8b2] m-4 mt-10 h-[300px] md:h-[250px] w-[350px] rounded-3xl md:mt-[-250px] flex items-center justify-center  bg-cover bg-center">
                <img
                     src={myPic}
                        alt="Full Image"
                        className="w-full h-full object-cover  rounded-3xl"
                    />
                </div>

                <div className="scroll-container p-2 border   border-gray-600 m-2  h-[200px] md:h-[500px] md:w-[1000px] rounded-md bg-[#000000] text-gray-500">
                    <p>L assumenda accusamus commodi ipsum, totam facere? Magnam nisi blanditiis veniam odit maiores doloremque ullam quae, repellat ipsam assumenda magni ratione corrupti doloribus fuga soluta ipsa non at iure eius nulla velit facere reiciendis. Recusandae aliquid fugit iste ullam sit quo. Eum saepe architecto dicta inventore perferendis alias veritatis sit non, quod obcaecati quisquam. Eos ducimus excepturi eaque sit reiciendis. Provident quaerat facilis quisquam. Ipsa odio eum voluptates? Provident voluptates sapiente dignissimos, at sunt sed obcaecati hic? Qui officia autem tenetur adipisci omnis impedit quos consequatur numquam sit maiores, repellat odit, unde doloribus obcaecati maxime repudiandae deserunt iure voluptates? Esse distinctio error delectus quo culpa minus provident possimus nihil voluptate architecto obcaecati nulla quasi nisi repellat neque, non eveniet nam excepturi, placeat eum earum perspiciatis. Delectus, soluta recusandae expedita fuga eos in temporibus saepe optio voluptatum dolorum earum fugit repudiandae voluptatem perspiciatis illo unde non. Soluta, earum mollitia ea reiciendis ducimus cum odit? Blanditiis laudantium fuga odit? Eum, tempore consectetur.</p>
                    
                </div>

                <div className="border-b border-b-slate-700 m-4 h-[200px] md:w-[200px] text-gray-500">
                    <label className="ml-[-50px]">Skills:</label>
                    <ul className="text-[#10c2aa]">
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300">C++</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300">Qt/Qml</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300">Python</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300">React</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300">Git</li>
                    </ul>
                </div>

           </div>
        </div>
       </div>
     );
}
 
export default About;