import React from 'react';

const Footer = () => (
    <div className="footer">
        <p className="footer__title">Follow Us</p>
        <div className="footer__social">
            <a href="http://twitter.com/placeholder" className="footer__social-item text-muted"><i className="fa fa-twitter"></i></a>
            <a href="http://google-plus.com/placeholder" className="footer__social-item text-muted"><i className="fa fa-google-plus"></i></a>
            <a href="http://twitter.com/placeholder" className="footer__social-item text-muted"><i className="fa fa-twitter"></i></a>
            <a href="http://youtube.com/placeholder" className="footer__social-item text-muted"><i className="fa fa-youtube"></i></a>
        </div>
        <p className="footer__information">For more information <a href="http://example.com">click here</a>, or to speak with one of our support representatives, please call us on +9662 6603177 (KSA) or +9714 4480800 Ext 0962 (Dubai).</p>
        <p className="footer__copyright">&copy; All Rights Reserved 2017</p>
        <p className="footer__disclaimer">Disclaimer: You are receiving this email as a privileged customer of Royal Jet. You may, at any time, choose not to receive e-mail marketing literature/information about our program or services by <a href="http://example.com/">clicking here</a> to unsubscribe.</p>
    </div>
);

export default Footer;