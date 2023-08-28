import React from 'react'
import { Button } from 'react-bootstrap'

const Buttonexplore = () => {
  return (
    <div className="d-grid gap-2">
      <Button href='/cities' className='m-3 p-2' variant="success" size="lg">
        Explore
      </Button>
    </div>
  )
}

export default Buttonexplore