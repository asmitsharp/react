import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  const result = useLoaderData()
  // const [result, setResult] = useState([])

  // useEffect(() => {

  //     .then((data) => setResult(data))
  // }, [])

  return (
    <div>
      <h1 className="text-align-center text-orange-700">Github</h1>
      <h2>
        <span>Followers : </span>
        {result.followers}
      </h2>
      <img src={result.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/asmitsharp")
  return response.json()
}
