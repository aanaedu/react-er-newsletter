import React from 'react';
import NewsletterList from './NewsletterList';

const NewsletterDetail = (props) => {
    const { data } = props;

    return (
        <div className="newsletter">
            {data.map(dataItem => {
                const { id, category, items } = dataItem;
                return (
                    <div className="row" key={id.toString()}>
                        <div className="col-md-12">
                            <div className="newsletter__section">
                                <h3 className="newsletter__section-heading"> {category} </h3>
                                <hr className="newsletter__section-divider"/>
                            </div>
                            <NewsletterList items={items}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NewsletterDetail;
