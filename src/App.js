

import { useEffect, useRef, useState } from 'react';
import artistInfo from "./assets/artistInfo.svg";
import mission from "./assets/mission.svg";
import goals from "./assets/goals.svg";
import timeline from "./assets/timeline.svg";
import assistant from "./assets/assistant.svg";
import dictionary from "./assets/dictionary.svg";
import search from "./assets/search.svg";
import logo from "./assets/logo.svg";
import prompt from "./assets/prompt.svg";
import tiktok from "./assets/tiktok.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.png";
import coding from "./assets/coding.svg";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-black text-white w-full min-h-[72px] border-b border-gray-700 px-4 md:px-20 flex items-center justify-between relative">
      {/* Hamburger Icon for Mobile */}
      <button onClick={toggleSidebar} className="text-white focus:outline-none md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start">
        <img src={logo} alt="logo" className="w-20 h-12 md:w-24 md:h-14" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 pb-1">
          Home
        </a>
        <a href="#about" className="hover:text-blue-400">
          About Us
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact Us
        </a>
        <a href="#address" className="hover:text-blue-400">
          Address
        </a>
      </div>

      {/* Signup Button */}
      <button className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-full hover:opacity-90 text-sm md:text-base">
        Signup for Beta
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Icon */}
        <button onClick={toggleSidebar} className="absolute -right-8 top-4 text-white p-2 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 p-4">
          <a href="#home" className="hover:bg-blue-400 transition-colors duration-300 p-2 rounded">Home</a>
          <a href="#about" className="hover:bg-blue-400 transition-colors duration-300 p-2 rounded">About Us</a>
          <a href="#contact" className="hover:bg-blue-400 transition-colors duration-300 p-2 rounded">Contact Us</a>
          <a href="#address" className="hover:bg-blue-400 transition-colors duration-300 p-2 rounded">Address</a>
        </div>
      </div>
    </nav>
  );
}


function HeroSection() {
  return (
    <section className="bg-black text-white w-full px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-8 md:gap-[113px] justify-center">
      {/* Left Text Section */}
      <div
        className="text-[32px] md:text-[64px] font-bold text-center md:text-left"
        style={{
          fontFamily: "Plus Jakarta sans",
          width: "100%",
          maxWidth: "540px",
          height: "auto",
        }}
      >
        Crafting Your 
        Musical Journey,
        Word by Word.
      </div>

      {/* Right Image Section */}
      <img
        src={artistInfo}
        alt="Artist Info"
        className="rounded-lg w-[300px] md:w-[500px] h-auto"
      />
    </section>
  );
}


function IntroductionSection() {
  return (
    <section className="bg-black text-white text-center px-4 md:px-8 py-16">
      <h2 className="text-[36px] md:text-[56px] leading-[1] text-center font-bold mb-8 md:mb-12"
      style={{
        fontFamily: "Plus Jakarta Sans",
      }}>
        Introduction to <span className="text-purple-500 italic">LyricLab</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Mission */}
        <div className="inline-flex flex-col justify-center items-center gap-4 px-4">
          <img src={mission} alt="Mission Icon" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}>Mission</h3>
          <p className="text-gray-400 mt-2"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}>
            Unde, quidem asperiores!
              Lorem ipsum dolor sit amet, consectetur adip
          </p>
        </div>

        {/* Goals */}
        <div className="inline-flex flex-col justify-center items-center gap-4 px-4">
          <img src={goals} alt="Goals Icon" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}>Goals</h3>
          <p className="text-gray-400 mt-2"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, quidem asperiores!
          </p>
        </div>

        {/* Development Timeline */}
        <div className="inline-flex flex-col justify-center items-center gap-4 px-4">
          <img src={timeline} alt="Timeline Icon" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}>Development Timeline</h3>
          <p className="text-gray-400 mt-2"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, quidem asperiores!
          </p>
        </div>
      </div>
    </section>
  );
}





function FeatureSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const scrollTop = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Calculate scroll progress as a percentage with smoother transition
        const progress = ((scrollTop - sectionTop) / (sectionHeight - window.innerHeight)) * 100;
        setScrollProgress(Math.max(0, Math.min(progress, 100))); // Clamp between 0 and 100
      }
    };

    const handleSmoothScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleSmoothScroll);
    return () => window.removeEventListener('scroll', handleSmoothScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative flex items-start bg-black text-white px-4 md:px-8 py-10 md:py-16 min-h-screen">
      
      {/* Left Side - Text and Image */}
      <div className="flex-1 flex flex-col items-start text-left">
      <h3 className="text-[20px] font-bold text-purple-500 mb-4">AI-Driven Rhyme Assistant</h3>
        <p className="text-sm md:text-base w-[492px] text-gray-200 leading-relaxed mb-6">
          The AI-Driven Rhyme Assistant will be able to intelligently analyse the context of the lyrics being written by the user and provide dynamic and contextually relevant alternative lyric suggestions in the authentic voice of the user. It will be able to provide aid beyond simple phonetic rhyme matches ensuring the suggested rhymes contribute to the coherence and meaning of the lyrics. It will also be able to analyse bars and verses and offer options of changes that will make the syllable count, structure and rhyme scheme to make the lyrics more optimal and refined.
        </p>
        <div className="w-[300px] md:w-[490px] ">
          <img src={assistant} alt="Assistant" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Center - Vertical Gradient Line with Moving Dot */}
      <div className="relative flex flex-col items-center h-[400px] w-[2px] mx-10 bg-gradient-to-b from-blue-400 to-purple-400">
        <div
          style={{ top: `${scrollProgress}%`, transition: 'top 0.1s ease-out' }}
          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-md"
        ></div>
      </div>

      {/* Right Side - Text and Image */}
      <div className="flex-1 flex flex-col items-start text-left">
      <div className="w-[300px] md:w-[492px] h-auto">
          <img src={prompt} alt="Prompt" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <h3 className="text-[24px] font-bold text-purple-500 mb-4">Prompt-Based Image Assistant</h3>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
          The Prompt-Based Image Assistant enables users to generate images based on specific descriptions and prompts. Leveraging AI technology, it provides quick and unique visuals tailored to users' needs, sparking creativity and enhancing visual storytelling.
        </p>
        
      </div>
      
        <div
          style={{ top: `${scrollProgress}%`, transition: 'top 0.10s ease-in' }}
          className="relative flex flex-col items-center h-[400px] w-[2px] mx-10 left-1/2 transform -translate-x-1/2  bg-blue-500 rounded-full shadow-md"
        ></div>
     
      
    </section>
  );
}




















function CodingSection() {
  return (
    <section className="bg-black text-white w-full px-4 md:px-8 py-16 flex flex-col items-center justify-center">
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10 md:mb-16 p-6 rounded-lg shadow-lg max-w-full md:max-w-[1152px]"
        style={{
          background: "linear-gradient(90deg, #3a86ff 0%, #8338ec 100%)",
          color: "white",
        }}
      >
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={coding} alt="Coding" className="w-full max-w-[300px] md:max-w-[535px] h-auto" />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Benefits of Joining Beta</h3>
          <ul className="text-base md:text-lg text-gray-200 mb-6 space-y-2">
            <li>1. Early Access to Cutting-Edge Technology</li>
            <li>2. Opportunity to Shape the Platform</li>
            <li>3. Exclusive Features and Updates</li>
            <li>4. Community Engagement</li>
            <li>5. Personalized Support</li>
          </ul>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 md:px-6 rounded-full hover:bg-gray-200">
            Join our Beta Program
          </button>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  // Array of questions and answers
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Odio pharetra risus fringilla at vitae.',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Elementum nulla vel eget commodo. Sed venenatis quisque vivamus auctor scelerisque. Facilisi orci dignissim laoreet dolor at.',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Answer to question 2 goes here.',
    },
    {
      question: 'Lorem ipsum dolor sit amet',
      answer: 'Answer to question 3 goes here.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Sed.',
      answer: 'Answer to question 4 goes here.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="bg-black text-white flex justify-center px-4 py-24"
      style={{
        fontFamily: "Plus Jakarta sans",
      }}
    >
      <div className="w-full max-w-[700px]">
        <h2
          className="text-[36px] md:text-[56px] leading-tight text-center font-bold mb-8 md:mb-12"
          style={{
            fontFamily: "Plus Jakarta sans",
          }}
        >
          Frequently <span className="text-blue-400">Asked</span> Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-semibold text-lg focus:outline-none flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedIndex === index && (
                <div className="px-6 py-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-black text-white w-full flex justify-around px-4 py-16">
      <div className="w-full md:flex md:justify-between px-4 py-16">
        {/* Contact Form */}
        <div className="bg-gray-900 w-[676px] h-[674px] justify-center p-8 rounded-lg md:w-1/2">
          <h2 className="text-2xl flex justify-center font-bold mb-4">
            Contact Our <span className="text-purple-500 italic">Team</span>
          </h2>
          <form>
            <div className="flex flex-col space-y-4">
              <h2 className="w-[298px] mb-4">
                First name<span className="text-red-400">*</span>
              </h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="John"
                  className="w-[298px] p-2 bg-gray-800 text-white rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-[298px] p-2 bg-gray-800 text-white rounded"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-[616px] p-2 bg-gray-800 text-white rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-[616px] p-2 bg-gray-800 text-white rounded"
                required
              />
              <textarea
                placeholder="Type your Message..."
                className="w-[616px] h-[200px] p-2 bg-gray-800 text-white rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white h-[40px] w-1/4 text-center py-2 rounded-full hover:opacity-90 mt-4 self-end"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Support Information */}
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
          <h3 className="text-xl font-semibold mt-28">Looking for Support?</h3>
          <p className="text-gray-400">
            Please feel free to contact us for any queries you may have. Our team is here to assist you and address any questions, concerns, or feedback you may have for us.
            Just fill out the contact form to reach out to us, and our team will be more than happy to respond.
          </p>
        </div>
      </div>
    </section>
  );
}



function SocialMedia() {
  return (
    <section className="bg-black text-white px-4 py-16">
      <h2 className="text-center text-[36px] font-bold mb-8">Latest Updates On Our
        <span className="text-purple-400 italic"> Social</span></h2>
      <div className="flex flex-wrap justify-center gap-[36px]">

        {/* TikTok Box */}
        <div className="w-full sm:w-[360px] md:w-[320px] lg:w-[360px] h-[360px] bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-lg text-center">
          <img src={tiktok} alt="TikTok" className="w-16 h-16 mb-4" />
          <p className="text-white text-lg font-semibold mb-2">TikTok</p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90">Follow on TikTok</button>
        </div>

        {/* Instagram Box */}
        <div className="w-full sm:w-[360px] md:w-[320px] lg:w-[360px] h-[360px] bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-lg text-center">
          <img src={instagram} alt="Instagram" className="w-16 h-16 mb-4" />
          <p className="text-white text-lg font-semibold mb-2">Instagram</p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90">Follow on Instagram</button>
        </div>

        {/* Twitter Box */}
        <div className="w-full sm:w-[360px] md:w-[320px] lg:w-[360px] h-[360px] bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-lg text-center">
          
            <img src={twitter} alt="Twitter" className="w-16 h-16 mb-4" />
            <p className="text-white text-lg font-semibold mb-2">Twitter</p>
          <button className="bg-black  text-white px-6 py-2 rounded-full hover:opacity-90">Follow on Twitter</button>
          </div>
        </div>
    </section>
  );
}

function LoreamSection() {
  return (
    <section className="bg-black text-white px-4 py-16">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Each grid item */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-2">Loream</h3>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-2">Loream</h3>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-2">Loream</h3>
          <p className="text-gray-400">Loream</p>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
          <p className="text-gray-400">Loream.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-2">Loream</h3>
          <p className="text-gray-400">Loream</p>
          <p className="text-gray-400">Loream</p>
          <p className="text-gray-400">Loream</p>
          <p className="text-gray-400">Loream</p>
          <p className="text-gray-400">Loream</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-20 flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src={logo} alt="Lyric Lab Logo" className="w-20 h-12 md:w-24 md:h-14" />
      </div>

      {/* Center Text */}
      <div className="text-center text-gray-400">
        &copy; 2023 Lyric Lab. All Rights Reserved.
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="TikTok" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}




function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <FeatureSection />
      <CodingSection />
      <FAQSection />
      <ContactSection />
      <SocialMedia />
      <LoreamSection />
      <Footer />
      {/* Other sections */}
    </div>
  );
}

export default App;
