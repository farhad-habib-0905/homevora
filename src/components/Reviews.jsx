export default function Reviews() {
    const items = [
        { name: 'Summit Painting Co.', city: 'Denver, CO', grad: 'linear-gradient(135deg,var(--brand),var(--brand-2))', text: '“HomeVora turned our leads into booked quotes within days. We added two crews this quarter just to keep up.”' },
        { name: 'BluePeak HVAC', city: 'Grand Rapids, MI', grad: 'linear-gradient(135deg,#9aa9ff,#6ef0d6)', text: '“AI calls every lead in seconds and books directly in Jobber. Conversion rate is up 2× and no more missed follow-ups.”' },
        { name: 'Ironclad Roofing', city: 'Tampa, FL', grad: 'linear-gradient(135deg,#53d8ff,#2de0c2)', text: '“From ad to appointment with zero admin time. We only pay attention to quotes and closing. Exactly what we needed.”' },
        { name: 'Atlas Concrete Coatings', city: 'Phoenix, AZ', grad: 'linear-gradient(135deg,#8ed1ff,#00b0ff)', text: '“Booked 31 quotes in our first month. The AI follow-ups save our office 3–4 hours a day.”' },
        { name: 'Harbor City Plumbing', city: 'San Diego, CA', grad: 'linear-gradient(135deg,#82ffd6,#2de0c2)', text: '“We paused hiring another CSR. HomeVora handles calls, reminders, and reschedules automatically.”' },
        { name: 'Northwood Tree & Stump', city: 'Madison, WI', grad: 'linear-gradient(135deg,#c3e7ff,#00b0ff)', text: '“Leads come in, AI books them, and the team just shows up. Couldn’t be simpler.”' }
    ]


    return (
        <section id="reviews">
            <div className="container">
                <h2>What contractors say</h2>
                <p className="sub">Real words from home-service owners using AI to keep their calendars full.</p>
                <div className="grid reviews">
                    {items.map((r, i) => (
                        <div className="card" key={i}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                                <div style={{ width: 36, height: 36, borderRadius: '50%', background: r.grad }}></div>
                                <div>
                                    <strong>{r.name}</strong>
                                    <div style={{ color: '#a7bacd', fontSize: 12 }}>{r.city}</div>
                                </div>
                            </div>
                            <div className="stars" aria-label="5 star rating">★★★★★</div>
                            <p style={{ marginTop: 8 }}>{r.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}