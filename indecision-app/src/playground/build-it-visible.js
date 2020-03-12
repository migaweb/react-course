//babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets="env,react" --watch
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Toggle visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "hide details" : "show details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Toggled text</p>
                    </div>
                )} 
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

// const appRoot = document.querySelector("#app")

// const onToggleVisibility = () => {
//     const target = document.querySelector("#toggle")
//     visibility = !visibility
//     render()
// }

// let visibility = false 

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (<p id="toggle">Toggled text</p>)} 
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render()

