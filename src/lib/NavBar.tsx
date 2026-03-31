'use client';

import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            // Make sure these IDs exactly match your <section id="..."> tags
            const sections = ['about', 'legacy', 'sponsor', 'first'];

            // We increase the offset (150) to trigger the change a bit earlier
            const scrollPosition = window.scrollY + 150;

            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    // If our scroll position is within the bounds of this section
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'What is FIRST', id: 'first' },
        { name: 'About', id: 'about' },
        { name: 'History', id: 'legacy' },
        { name: 'Sponsors', id: 'sponsor' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo / Brand */}
                <div className="font-black text-xl tracking-tighter text-slate-900">
                    CK<span className="text-blue-600">CYBERPACK</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`text-sm font-bold transition-colors ${activeSection === link.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#sponsor" className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-all">
                        Sponsor Us
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="flex flex-col gap-4 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-bold ${activeSection === link.id ? 'text-blue-600' : 'text-slate-600'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="mailto:ckcyberpack@gmail.com"
                        className="mt-2 bg-blue-600 text-white text-center py-4 rounded-xl font-bold"
                    >
                        Contact Team
                    </a>
                </div>
            </div>
        </nav>
    )
}