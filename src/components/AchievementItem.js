import React from 'react';

const AchievementItem = (props) => {
    const { item, isLastItem } = props;
    const itemClass = isLastItem ? 'col-xs-12' : 'col-xs-12 col-sm-6';
    
    return (
        <div className={itemClass}>
            <div className="achievement__item">
                <h4 className="achievement__amount">{item.amount} <sup> {item.symbol} </sup></h4>
                <p className="achievement__description">
                    <span className="achievement__organisation">{item.organisation}: </span>
                    <span className="achievement__message"> {item.description} </span>
                </p>
            </div>
        </div>
    );
};

export default AchievementItem;