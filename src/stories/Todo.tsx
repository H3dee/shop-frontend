import React from 'react';
import './todo.scss';

export interface TodoProps {
    userId?: number;
    id: number;
    title: string;
    completed: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    color?: string,
    checkBoxColor?: string
}


export const Todo: React.FC<TodoProps> = ({
    id,
    completed,
    title,
    size,
    backgroundColor,
    color,
    checkBoxColor
}) => {
    return (
        <div
            className={
                completed
                    ? `list__item completed ${size}`
                    : `list__item ${size}`
            }
            key={id}
            style={{ backgroundColor, color }}
        >
            <div className="item__status" style={{borderColor: checkBoxColor}}></div>
            <div className="item__text">{title}</div>
            <div className="item__remove-icon"></div>
        </div>
    );
};
