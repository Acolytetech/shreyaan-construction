import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Shreyaan Constructions & Media Projects Pvt. Ltd.
          </h3>
          <p className="text-gray-400">
            Providing construction, civil works, tender execution, media and advertising solutions across Telangana.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="#services" className="hover:text-green-400">Services</Link></li>
            <li><Link href="#projects" className="hover:text-green-400">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p>Email: <span className="text-white">vamshibakki33@gmail.com</span></p>
          <p>Phone: <span className="text-white">8686110050</span></p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Shreyaan Constructions & Media Projects Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
