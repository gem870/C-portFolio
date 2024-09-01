import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css'; // Choose a theme







const BlogDetails = () => {

    useEffect(() => {
        hljs.highlightAll(); // This will apply the syntax highlighting to your code block
      }, []);
    
      const copyCode = () => {
        const codeBlock = document.getElementById('codeBlock').innerText;
        navigator.clipboard.writeText(codeBlock).then(() => {
          alert('Code copied to clipboard!');
        });
      };


    return ( 
        <div>
            <div className="md:flex">
                <div className="border border-gray-500 p-2 mx-4 h-[230px] rounded-md md:w-[40%] md:ml-20 lg:ml-40 lg:h-[300px] xl:h-[400px]">
                    
                </div>

                <div className=" p-2 mx-10 h-[300px] scroll-container text-gray-500 md:w-[50%] md:h-[50%] md:mr-20 lg:mr-40 ">
                    <h2 className="font-bold text-[23px] text-[#fa2d5d]">The rose birth</h2>
                    <p className="p-2 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, distinctio consequuntur quam doloremque nulla cum unde nisi aliquid, ad amet praesentium tempore hic labore deserunt harum debitis iusto facilis dolores. Tempore non explicabo eius ipsum numquam omnis earum! Possimus, facilis. Soluta facilis quisquam cumque harum facere vero minus saepe ducimus magnam incidunt odit a! Iste fugiat cumque quis blanditiis odio! Dicta et quibusdam earum magni. Suscipit, enim minima. Ratione enim, exercitationem quis natus, nihil modi deleniti soluta, a tempore sint accusantium dolor ut hic minima fugiat quisquam? Dolore, fuga.</p>

    <div className="relative bg-[#05070a] text-gray-500 p-2 rounded-md overflow-x-auto font-mono text-sm">
        
        <button
            onClick={copyCode}
            className="absolute top-2 right-2 bg-gray-700 bg-opacity-60 text-gray-300 px-2 py-1 rounded-full text-xs hover:bg-gray-700"
        >
            Copy
        </button>

        <pre id="codeBlock">
            <code className="language-C++ ">
            {`#include <iostream>
            using namespace std;

            int main() {
                cout << "Hello, World!" << endl;
                return 0;
            }`}
            </code>
        </pre>

     </div>

                </div>

            </div>
        </div>
     );
}
 
export default BlogDetails;