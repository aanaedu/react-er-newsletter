import React, { Component } from 'react';
import NewsletterList from './components/NewsletterList';
import AchievementList from './components/AchievementList';
import AppData from './data';

class App extends Component {

  constructor() {
    super();
    this.state = {
      newsLetters: [],
      achievements: [],
    };
  }

  componentWillMount() {
    this.setState({
      newsletters: AppData.newsletterData,
      achievements: AppData.achievementData
    });
  }

  render() {
    return (
      <div className="newsletter-app">
        <div className="page-info__wrapper">
            <div className="page-info">
                <p className="text-muted">If you can't see this message
                    <a> view it in your browser</a>
                </p>
            </div>
        </div>
        <div className="clearfix"></div>
        <div className="page-wrapper">
            <div className="container-fluid">
                <section>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-muted">January 29, 2018</p>
                            <h1 className="page-title">Newsletter Winter Issue</h1>
                        </div>
                    </div>
                </section>


                <section className="newsletter" id="js-newsletter">
                    <NewsletterList newsletters={this.state.newsletters} />
                    
                </section>
                

                <section className="achievement bg-primary" id="js-achievement">
                    <AchievementList achievements={this.state.achievements} />
                </section>

                <section className="cta text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cta__quote-sign"><i className="fa fa-3x fa-quote-left text-primary"></i></div>
                            <p className="cta__message">Check out The Daily Edition for the biggest stories <br />in news, business, tech, sports and entertainment.</p>
                        </div>
                        <button className="btn btn-primary">Download issue</button>
                    </div>
                </section>
            </div>
        </div>

        <div className="footer">
            <p className="footer__title">Follow Us</p>
            <div className="footer__social">
                    <a  className="footer__social-item text-muted"><i className="fa fa-twitter"></i></a>
                    <a  className="footer__social-item text-muted"><i className="fa fa-google-plus"></i></a>
                    <a  className="footer__social-item text-muted"><i className="fa fa-twitter"></i></a>
                    <a  className="footer__social-item text-muted"><i className="fa fa-youtube"></i></a>
            </div>
            <p className="footer__information">For more information <a href="">click here</a>, or to speak with one of our support representatives, please call us on +9662 6603177 (KSA) or +9714 4480800 Ext 0962 (Dubai).</p>
            <p className="footer__copyright">&copy; All Rights Reserved 2017</p>
            <p className="footer__disclaimer">Disclaimer: You are receiving this email as a privileged customer of Royal Jet. You may, at any time, choose not to receive e-mail marketing literature/information about our program or services by <a >clicking here</a> to unsubscribe.</p>
        </div>
      </div>
    );
  }
}

export default App;
