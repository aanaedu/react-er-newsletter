import React, {Component} from 'react';
import AchievementDetail from './AchievementDetail';

class AchievementList extends Component {
    constructor() {
        super();
        this.achievementItems = '';
    }

    buildAchievement() {
        if (this.props.achievements) {
            this.achievementItems = this.props.achievements.map(achievementObj => {
                return (
                    <div>
                        <AchievementDetail
                            key={achievementObj.id.toString()}
                            year={achievementObj.year}
                            items={achievementObj.items}
                        />
                    </div>
                );
            });
        }
    }

    render() {
        this.buildAchievement();
        return (
            <div className="row">
                {this.achievementItems}
            </div>
        );
    }
}

export default AchievementList;
