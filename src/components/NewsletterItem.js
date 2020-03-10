import React from 'react';

const NewsletterMedia = (props) => {
    const { item } = props;

    if (item) {
        if (item.imageUrl) {
            return <img 
                        src={item.imageUrl}
                        alt={item.title}
                        className="img-responsive newsletter__media newsletter__image"
                    />;
        } else if (item.videoUrl) {
            return <img 
                        src={item.videoUrl}
                        alt={item.title}
                        className="img-responsive newsletter__media newsletter__image"
                    />;
        }
    } 
    return null;
}

const getAdditionInfo = (item, itemIndex) => {
    if(itemIndex === 0) {
        return (item.videoUrl)
                ? ''
                : <div>
                        <div className="clearfix"></div>
                        <div className="newsletter__excerpt">
                            {item.excerpt} <span><i className="fa fa-long-arrow-right text-primary"></i> </span>
                        </div>
                  </div>
    } else {
        return (item.videoUrl) ? '' : <span><i className="fa fa-long-arrow-right text-primary"></i> </span>
    }
}

const NewsletterItem = (props) => {
    const { item, isLastItem, itemIndex } = props;
    const itemClass = isLastItem ? 'newsletter__item newsletter__item--last' : 'newsletter__item';

    return (
        <div className={itemClass}>
            <h4 className="newsletter__heading">{item.title}</h4>
            <NewsletterMedia item={item} />
            <div className="newsletter__extra-info">
                <div className="newsletter__additional-info mr-20">{item.additionalInfo}</div>
                <div className="newsletter__socials">
                    <a href="http://twitter.com/placeholder" className="text-muted"><i className="fa fa-twitter mr-20"></i></a>
                    <a href="http://facebook/placeholder" className="text-muted"><i className="fa fa-facebook mr-20"></i> </a>
                </div>
                {getAdditionInfo(item, itemIndex)}
            </div>
            <div className="clearfix"></div>
            {isLastItem && <hr className="newsletter__item-divider"/>}
        </div>
    );
}

export default NewsletterItem;
