import React from 'react'

import Item from './utils/Item'
import SectionTitle from './utils/SectionTitle'

const Sales = ({ isColumn, data }) => {
   return (
      <div className="nike-container">
         <SectionTitle title={data.title} />
         <div className={`grid items-center justify-items-center gap-6 ${isColumn ? 'grid-cols-3 lg:grid-cols-2 md:grid-cols-1' : 'grid-cols-3 xl:grid-cols-2 md:grid-cols-1'}`}>
            {data.items && data.items.map(item => <Item key={item.id} item={item} isColumn={isColumn} />)}
         </div>
      </div>
   )
}

export default Sales