// components/Footer.tsx
"use client"

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-40  bg-blue-200 dark:bg-neutral-900">
        <hr />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      
        <div>
          <h2 className="text-white text-xl font-semibold">About Me</h2>
          <p className="text-gray-600 mb-4">
            I'm Lav kushwaha, A Full stack web developer and also an Expert of DevOps and Cloud in AWS & GCP
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/lavkumar.lavkumar.355" className="hover:text-white"><Facebook size={20} /></Link>
            <Link href="https://x.com/lavkushwaha2" className="hover:text-white"><Twitter size={20} /></Link>
            <Link href="https://www.linkedin.com/in/lav-kushwaha-b9057b292/" className="hover:text-white"><Linkedin size={20} /></Link>
            <Link href="https://www.instagram.com/lav.ig_/" className="hover:text-white"><Instagram size={20} /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="https://mydevopsjourney01.hashnode.dev/" className="hover:text-white">Blog</Link></li>
            <li><Link href="https://www.linkedin.com/in/lav-kushwaha-b9057b292/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white text-lg font-semibold">Social / Community</h3>
          <ul className="space-y-2">
            <li><Link href="https://discord.com/users/lavkushwaha01" className="hover:text-white">Discord</Link></li>
            <li><Link href="https://github.com/LavKushwaha01" className="hover:text-white">Github</Link></li>
            <li><Link href="https://hashnode.com/@Lavkushwaha01" className="hover:text-white">Hashnode</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start space-x-2">
              <MapPin size={18} className="mt-1" />
              <span>Prayagraj, Uttar Pradesh</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+91 87892 32574</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <span>lavkumar062@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      

    
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
          <p>© 2025 Copyright / Credit </p>
          <p className="text-1xl font-bold">Lav — Built with ❤️ using Next.js & Tailwind</p>
          </div>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
