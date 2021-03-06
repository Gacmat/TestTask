import React from 'react';
import TagList from "../TagList";

const styles = {
    header: 'cursor-pointer hover:bg-blue-200 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
}

const TableHeader = ({items, onClick}) => (
    <thead>
        <tr>
            <TagList Tag={'th'} items={items} className={styles.header} onClick={onClick}/>
        </tr>
    </thead>
)

export default TableHeader;