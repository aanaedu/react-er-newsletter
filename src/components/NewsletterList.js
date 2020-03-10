import React from 'react';
import NewsletterItem from './NewsletterItem';

const NewsletterList = (props) => {
    const { items } = props;
    const itemsLength = items && items.length;

    return (
        <div className="newsletter">
            <div className="row">
                <div className="col-md-12">
                    {items.map((item, index) => {
                        const isLastItem = (index === itemsLength - 1);

                        return (
                            <NewsletterItem
                                key={item.id.toString()}
                                item={item}
                                itemIndex={index}
                                isLastItem={isLastItem}
                            />
                        )}
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsletterList;
