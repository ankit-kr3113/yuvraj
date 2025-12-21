import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, MapPin, Download, ChevronDown, Code, Target } from 'lucide-react'
import { useState, useEffect } from 'react'
import { personalInfo, socialLinks, achievements } from '@/data/portfolioData'
import ThemeSwitcher from './ThemeSwitcher'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiNextdotjs } from 'react-icons/si'

export function Hero() {
  const statBadges = [
    { label: 'Projects', value: achievements.stats.totalProjects, icon: <Code className="w-5 h-5" /> },
    { label: 'Problems', value: achievements.leetcode.problemsSolved, icon: <Target className="w-5 h-5" /> },
    { label: 'Commits', value: achievements.stats.commits, icon: <FaGitAlt className="w-5 h-5" /> },
  ]

  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-card pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {personalInfo.status.availability} for {personalInfo.status.workMode} Work
              </div>

              {/* Name & Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-foreground">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {personalInfo.subtitle}
                </p>
              </div>

              {/* Bio */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {personalInfo.bio.intro}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground">{achievements.stats.yearsExperience}</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground">{achievements.stats.totalProjects}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground">{achievements.stats.totalProblemsSolved}</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground">{achievements.leetcode.rating}</div>
                  <div className="text-sm text-muted-foreground">LeetCode Rating</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  View My Work
                  <ChevronDown className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.resume}
                  download="Yuvraj_Mehta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-background transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.email.url}
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-background transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right - Profile Image & Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative"
            >
              {/* Profile Image Container */}
              <div className="relative mx-auto w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-accent/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl cursor-pointer"
                >
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Stat Badges */}
                {statBadges.map((badge, index) => {
                  const positions = [
                    { top: '10%', right: '-30px' }, // top-right
                    { bottom: '10%', left: '-30px' }, // bottom-left
                    { bottom: '10%', right: '-30px' }, // bottom-right
                  ]
                  return (
                    <motion.div
                      key={badge.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -12, 0],
                      }}
                      transition={{
                        opacity: { delay: 1.2 + index * 0.1 },
                        scale: { delay: 1.2 + index * 0.1 },
                        y: { delay: 1.5 + index * 0.1, duration: 3, repeat: Infinity, ease: 'easeInOut' }
                      }}
                      whileHover={{ scale: 1.1, y: -8 }}
                      className="absolute bg-background/80 backdrop-blur-sm border border-primary/40 rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      style={positions[index]}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{badge.icon}</span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-foreground">{badge.value}</div>
                          <div className="text-xs text-muted-foreground">{badge.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </div>
  )
}
