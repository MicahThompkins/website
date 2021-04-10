// const lement = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('projects_react_container'));
const rootElement = document.getElementById('projects_react_container');
class ProjectsApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAppClick = this.handleAppClick.bind(this);
        this.handleGoClick = this.handleGoClick.bind(this);
        this.handleScannerClick = this.handleScannerClick.bind(this);
        this.handleTCPClick = this.handleTCPClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleWebsiteClick = this.handleWebsiteClick.bind(this);
        this.state = {
            active : "App"
        }

    }
    handleClick(type){
        this.setState({active: type}, () => this.render());
        console.log(type);
    }
    handleAppClick(){
       this.handleClick("App");
    }
    handleGoClick(){
        this.handleClick("Go");
    }
    handleScannerClick(){
        this.handleClick("Scanner");
    }
    handleTCPClick(){
        this.handleClick("TCP");
    }
    handleSearchClick(){
        this.handleClick("Search");
    }
    handleWebsiteClick(){
        this.handleClick("Website");
    }


    render(){
        console.log("rendering projects app");
        return (
            <div className="projectApp">
                <div className="project_titles">
                    <button className="project_title_button" onClick={this.handleAppClick}>App</button>
                    <button className="project_title_button" onClick={this.handleGoClick}>Go</button>
                    <button className="project_title_button" onClick={this.handleScannerClick}>Scanner</button>
                    <button className="project_title_button" onClick={this.handleSearchClick}>Search</button>
                    <button className="project_title_button" onClick={this.handleTCPClick}>TCP</button>
                    <button className="project_title_button" onClick={this.handleWebsiteClick}>Website</button>
                </div>
                <div className="projectInfoBody">
                    <ProjectInfoBody active={this.state.active}/>
                </div>
            </div>
        )
    }
}

class ProjectInfoBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("ProjectInfoBody this.props.active: ", this.props.active);
        return(
            <div>
                <ProjectTitle active={this.props.active}/>
                {/*<ProjectDescription active={this.props.active}/>*/}
                {/*<ProjectRole active={this.props.active}/>*/}
                {/*<ProjectLink active={this.props.active}/>*/}
            </div>
        )
    }
}
class ProjectTitle extends React.Component{
    constructor(props){
        super(props);

        this.titles = {"App": "Pattonville App Capstone Project", "Go": "Go Tournament Administrator", "Scanner":
                "Network Scanner", "Search": "News Search Engine", "TCP": "Reliable Transport Streamer over UDP", "Website":
                "Website"
        }
        console.log("this.props.active: ", this.props.active);
        this.state = {
            active: props.active,
            title: this.titles[this.props.active]
        };

    }
    render (){
        return (
            <div className="project_title_container">
                <h2 className="project_title">{this.titles[this.props.active]}</h2>
            </div>
        )
    }
}
// class ProjectDescription extends React.Component{
// }
// class ProjectRole extends React.Component{
//
// }
// class ProjectLink extends React.Component{
//
// }
ReactDOM.render(
    <ProjectsApp/>,
    rootElement
)