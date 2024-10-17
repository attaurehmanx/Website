import { Button } from "@/components/ui/button"
export default function() {
    return(
        <section className="contact py-16 px-6">
            <h1 className="text-3xl font-bold ">Get in touch</h1>
            <form className="space-y-4">
            <input type="text" placeholder="Name"  className="w-full p-2 border-gray-300 mt-1 rounded-md"/>
            <input type="email" placeholder="Email"  className="w-full p-2 border-gray-300  rounded-md" />
            <textarea placeholder="Message" className="w-full p-2 border-gray-300  rounded-md h-24"></textarea>
            {/* <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 font-bold text-white rounded">Send Message</button> */}
            <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Send Message</Button>
            </form>
        </section>
    )
}