import React, {Component} from 'react';

class AchievementItem extends Component {
    render() {
        const item = this.props.data;
        const itemsLength = this.props.itemsLength;
        const itemClass = (this.props.index === itemsLength - 1) ? 'col-xs-12' : 'col-xs-12 col-sm-6';

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
    }
}

export default AchievementItem;