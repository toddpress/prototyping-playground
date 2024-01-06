import { useState, useEffect } from 'react';

export const List = ({ items, children }) => (
    <>{items.map((item) => children(item))}</>
);

export const BaseInput = ({ value, onChange }) => (
    <input type="text" value={value} onChange={onChange}/>
);

export const FilterList = ({ as: Component = 'ul', items, children, ...rest }) => {
    const [filterList, setFilterList] = useState(items);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setFilterList(
            items.filter((item) =>
                item.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [items, searchText]);

    const handleSearchChange = (e) => setSearchText(e.target.value);

    return (<>
            <BaseInput value={searchText} onChange={handleSearchChange} />
            {/* @ts-ignore */}
            <Component {...rest}>
                <List items={filterList} children={children} />
            </Component>
        </>
    );
};
