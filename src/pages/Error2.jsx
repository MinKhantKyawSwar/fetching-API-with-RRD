import React from 'react'
import { Link, useRouteError} from 'react-router-dom';

const Error2 = () => {
  const error = useRouteError();
  console.log(error);
  let title = "Unknown Error."

  if (error.status === 500){
     title = error.data.message
  }

  return (
    <section>
        <h1>{title}</h1>
        <Link to = {"/"}>
            <button>Go back</button>
        </Link>
    </section>
  )
}

export default Error2

// 36:09