import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function StudentPage() {
  let navigation = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const {id} = useParams();
  return (
    <div className='routerPractice' style={{display: "block", textAlign: "left"}}>
      <p>학생의 이름은 <span style={{color: "green"}}>{id}</span> 입니다.</p>
      {
        searchParams.get("name") && (
          <p>실제 이름은 <span style={{color:"red"}}>{searchParams.get("name")}</span></p>
        )
      }
      <button onClick={() => navigation(-1)} >이전페이지로</button>
    </div>
  )
}
