import React from 'react'
import { Link } from 'react-router-dom'

const Filters = () => {
  return (
    <section className='filters'>
        <div className='container'>
            <ul className='flex gap-30'>
                <li className='font-bold'>Model:</li>
                <li>Single Container</li>
                <li>Side-by-Side Container</li>
                <li>Two-Story Container</li>
            </ul>
            <ul className='flex gap-30'>
                <li className='font-bold'>Room:</li>
                <li>Single Container</li>
                <li>Side-by-Side Container</li>
                <li>Two-Story Container</li>
            </ul>
        </div>
    </section>
  )
}

export default Filters