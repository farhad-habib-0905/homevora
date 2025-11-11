export default function Header() {
    return (
        <header>
            <div className="container nav">
                <div className="brand">
                    <img src="/assets/logo.png" alt="HomeVora.ai logo" />
                    <span className="name">HomeVora.ai</span>
                </div>
                <nav>
                    <a href="#features">Features</a>
                    <a href="#how">How it works</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact" className="btn" style={{ marginLeft: 16 }}>Get demo</a>
                </nav>
            </div>
        </header>
    )
}