import React, { useMemo } from 'react'




const Content = ({ data = {} }) => {
  const rows = useMemo(() => {
    return data.rows || []
  }, [JSON.stringify(data)])

  return (
    <div>
      {renderData(rows)}
    </div>
  )
}

function renderData(rows) {
  return rows.map((r, index) => {
    return <div key={index}>
      {r.dstnum + ' ' + r.city + ' ' + r.status}
    </div>
  })
}

export default Content
