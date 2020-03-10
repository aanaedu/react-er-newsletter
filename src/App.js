import React, { useState } from 'react';
import NewsletterDetail from './components/NewsletterDetail';
import AchievementDetail from './components/AchievementDetail';
import TheCTABanner from './layout/TheCTABanner';
import Footer from './layout/Footer';
import AppData from './data';

const App = () => {
  const [newsletters] = useState(AppData.newsletterData);
  const [achievements] = useState(AppData.achievementData);
  
  return (
    <div className="newsletter-app">
      <div className="page-info__wrapper">
          <div className="page-info">
              <p className="text-muted">If you can't see this message
                  <a href="http://example.com/"> view it in your browser</a>
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
  
              <section className="newsletter">
                  <NewsletterDetail data={newsletters} />
              </section>
  
              <section className="achievement bg-primary">
                  <AchievementDetail data={achievements} />
              </section>
  
              <section className="cta text-center">
                  <TheCTABanner />
              </section>
          </div>
      </div>
  
      <Footer />
    </div>
  );
};

export default App;
