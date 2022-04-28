import React from 'react'

function Space() {
    const [space,SetSpace]=useState()
    useEffect(() => {
        fetch('http://localhost:8000/Community').then(res => {
          return res.json()
        }).then(data => {
            SetSpace(data) 
        })
    
      }, [])
  return (
    <div className="space">

    </div>
  )
}

export default Space