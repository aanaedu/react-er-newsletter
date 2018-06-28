import React, {Component} from 'react';

class NewsletterItem extends Component {

    getImageTemplate(item) {
        if (item && item.imageUrl) {
            return <img src={item.imageUrl} alt={item.title}
                        className="img-responsive newsletter__media newsletter__image"/>;
        } else if (item && item.videoUrl) {
            return <img src={item.videoUrl} alt={item.title}
                        className="img-responsive newsletter__media newsletter__image"/>;
        }
        return null;
    }

    getAdditionInfo(index, item) {
        if(index === 0) {
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

    getDividerTemplate(index, itemsLength) {
        return (index === itemsLength - 1) ? '' : <hr className="newsletter__item-divider"/>
    }

    render() {
        const item = this.props.data;
        const index = this.props.index;
        const itemsLength = this.props.itemsLength;
        const itemClass = (index === itemsLength - 1) ? 'newsletter__item newsletter__item--last' : 'newsletter__item';
        const additionalInfoTemplate = this.getAdditionInfo(index, item);
        const imageTemplate = this.getImageTemplate(item);
        const dividerTemplate = this.getDividerTemplate(index, itemsLength);
        return (
            <div className={itemClass}>
                <h4 className="newsletter__heading">{item.title}</h4>
                {imageTemplate}
                <div className="newsletter__extra-info">
                    <div className="newsletter__additional-info mr-20">{item.additionalInfo}</div>
                    <div className="newsletter__socials">
                        <a className="text-muted"><i className="fa fa-twitter mr-20"></i></a>
                        <a className="text-muted"><i className="fa fa-facebook mr-20"></i> </a>
                    </div>
                    {additionalInfoTemplate}
                </div>
                <div className="clearfix"></div>
                {dividerTemplate}
            </div>
        );
    }
}

export default NewsletterItem;
