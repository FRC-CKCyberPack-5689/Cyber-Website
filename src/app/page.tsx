'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Zap, Shield, ChevronRight, Award, Box, ZapOff } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const matchVideos = [
    'BceDgHKz4ss', // Qual 18 - Niagara (Great scoring run)
    'bhlG-D6SnNY', // Qual 2 - Niagara (Solid defense)
  ];
  const [playlist, setPlaylist] = useState('');

  useEffect(() => {
    // Shuffle the array
    const shuffled = [...matchVideos].sort(() => Math.random() - 0.5);
    // Join them into a comma-separated string for the YouTube API
    setPlaylist(shuffled.join(','));
  }, []);

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
    <main className="min-h-screen selection:bg-blue-100">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold mb-8">
            <Zap size={14} fill="currentColor" /> ONTARIO DISTRICT COMPETING TEAM
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900">
            CK Cyber Pack <br /> <span className="text-blue-600 italic">FRC #5689</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl mb-10 leading-relaxed font-medium">
            Building more than just robots. We’re developing the technical leaders of tomorrow
            through the FIRST Robotics Competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            {/* Support/Sponsor Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95">
              Support The Pack <ChevronRight size={20} />
            </button>

            <a
              href="https://github.com/FRC-CKCyberPack-5689"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-slate-900 px-10 py-4 rounded-xl font-bold border border-slate-200 shadow-sm transition-all hover:border-blue-300 flex items-center justify-center gap-2 group"
            >
              {/* Official GitHub SVG Icon */}
              <svg
                height="20"
                width="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="group-hover:text-blue-600 transition-colors"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Team GitHub
            </a>
          </div>
        </div>
      </section>

      {/* What is FIRST Section with Video Carousel */}
      <section className="py-24 px-6 bg-white overflow-hidden" id='first'>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: The Explanation */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
                More Than Robots<sup>SM</sup>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                The Ultimate <span className="text-blue-600 uppercase">Sport for the Mind</span>
              </h2>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  The <span className="text-slate-900 font-bold">FIRST® Robotics Competition (FRC)</span> combines the excitement of sport with the rigors of science and technology. It’s as close to real-world engineering as a student can get.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Gracious Professionalism */}
                  <div className="p-6 border-l-4 border-blue-600 bg-slate-50 rounded-r-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                      <h4 className="font-black text-slate-900 uppercase tracking-tight italic">Gracious Professionalism®</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A way of doing things that encourages high-quality work, emphasizes the value of others,
                      and respects individuals and the community. With Gracious Professionalism, fierce
                      competition and mutual gain are not separate objectives.
                    </p>
                  </div>

                  {/* Coopertition */}
                  <div className="p-6 border-l-4 border-blue-600 bg-slate-50 rounded-r-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                      <h4 className="font-black text-slate-900 uppercase tracking-tight italic">Coopertition®</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Displaying unqualified kindness and respect in the face of fierce competition.
                      Coopertition is founded on the concept and a philosophy that teams can and
                      should help and cooperate with each other even as they compete.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="https://www.firstinspires.org/robotics/frc"
                  target="_blank"
                  className="text-blue-600 font-bold flex items-center gap-2 hover:underline underline-offset-4"
                >
                  Explore the Impact of FIRST <span className="text-xl">→</span>
                </a>
              </div>
            </div>

            {/* Right: Autoplay Video Carousel */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video">
                {/* The dynamic playlist embed */}
                {playlist && (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${playlist.split(',')[0]}?autoplay=1&mute=1&loop=1&playlist=${playlist}&controls=0&modestbranding=1&rel=0`}
                    title="CK Cyber Pack Action"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* Engineering Aesthetic Accents */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-blue-200 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-blue-200 -z-10"></div>

              <p className="mt-4 text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                Check out some of our past events!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: The Story */}
            <div>
              <h2 className="text-4xl font-black mb-8 text-slate-900 tracking-tight uppercase">
                A Legacy of <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Innovation</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Established in <span className="text-slate-900 font-bold">2015</span>, the CK Cyber Pack (Team 5689) was born
                  from a vision to bring high-level competitive robotics to the heart of Chatham-Kent.
                  We hit the ground running, earning the <span className="text-blue-600 font-bold">Rookie All-Star Award</span> in
                  our inaugural season.
                </p>
                <p>
                  We are built differently. Unlike traditional school clubs, we are <span className="text-slate-900 font-bold">100% community-funded</span>.
                  Every bolt, motor, and line of code is made possible through the generous support of local
                  businesses and individuals who believe in the future of our youth.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
                  <p className="text-blue-900 font-medium italic">
                    "We aren't just one school; we are a community. Our students represent multiple school boards
                    and towns across the municipality, coming together in a shared shop to build,
                    break, and innovate."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Awards & Stats */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-4">The Trophy Case</h3>

              <div className="grid gap-4">
                {[
                  { year: '2015', award: 'Rookie All-Star Award', event: 'Ontario District' },
                  { year: '2016', award: 'Creativity Award', event: 'North Bay District' },
                  { year: '2018', award: 'Quality Award', event: 'Windsor Essex District' },
                  { year: '2024', award: 'Innovation in Control', event: 'Western University' },
                  { year: '2025', award: 'Rising All-Star Award', event: 'ONT District Niagara College Event' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className="bg-blue-600 text-white font-black px-3 py-1 rounded text-sm shrink-0">
                      {item.year}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{item.award}</div>
                      <div className="text-slate-400 text-sm">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Community Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-900 rounded-2xl text-white">
                  <div className="text-3xl font-black text-blue-400">100%</div>
                  <div className="text-xs uppercase font-bold tracking-tighter opacity-70">Community Funded</div>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl text-white">
                  <div className="text-3xl font-black text-blue-400">5+</div>
                  <div className="text-xs uppercase font-bold tracking-tighter opacity-70">Schools Represented</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stable Legacy Timeline */}
      <section id="legacy" className="py-24 bg-slate-50 border-y border-slate-200 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">The Development Log</h2>
            <p className="text-slate-500 font-medium italic">Tracing 11 years of student led engineering in Chatham-Kent</p>
          </div>

          {/* The Timeline Container */}
          <div className="relative border-l-2 border-blue-200 ml-6 space-y-12">

            {/* 2015 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.75 top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-blue-600 leading-none">2015</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">The Spark</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">
                  Team 5689 is founded. We took the Ontario District by storm, winning the
                  <span className="text-slate-900 font-bold"> Rookie All-Star Award</span> in our inaugural season.
                </p>
              </div>
            </div>

            {/* 2016 - 2018 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.75 top-1 w-5 h-5 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-400 leading-none">2016 - 2018</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Refining the Process</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">
                  Focused on mechanical reliability. Earned the <span className="text-slate-900 font-bold">Creativity Award</span> (2016)
                  and the <span className="text-slate-900 font-bold">Quality Award</span> (2018) for our robust designs.
                </p>
              </div>
            </div>

            {/* 2022 - 2024: The System Reboot */}
            <div className="relative pl-8" id="reboot-entry">
              <div className="absolute -left-2.75 top-1 w-5 h-5 rounded-full bg-slate-200 border-4 border-white shadow-sm"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-300 leading-none tracking-tighter uppercase">2022 — 2024</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 uppercase italic underline decoration-blue-600/30">The Great Reset</h3>

                <div className="space-y-4">
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    After a three-year offline period, the Pack faced the monumental task of rebuilding from the ground up.
                    Restarting meant reclaiming our shop space and working tirelessly to restore the community
                    connections that had faded during the gap.
                  </p>

                  <div className="bg-blue-50/50 border-l-4 border-blue-600 p-5 rounded-r-xl shadow-sm">
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      We are incredibly grateful for our <span className="text-slate-900 font-bold">returning mentors</span> who
                      refused to let the program fade. A massive thank you goes out to the
                      <span className="text-blue-600 font-bold"> new mentors and parents</span> volunteering
                      their time; your dedication is the primary fuel keeping this team running and
                      growing into the 2026 season.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2025: Rising Stars at Niagara */}
            <div className="relative pl-8">
              <div className="absolute -left-2.75 top-1 w-5 h-5 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-400 leading-none">2025</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 uppercase">Rising All-Stars</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">
                  At the <span className="text-slate-900 font-bold">ONT District Niagara College Event</span>, the Pack
                  was honored with the <span className="text-blue-600 font-bold">Rising All-Star Award</span>.
                  This celebrated our team's rapid growth and our success in establishing a permanent,
                  multi-school robotics program within the Chatham-Kent community.
                </p>
              </div>
            </div>

            {/* 2026 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.75 top-1 w-5 h-5 rounded-full bg-blue-600 animate-pulse border-4 border-white shadow-sm"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-blue-600 leading-none">2026</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 uppercase">REBUILT</h3>
                <p className="text-slate-500 mt-2 leading-relaxed italic">
                  Integrating PhotonVision, REV Vortex motors, and the collective grit of students from across Chatham-Kent.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-24 px-6 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: The Roster & Story */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                  Meet the <span className="text-blue-600">Pack</span>
                </h2>
                <div className="h-1 w-20 bg-blue-600"></div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed">
                The <span className="text-slate-900 font-bold uppercase">CK Cyber Pack</span> is a community-based collective.
                We bring together students from across Chatham-Kent high schools—pooling our skills,
                tools, and grit to compete at the highest level of FRC.
              </p>

              {/* Team "Specs" Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  <h4 className="font-black text-blue-600 uppercase text-xs tracking-widest mb-1">The Students</h4>
                  <p className="text-sm text-slate-500 font-medium">Designers, programmers, and builders from multiple local secondary schools working as one unit.</p>
                </div>
                <div className="p-6 border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  <h4 className="font-black text-blue-600 uppercase text-xs tracking-widest mb-1">The Mentors</h4>
                  <p className="text-sm text-slate-500 font-medium">Industry professionals and educators providing the technical "know-how" to keep the shop running.</p>
                </div>
              </div>

              <div className="pt-4">
                <blockquote className="border-l-4 border-slate-200 pl-4 italic text-slate-400">
                  "We aren't just building a robot; we're building a community of future engineers right here in CK."
                </blockquote>
              </div>
            </div>

            {/* Right: Team Photo Placeholder */}
            <div className="relative group">
              <div className="relative z-10 aspect-4/3 bg-slate-100 border-2 border-slate-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
                {/* REPLACE 'src' with your team photo later */}
                <img
                  src="/team-roster.jpg"
                  alt="CK Cyber Pack Team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // This shows a placeholder if the image isn't found yet
                    e.currentTarget.src = "https://placehold.co/800x600/0f172a/white?text=Drop+Team+Photo+Here";
                  }}
                />
              </div>

              {/* Aesthetic "Technical" Accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-600 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-600 -z-10"></div>

              <p className="mt-4 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Team 5689 — 2026 "REBUILT" Season Roster
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section id="sponsor" className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Support the <span className="text-blue-600">Pack</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Invest in the future of Chatham-Kent. Our team is 100% community-funded,
              and these partnerships make our season possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

            {/* Bronze - $100+ */}
            <div className="blueprint-card p-6 rounded-2xl flex flex-col border-slate-200">
              <div className="text-amber-700 font-black text-xs uppercase tracking-widest mb-2">Bronze</div>
              <div className="text-2xl font-black text-slate-900 mb-4">$100+</div>
              <ul className="text-slate-500 text-xs space-y-3 grow leading-relaxed">
                <li>• Corporate name/logo on social media and website</li>
                <li>• Updates regarding competition progress</li>
              </ul>
            </div>

            {/* Silver - $1,000+ */}
            <div className="blueprint-card p-6 rounded-2xl flex flex-col border-slate-300 bg-slate-50/50">
              <div className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">Silver</div>
              <div className="text-2xl font-black text-slate-900 mb-4">$1,000+</div>
              <ul className="text-slate-500 text-xs space-y-3 grow leading-relaxed">
                <li className="text-slate-900 font-bold italic">All Bronze perks +</li>
                <li>• Recognition in press releases</li>
                <li>• Name/logo listed on team uniform</li>
              </ul>
            </div>

            {/* Gold - $2,000+ */}
            <div className="blueprint-card p-6 rounded-2xl flex flex-col border-yellow-200 shadow-sm">
              <div className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-2">Gold</div>
              <div className="text-2xl font-black text-slate-900 mb-4">$2,000+</div>
              <ul className="text-slate-500 text-xs space-y-3 grow leading-relaxed">
                <li className="text-slate-900 font-bold italic">All Silver perks +</li>
                <li>• Name/logo on robot (if possible)</li>
                <li>• Enlarged logo on website/socials</li>
                <li>• Prominent recognition in press releases</li>
              </ul>
            </div>

            {/* Platinum - $5,000+ */}
            <div className="blueprint-card p-6 rounded-2xl flex flex-col border-blue-200 bg-blue-50/20">
              <div className="text-blue-500 font-black text-xs uppercase tracking-widest mb-2">Platinum</div>
              <div className="text-2xl font-black text-slate-900 mb-4">$5,000+</div>
              <ul className="text-slate-500 text-xs space-y-3 grow leading-relaxed">
                <li className="text-slate-900 font-bold italic">All Gold perks +</li>
                <li>• Name included everywhere event name is mentioned</li>
                <li>• Inclusion in all media coverage</li>
                <li>• Logo on back of volunteer shirts</li>
              </ul>
            </div>

            {/* Diamond - $8,000+ */}
            <div className="blueprint-card p-6 rounded-2xl flex flex-col bg-slate-900 text-white border-none shadow-xl">
              <div className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">Diamond</div>
              <div className="text-2xl font-black mb-4">$8,000+</div>
              <ul className="text-slate-400 text-xs space-y-3 grow leading-relaxed">
                <li className="text-blue-400 font-bold italic">The Ultimate Partnership +</li>
                <li className="text-white">• Personal visit from our robot and the team to your business</li>
                <li className="text-white">• Behind the scenes look into what we do</li>
              </ul>
            </div>

          </div>
        </div>
        {/* Support Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-0.5 rounded-2xl bg-linear-to-r from-blue-600 to-blue-400 shadow-xl shadow-blue-100 transition-transform hover:-translate-y-1">
            <a
              href="mailto:ckcyberpack@gmail.com?subject=Sponsorship Inquiry - [Your Company Name]&body=Hello CK Cyber Pack Team,%0D%0A%0D%0AWe are interested in supporting the team for the 2026 season at the [Insert Level] level. Please send us more information on the next steps.%0D%0A%0D%0AThank you!"
              className="block bg-white hover:bg-slate-50 text-slate-900 px-12 py-5 rounded-[14px] font-black text-xl uppercase tracking-tight transition-colors"
            >
              Become a Sponsor
            </a>
          </div>

          <p className="mt-6 text-slate-400 text-sm font-medium">
            Questions? Email us at <span className="text-slate-600 font-bold">ckcyberpack@gmail.com</span>
            <br />
            <span className="text-[10px] uppercase tracking-widest opacity-60">Chatham-Kent Robotics Community Team</span>
          </p>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-12 px-6 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          Proudly Chatham-Kent • Team 5689
        </p>
      </footer>
    </main>
  );
}
