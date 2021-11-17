import React, {
    useState
} from 'react';
import List from './components/List';
import {
    dataInterface,
    filterInterface
} from "./interfaces";

import { parse } from './helpers/parseTree';

import * as json from './data/data.json';

function App() {
    //@ts-ignore
    const parsedData = parse(json.default);
    const [data, setData] = useState<dataInterface[]>(parsedData);
    const [filter, setFilter] = useState<filterInterface>({
        type_id: '5a3db022-3065-eb11-80fc-00155d640a66',
        name: ''
    });

    const recursiveSearch: any = (item: any) => {
        const regexp = new RegExp(filter.name, 'g');
        let result = item.name.ru.match(regexp);

        if(!result) {
            if(item.children.length > 0) {
                for (let children of item.children) {
                    if (children.name) {
                        return recursiveSearch(children)
                    }
                }
            }
        }

        return result;
    }

    return (
        <div className="App">
            <input onChange={(e) => {setFilter({
                ...filter,
                name: e.target.value
            })}} />
            <List filteredData={
                data.filter((item) => {
                    const result = recursiveSearch(item);

                    if(item.type_id === filter.type_id && result) {
                        return item;
                    }

                })
            }
            />
        </div>
    );
}

export default App;
