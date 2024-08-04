import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'

export default function SearchParamsDetail() {

    console.log('SearchParamsDetail------');
    const [params, setParams] = useSearchParams()
    console.log(useLocation());
    return (
        <div>

            SearchParamsDetail {params.get('id')},{params.get('title')}
            <div>
                <button onClick={() => {
                    setParams(() => 'id=200')
                }}>点击更新 当前地址栏的参数</button>
            </div>
        </div>
    )
}
