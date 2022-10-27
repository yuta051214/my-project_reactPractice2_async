import { useState } from "react";

const User = (props) => {
  return (
          <div className="flex-col w-48 text-gray-600">
            <a className="">
              <img alt="ecommerce" className="rounded overflow-hidden" src="logo192.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 mb-1">USER NAME</h3>
              <h2 className="text-gray-900">{props.name}</h2>
              <p className="mt-1">Hello!</p>
            </div>
          </div>
  )
}

export default User;
