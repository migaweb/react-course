// Higher Order Component (HOC) - A component (HOC) that renders another components
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdminProp && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>Please login to view the info!</p>}
            {props.isAuthenticated && <WrappedComponent {...props} />}
        </div>
    )
}

// require authentication
const AuthInfo = requireAuthentication(Info)

const AdminInfo = withAdminWarning(Info)

//ReactDOM.render(<AdminInfo isAdminProp={true} info="These are the detail" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the detail" />, document.getElementById("app"))