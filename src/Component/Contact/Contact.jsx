import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <div>
			<Helmet> <title> Contact | Find Your Dream Home </title> </Helmet>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 my-10 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
			<div className="text-gray-600">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img  data-aos="fade-right" src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form  data-aos="fade-left" noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded " />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded "></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-indigo-600 text-gray-50">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;