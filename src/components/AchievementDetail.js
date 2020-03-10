import React from 'react';
import AchievementList from './AchievementList';

const AchievementDetail = (props) => {
    const { data } = props;
    
    return (
        <div className="achievements">
            {data.map(dataItem => {
                const { id, year, items } = dataItem;

                return (
                    <div className="row" key={id.toString()}>
                        <div className="col-md-12">
                            <h3 className="achievement__title"> {year} Achievements</h3>
                        </div>
                        <AchievementList items={items}/>
                    </div>
                );
            })}
        </div>
    );
}

export default AchievementDetail;
