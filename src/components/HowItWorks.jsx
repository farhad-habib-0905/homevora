export default function HowItWorks() {
    const steps = [
        { n: 1, t: 'Generate', d: 'We launch ads in your service area to capture qualified leads.' },
        { n: 2, t: 'Call', d: 'AI voice calls instantly, confirms details, and handles objections.' },
        { n: 3, t: 'Book', d: 'Appointments are scheduled inside your CRM calendar with reminders.' },
        { n: 4, t: 'Report', d: 'Dashboard shows spend → leads → booked quotes → revenue.' },
    ]
    return (
        <section id="how">
            <div className="container">
                <h2>How it works</h2>
                <p className="sub">From click to booked quote in four steps.</p>
                <div className="grid how">
                    {steps.map(s => (
                        <div className="card step" key={s.n}>
                            <div className="num">{s.n}</div>
                            <h3>{s.t}</h3>
                            <p>{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}