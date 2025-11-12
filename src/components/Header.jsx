export default function Header() {
    return (
        <header>
            <div className="container nav">
                <div className="brand">
                <img src="/assets/logo.png" alt="HomeVora.ai logo" />
                <span className="name">HomeVora.ai</span>
                </div>

                {/* mobile menu toggle */}
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
                <span></span>
                <span></span>
                </label>

                {/* This nav collapses into hamburger */}
                <nav className="menu">
                <a href="#features">Features</a>
                <a href="#how">How it works</a>
                <a href="#reviews">Reviews</a>
                </nav>

                {/* This button stays visible always */}
                <a href="#contact" className="btn demo-btn">Get demo</a>
            </div>
        </header>


    )
}