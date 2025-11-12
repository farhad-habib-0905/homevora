export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div>
                    <div className="badge">Complete AI Growth System for Home Services</div>
                    <h1>
                        We generate the leads. <br />
                        Our AI books your quotes. <br />
                        <span style={{ background: 'linear-gradient(135deg,var(--brand),var(--brand-2))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>You just show up.</span>
                    </h1>
                    <p className="lead">HomeVora installs a lead-to-appointment engine in your CRM: instant AI calling, smart follow-ups, and campaigns that keep your calendar full. Built for coatings, painting, HVAC, plumbing, roofing and more.</p>
                    <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
                        <a href="#contact" className="btn">Book a 15-min demo</a>
                        <a href="#features" className="btn outline">How it works</a>
                    </div>
                    <div className="strip" style={{ marginTop: 16, fontSize: 14 }}>No contracts • Month-to-month • Transparent ROI dashboard</div>
                </div>
                <div className="card">
                    <img className="dashboard" src="./public/assets/analytics.png" alt="HomeVora.ai analytics dashboard mockup" />
                </div>
            </div>
        </section>
    )
}