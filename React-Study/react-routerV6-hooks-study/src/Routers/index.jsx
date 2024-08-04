import React, { lazy } from 'react'

export default function index(name) {
    const page = lazy(() => import(name))
    return page
}
