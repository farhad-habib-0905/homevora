import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import '../styles/Home.css'


export default function Home() {
    // Smooth-scroll for same-page anchors
    useEffect(() => {
        const onClick = (e) => {
            const a = e.target.closest('a[href^="#"]')
            if (!a) return
            const id = a.getAttribute('href').slice(1)
            const el = document.getElementById(id)
            if (el) {
                e.preventDefault()
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])


    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Reviews />
                <Contact />
            </main>
            <footer>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                    <div>© {new Date().getFullYear()} HomeVora.ai — Automate. Optimize. Grow.</div>
                    <div><a href="#contact">Get demo</a> • <a href="mailto:hello@homevora.ai">hello@homevora.ai</a></div>
                </div>
            </footer>
        </>
    )
}