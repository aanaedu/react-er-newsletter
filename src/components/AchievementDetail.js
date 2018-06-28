import React, {Component} from 'react';
import AchievementItem from './AchievementItem';

class AchievementDetail extends Component {
    constructor() {
        super();
        this.achievementItems = '';
    }

    buildAchievement() {
        if (this.props.items) {
            const items = this.props.items;
            const itemsLength = items.length;

            this.achievementItems = items.map((item, index) => {
                return (
                    <AchievementItem
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
        this.buildAchievement();
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3 className="achievement__title"> {this.props.year} Achievements</h3>
                </div>
                {this.achievementItems}
            </div>
        );
    }
}

export default AchievementDetail;
