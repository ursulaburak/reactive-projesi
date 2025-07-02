const Footer = () => {
    return (
        <footer id="footer">
        <div className="container">
            <div className="footer-header">
                <img src="./img/logo.png" alt=""/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed soluta voluptates atque nesciunt rem
                    doloribus dolor quisquam, obcaecati beatae, maxime nostrum quod omnis similique voluptatum vitae?
                    Minima magnam repudiandae quo!</p>
            </div>
            <div className="footer-container">
                <div className="footer-menu">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Classes</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3>Helpful Links</h3>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Supports</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;