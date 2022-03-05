import React from 'react'
import notfound from "./404.jpg";

const NotFound = () => {
    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <img width={"100%"} alt="404 Not Found" style={{ objectFit: "contain" }} src={notfound} />
        </div>
    )
}

export default NotFound