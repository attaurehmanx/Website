import React from "react";
import { Button } from "@/components/ui/button"

// export default function bunn() {
//   return (
//     <div>
//       <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Learn More</Button>
//     </div>
//   )
// }

export default function Hero() {
    return(
        <section className="hero bg-gray-900 text-white py-24 px-10">
            <h1 className="text-4xl font-bold mb-4">Hello, I am ATTa ur rehman</h1>
            <p className="text-lg mb-6">A passionate web developer</p>
            {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Learn More
            </button> */}
            <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Learn More</Button>
        </section>
    )
}