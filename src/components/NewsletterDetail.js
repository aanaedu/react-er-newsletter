import React, {Component} from 'react';
import NewsletterItem from './NewsletterItem';

class NewsletterDetail extends Component {

    constructor() {
        super();
        this.newsletterItems = '';
    }

    buildNewsletter() {
        if (this.props.items) {
            const items = this.props.items;
            const itemsLength = items.length;

            this.newsletterItems = items.map((item, index) => {
                return (
                    <NewsletterItem
                        key={item.id.toString()}
                        data={item}
                        itemsLength={itemsLength}
                        index={index}
                    />
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
                        <div className="newsletter__section">
                            <h3 className="newsletter__section-heading"> {this.props.category} </h3>
                            <hr className="newsletter__section-divider"/>
                        </div>
                        {this.newsletterItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsletterDetail;
