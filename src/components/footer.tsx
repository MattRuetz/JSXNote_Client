import './footer.css';

const Footer = () => {
    return (
        <footer className="footer navbar-static-bottom">
            <div className="container">
                <div className="social-links">
                    <a
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/matt-ruetz-0a69b5216/"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin fa-inverse"></i>
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://github.com/MattRuetz"
                        target="_blank"
                    >
                        <i className="fab fa-github fa-inverse"></i>
                    </a>
                </div>

                <hr />

                <p className="footer__text">
                    © 2022 -
                    <a
                        rel="noreferrer"
                        href="https://github.com/MattRuetz"
                        target="_blank"
                    >
                        Matthew Ruetz
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
