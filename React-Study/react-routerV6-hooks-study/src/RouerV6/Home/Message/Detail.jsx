import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom'

export default function Detail() {
    const { id} = useParams()
    console.log(id);
    console.log('useSearchParams------');
    console.log(useSearchParams());

  return (
    <div>Detail {id}</div>
  )
}
