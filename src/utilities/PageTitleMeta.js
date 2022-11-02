import React from 'react'

const PageTitleMeta = (data = {}) => {
    data.title = data.title || 'Airtable App';
    data.metaDescription = data.metaDescription || 'This is react app of Airtable';
    data.metaKeyword = data.metaKeyword || 'React app'
  return (
    <div>PageTitleMeta</div>
  )
}

export default PageTitleMeta