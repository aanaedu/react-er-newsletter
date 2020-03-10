import React from 'react';
import AchievementItem from './AchievementItem';

const AchievementList = (props) => {
    const { items } = props;
    const itemsLength = items && items.length;

    return (
        <div className="row">
            {items.map((item, index) => {
                const isLastItem = (index === itemsLength - 1);

                return (
                    <AchievementItem
                        key={item.id.toString()}
                        item={item}
                        isLastItem={isLastItem}
                    />
                );
            })}
        </div>
    );
};

export default AchievementList;
