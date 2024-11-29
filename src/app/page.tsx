import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Explore & Manage</h1>
          <p className="text-lg mb-6">
            Your platform for exploring user-generated content—users, albums, and photos—all in one place.
          </p>
          <div>
            <Link href="/login" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">Get Started</Link>
            <a href="#features" className="ml-4 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600">Learn More</a>
          </div>
        </div>
      </header>


      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m8-4a4 4 0 110-8 4 4 0 010 8z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">View User Profiles</h3>
              <p className="text-gray-600">Discover user details and see their album summaries with ease.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16h16M4 12h8m-8 4h16m-2 0a9 9 0 110-18 9 9 0 010 18z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore & Edit Photos</h3>
              <p className="text-gray-600">Browse photos and update their details quickly and efficiently.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 6.75a6 6 0 11-3.1 11.392M3 9h18"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">Enjoy a seamless experience across mobile, tablet, and desktop devices.</p>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Explore & Manage. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:text-white">Facebook</a>
            <a href="#" className="mx-2 hover:text-white">Twitter</a>
            <a href="#" className="mx-2 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
