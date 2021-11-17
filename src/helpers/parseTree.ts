import {dataInterface} from '../interfaces';

export const parse: any = (array: dataInterface[], parent = null) => {
    const result = [];

    for(let item of array){
        if(item.parent_id === parent) {
            result.push({
                ...item,
                children: parse(array, item.id)
            });
        }
    }

    return result;
}