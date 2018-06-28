import React, {Component} from 'react';
import NewsletterDetail from './NewsletterDetail';

class NewsletterList extends Component {
    constructor() {
        super();
        this.newsletterItems = '';
    }

    buildNewsletter() {
        if (this.props.newsletters) {
            this.newsletterItems = this.props.newsletters.map(newsletterObj => {
                return (
                    <NewsletterDetail key={newsletterObj.id.toString()} category={newsletterObj.category} items={newsletterObj.items}/>
                );
            });
        }
    }

    render() {
        this.buildNewsletter();
        return (
            <div className="newsletter">
                <div className="row">
                    <div className="col-md-12">
                        {this.newsletterItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsletterList;
