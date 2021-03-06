import React from 'react';
import Cell from "./Cell";
import GeobaseTableContext from "./GeobaseTable.context";

const styles = {
    tr: 'bg-white hover:bg-blue-100 cursor-pointer',
}

const Row = ({item, blank}) => (
    <GeobaseTableContext.Consumer>
            {(context)=>(
                <tr className={styles.tr} onClick={blank ? null: ()=>{context.openEditWindow(item)}}>
                        <Cell>{item.slug}</Cell>
                        <Cell>{item.ip}</Cell>
                        <Cell>{item.type}</Cell>
                        <Cell>{item.continent_name}</Cell>
                        <Cell>{item.country_name}</Cell>
                        <Cell>{item.region_name}</Cell>
                        <Cell>{item.city}</Cell>
                        <Cell>{item.latitude}</Cell>
                        <Cell>{item.longitude}</Cell>
                        <Cell>{item.createdAt}</Cell>
                        <Cell>{item.updatedAt}</Cell>
                </tr>
            )}
    </GeobaseTableContext.Consumer>
)

export default Row;