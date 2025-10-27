import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderComponent from './components/Header'
import HeroComponent from './components/Hero'
import AboutMeComponent from './components/AboutMe'
import ExperienceComponent from './components/Experience'
import ProjectsComponent from './components/Projects'
import SkillsComponent from './components/Skills'
import ContactComponent from './components/Contacts'
import FooterComponent from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderComponent></HeaderComponent>
    <HeroComponent></HeroComponent>
    <AboutMeComponent></AboutMeComponent>
    <ExperienceComponent></ExperienceComponent>
    <ProjectsComponent></ProjectsComponent>
    <SkillsComponent />
    <ContactComponent></ContactComponent>
    <FooterComponent></FooterComponent>
  </StrictMode>
)
