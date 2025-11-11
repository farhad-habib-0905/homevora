export default function Features() {
    return (
        <section id="features">
            <div className="container">
                <h2>Why contractors choose HomeVora</h2>
                <p className="sub">A single system from ad to appointment — no extra staff required.</p>
                <div className="grid features">
                    {[
                        { t: 'Instant AI calling', d: 'Every lead is called within seconds. Our voice agent books quotes directly onto your calendar.' },
                        { t: 'Smart follow-ups', d: 'Automatic SMS, voicemail and email sequences for no-answers, reschedules and no-shows.' },
                        { t: 'Lead generation', d: 'Proven Meta + Google campaigns targeting your zips. Landing pages built to convert.' },
                        { t: 'CRM integrations', d: 'GoHighLevel, Jobber, ServiceTitan, HubSpot — we work inside your stack.' },
                        { t: 'ROI dashboard', d: 'Track ad spend, booked quotes, and close rates in one clean dashboard.' },
                        { t: 'Reviews & reactivation', d: 'Post-job review requests and past-customer reactivation to keep the pipeline full.' }
                    ].map((f, i) => (
                        <div className="card feat" key={i}>
                            <h3>{f.t}</h3>
                            <p>{f.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}