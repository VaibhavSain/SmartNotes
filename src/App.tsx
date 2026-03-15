/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { 
  Lightbulb, 
  Search, 
  AlertTriangle, 
  Brain, 
  Zap, 
  FileText, 
  Tag, 
  Link as LinkIcon, 
  BookOpen, 
  Code, 
  Briefcase, 
  Star, 
  Twitter, 
  Github,
  Gitlab,
  Mail,
  MessageSquare,
  Menu,
  X,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800/50 shadow-lg shadow-indigo-500/5 transition-all duration-300 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16 items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Smart Notes</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a>
            <a href="#use-cases" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Use Cases</a>
            
            <a 
              href="https://github.com/AOSSIE-Org/SmartNotes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>

            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a 
              href="https://github.com/AOSSIE-Org/SmartNotes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-400"
            >
              <Github className="w-5 h-5" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 py-6 px-6 space-y-4 relative"
        >
          <a href="#features" className="block text-sm font-medium text-slate-600 dark:text-slate-400">Features</a>
          <a href="#use-cases" className="block text-sm font-medium text-slate-600 dark:text-slate-400">Use Cases</a>
          <button className="w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors">
    {/* Animated Background Blobs */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"
      />
    </div>

    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-50"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Capture Ideas. <br />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-indigo-600 dark:text-indigo-400"
          >
            Think Smarter.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
        >
          Smart Notes uses AI to organize, summarize, and connect your notes automatically. Build your second brain effortlessly.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-all"
          >
            Get Started Free
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            View Demo
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.4 
        }}
        className="relative max-w-5xl mx-auto"
      >
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-slate-700 p-2 transform hover:scale-[1.01] transition-transform duration-500"
        >
          <img 
            alt="Smart Notes Dashboard" 
            className="rounded-xl w-full shadow-inner" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt4afx3iay9e_VMykm2aZRc_DRhrVEP2Jb1ydxs_vtqUVyY8wMvKwvp9rGBtC6vvWASN-vzKoXojxwguyGUFXkSSC2tb7PBGOdGyTPolZDz2gKB364Xhas8Rtlu_H5Wr5rVBna0lsUbMrKy3yULn8rxwio7JUgMrjj55TOZ3cJ-Uzz5TMYbp0z24m_SmW8sljm_2aLCyHI6PCFq_GSpyBV7lwx3Shmtdmu1hJ6_CFIJgMZj4HAdbsbPBMY1gvWiXT9AJMHMMZ7Mtc"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-slate-900 dark:text-white mb-16"
      >
        Why Traditional Notes Fail
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: Briefcase, title: "Hard to organize", desc: "Folders within folders lead to lost content and frustration." },
          { icon: Search, title: "Difficult to search", desc: "Keyword search only works if you remember the exact words." },
          { icon: AlertTriangle, title: "Cluttered notes", desc: "Transcripts and long texts become messy and unreadable." },
          { icon: Lightbulb, title: "Lost ideas", desc: "Great ideas vanish when they aren't connected to other thoughts." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: "rgb(99, 102, 241)" }}
            className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-left border border-slate-100 dark:border-slate-800 transition-all cursor-default"
          >
            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-2 dark:text-white">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
    className="flex gap-6 p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 transition-all duration-300 cursor-default"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{desc}</p>
    </div>
  </motion.div>
);

const SolutionSection = () => (
  <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Your Notes, Supercharged with AI</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The first intelligent workspace that works the way you think, helping you connect the dots effortlessly.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard index={0} icon={Zap} title="AI Summaries" desc="Instantly turn long meetings or research papers into concise, actionable bullet points." />
        <FeatureCard index={1} icon={FileText} title="Smart Search" desc="Search by meaning, not just words. Ask 'What was that app I liked for task management?'" />
        <FeatureCard index={2} icon={Tag} title="Auto Tags" desc="Our AI automatically categorizes and tags your notes based on content and context." />
        <FeatureCard index={3} icon={LinkIcon} title="Idea Connections" desc="See a visual graph of how your ideas relate to each other across different projects." />
        <FeatureCard index={4} icon={Brain} title="Neural Linking" desc="Automatically discover relationships between notes you didn't even know were connected." />
        <FeatureCard index={5} icon={Code} title="Developer API" desc="Build your own integrations and workflows with our powerful, well-documented API." />
        <FeatureCard index={6} icon={Briefcase} title="Team Spaces" desc="Collaborate in real-time with your team in shared workspaces with granular permissions." />
        <FeatureCard index={7} icon={Zap} title="Offline Mode" desc="Work from anywhere, even without an internet connection. Your data syncs when you're back online." />
        <FeatureCard index={8} icon={Tag} title="Custom Themes" desc="Personalize your workspace with beautiful themes that match your style and focus." />
      </div>
    </div>
  </section>
);

const FeatureComparison = () => (
  <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Why Smart Notes?</h2>
        <p className="text-slate-600 dark:text-slate-400">See how we stack up against traditional note-taking apps.</p>
      </motion.div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="py-4 px-6 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Feature</th>
              <th className="py-4 px-6 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Traditional Apps</th>
              <th className="py-4 px-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Smart Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { f: "Organization", t: "Manual Folders", s: "AI Auto-Tagging" },
              { f: "Search", t: "Keyword Only", s: "Semantic & AI-Powered" },
              { f: "Insights", t: "None", s: "Automatic Summaries" },
              { f: "Connections", t: "Manual Links", s: "Neural Knowledge Graph" },
              { f: "Speed", t: "Slow Retrieval", s: "Instant Brain Access" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-6 font-medium text-slate-900 dark:text-white">{row.f}</td>
                <td className="py-4 px-6 text-slate-500 dark:text-slate-400">{row.t}</td>
                <td className="py-4 px-6 font-semibold text-indigo-600 dark:text-indigo-400">{row.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6">Success Story</span>
            <h3 className="text-4xl font-bold mb-8 dark:text-white leading-tight">How a Research Team Saved 20 Hours a Week.</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              "Before Smart Notes, our team was drowning in research papers and meeting transcripts. The AI Summaries and Neural Linking features allowed us to connect findings across projects instantly, cutting our synthesis time by 60%."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-lg dark:text-white">Dr. Aris Thorne</p>
                <p className="text-slate-500 dark:text-slate-400">Lead Researcher, BioTech Systems</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-auto bg-indigo-600 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/research/800/1000" 
              alt="Research Team" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-white mb-1">60%</p>
                  <p className="text-indigo-200 text-sm">Faster Synthesis</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-1">20h</p>
                  <p className="text-indigo-200 text-sm">Saved Weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WorkflowSection = () => (
  <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">Watch your workflow transform in real-time.</h2>
          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
            
            {[
              { step: 1, title: "Write notes", desc: "Focus on capturing your stream of consciousness without worrying about formatting." },
              { step: 2, title: "AI analyzes", desc: "Our neural engine processes your input, identifying key themes and people mentioned." },
              { step: 3, title: "Smart insights", desc: "Get automatic summaries, relevant tags, and links to your previous notes." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-4 bg-white dark:bg-slate-900"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-lg shadow-indigo-200 dark:shadow-none">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-white">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-indigo-600/5 dark:bg-indigo-500/5 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 shadow-[0_20px_50px_rgba(79,70,229,0.1)] dark:shadow-none transform hover:rotate-1 transition-transform duration-500">
            <img 
              alt="AI Analysis Demo" 
              className="rounded-2xl shadow-2xl w-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7X0TvYKPf3F6oTkhe5rMBgxRS93lDt4piMqfrFJBTeHZcompTOryWLM6RdNUoENHXpT0G2wqipPstrN0IGuYQ2DR6ZNik0317MFhlvFHIt34rp1F0q0z841bg7-4MgiDqoYgxHQmLePSwY76Oxn1_2SJ5EoSWszxbwSXFJ630kP1vNvUNcgfl8Ir5GvKm73p_GLiufYzVMbTVWpAltxvJlWh-8HXc6sG_QBK6yyPQmBIoQYzMLkoDRfTvh869LUFVbk5P-nijwLc"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const PowerGrid = () => (
  <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-16 dark:text-white"
      >
        All the power you need.
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Markdown Support", desc: "Full GFM support for developers and writers who love speed." },
          { title: "Cloud Sync", desc: "Access your brain from any device. Mobile, Web, and Desktop apps." },
          { title: "AI Summarization", desc: "Complex documents into readable bullet points with one click." },
          { title: "Smart Organization", desc: "Folders are dead. Smart collections organize themselves." },
          { title: "Collaboration", desc: "Share pages or entire workspaces with your team instantly." }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
          >
            <h4 className="font-bold mb-2 dark:text-white">{item.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center border-dashed border-indigo-200 dark:border-indigo-900/50"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Coming Soon: Voice to Note</span>
        </motion.div>
      </div>
    </div>
  </section>
);

const UseCases = () => (
  <section id="use-cases" className="py-24 bg-white dark:bg-slate-900 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white tracking-tight">Built for every workflow.</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Discover how Smart Notes can transform the way you work, regardless of your industry or role.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { icon: BookOpen, title: "Students", desc: "Connect lecture notes across semesters and build a lifelong knowledge graph for exams and research." },
          { icon: Code, title: "Developers", desc: "Store code snippets, technical docs, and architecture decisions with perfect searchability and AI-powered insights." },
          { icon: Briefcase, title: "Professionals", desc: "Prepare for meetings with automatic context from previous interactions and notes. Never miss a detail again." },
          { icon: Brain, title: "Researchers", desc: "Synthesize large volumes of information and discover hidden patterns in your data with AI-assisted analysis." },
          { icon: MessageSquare, title: "Content Creators", desc: "Organize your ideas, scripts, and research in one place. Use AI to brainstorm and refine your content." },
          { icon: Zap, title: "Entrepreneurs", desc: "Keep track of your vision, strategy, and daily tasks. Connect your ideas to build a more cohesive business plan." }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group p-8 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 text-slate-700 dark:text-slate-300"
            >
              <item.icon className="w-10 h-10" />
            </motion.div>
            <h4 className="font-bold text-2xl mb-4 dark:text-white">{item.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-16 dark:text-white"
      >
        Loved by thousands of thinkers.
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            name: "Sarah Jenkins", 
            role: "Ph.D. Researcher", 
            text: "Smart Notes has completely changed how I research. The AI connections feature found links between my papers I didn't even see." 
          },
          { 
            name: "Marcus Thorne", 
            role: "Software Architect", 
            text: "Finally a notes app that doesn't get cluttered after a week. The AI auto-tagging is like having a personal librarian." 
          },
          { 
            name: "Elena Rodriguez", 
            role: "Content Creator", 
            text: "Clean, fast, and simple. It's the Notion-killer I've been waiting for. The mobile app is exceptionally responsive." 
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-slate-700 dark:text-slate-300 italic mb-6">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${item.name}`} alt={item.name} referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-sm dark:text-white">{item.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AossieSection = () => (
  <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"></div>
            <img 
              src="https://resonate.aossie.org/_next/static/media/aossie_logo.ae997327.png" 
              alt="AOSSIE Logo" 
              className="w-full max-w-md h-auto transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 group/link cursor-pointer">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                AOSSIE
              </h2>
              <div className="mt-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400 transition-colors">
                <LinkIcon className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              We Innovate <br />
              We Educate
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              We are an Australian not-for-profit umbrella organization for open-source projects. 
              We believe the open-source philosophy provides a resource-efficient channel to 
              transfer knowledge and achieve innovation and education.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 items-center">
            <a href="mailto:contact@aossie.org" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://gitlab.com/aossie" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110">
              <Gitlab className="w-8 h-8" />
            </a>
            <a href="https://github.com/AOSSIE-Org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110">
              <MessageSquare className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/AOSSIE_Org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Smart Notes</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            The AI-powered second brain for modern thinkers. Built with privacy and speed at its core.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-slate-900 dark:text-white">Product</h5>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Features</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Downloads</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-slate-900 dark:text-white">Company</h5>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-slate-900 dark:text-white">Follow Us</h5>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/AOSSIE-Org/SmartNotes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-sm">
        © {new Date().getFullYear()} Smart Notes. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <SolutionSection />
          <FeatureComparison />
          <WorkflowSection />
          <PowerGrid />
          <UseCases />
          <CaseStudy />
          <Testimonials />
          <AossieSection />
          
          <section className="py-24 bg-indigo-600 text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-8"
              >
                Ready to think smarter?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto"
              >
                Join 50,000+ users who have already upgraded their thinking with Smart Notes.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-2xl font-bold text-lg transition-all shadow-xl border border-transparent dark:border-slate-700"
              >
                Create Your Account
              </motion.button>
            </div>
          </section>
        </main>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Footer />
        </motion.div>
      </div>
    );
  }
