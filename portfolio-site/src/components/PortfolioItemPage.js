import React from "react"

const PortfolioItemPage = (props) => (
    <div>
        <h1>Portfolio item</h1>
        <p>This is one portfolio item {props.match.params.id}</p>
    </div>
)

export default PortfolioItemPage