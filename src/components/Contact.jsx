export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2>Book a 15-minute demo</h2>
                <p className="sub">Tell us a bit about your company and we’ll show you the system.</p>
                <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr .8fr', gap: 22 }}>
                    {/* Replace the action URL with Formspree/LeadConnector webhook */}
                    <form method="POST" action="https://formspree.io/f/your-form-id">
                        <input type="text" name="name" placeholder="Full name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="tel" name="phone" placeholder="Phone" required />
                        <input type="text" name="company" placeholder="Company name" />
                        <select name="industry" defaultValue="">
                            <option value="" disabled>Industry</option>
                            <option>Concrete Coatings</option>
                            <option>Painting</option>
                            <option>HVAC</option>
                            <option>Plumbing</option>
                            <option>Roofing</option>
                            <option>Other</option>
                        </select>
                        <textarea name="notes" rows="4" placeholder="What’s your biggest bottleneck right now?"></textarea>
                        <button className="btn" type="submit">Request demo</button>
                        <small style={{ color: '#a7bacd' }}>By submitting, you agree to be contacted about your request.</small>
                    </form>
                    <div>
                        <div className="strip"><strong>Fast setup:</strong> most clients go live in 5–10 days.</div>
                        <div className="strip" style={{ marginTop: 12 }}><strong>Integrations:</strong> GoHighLevel • Jobber • ServiceTitan • HubSpot</div>
                        <div className="strip" style={{ marginTop: 12 }}><strong>Support:</strong> Slack channel • call recordings • optimization reviews</div>
                    </div>
                </div>
            </div>
        </section>
    )
}