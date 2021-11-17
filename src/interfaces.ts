export interface dataInterface {
    id: string;
    name: {
        en: string;
        ru: string;
    };
    parent?: string | null;
    children?: Array<this[]> | null;
    parent_id?: string | null;
    type_id?: string | null;
}

export interface filterInterface {
    name: string,
    type_id?: string
}
