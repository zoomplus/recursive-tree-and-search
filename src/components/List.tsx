import React from 'react';
import {
    dataInterface
} from '../interfaces';

interface props {
    filteredData: dataInterface[];
}

const renderTree = (items: any) => {

    return <ul>
        {items.map((item: any) => {
            let result = [];
            result.push(<li>{item.name.ru}</li>);
            item.children && result.push(renderTree(item.children));

            return result;
        })}
    </ul>
}

const List = ({ filteredData }: props) => {
    return renderTree(filteredData);
};

export default List;
