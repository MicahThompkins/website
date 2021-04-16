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
            active : "App",
            buttons: {"App": "project_title_button_active", "Go": "project_title_button", "Scanner": "project_title_button",
            "Search": "project_title_button", "TCP": "project_title_button", "Website": "project_title_button"
            }
        }

    }
    handleClick(type){
        let newButtons = this.state.buttons;
        newButtons[this.state.active] = "project_title_button";
        newButtons[type] = "project_title_button_active";
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
                    <button className={this.state.buttons["App"]} onClick={this.handleAppClick}>App</button>
                    <button className={this.state.buttons["Go"]} onClick={this.handleGoClick}>Go</button>
                    <button className={this.state.buttons["Scanner"]} onClick={this.handleScannerClick}>Scanner</button>
                    <button className={this.state.buttons["Search"]} onClick={this.handleSearchClick}>Search</button>
                    <button className={this.state.buttons["TCP"]} onClick={this.handleTCPClick}>TCP</button>
                    <button className={this.state.buttons["Website"]} onClick={this.handleWebsiteClick}>Website</button>
                </div>
                <div className="projectInfoBody">
                    {/*<h1 id="projects_header">Projects</h1>*/}
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
                <ProjectDescription active={this.props.active}/>
                <ProjectRole active={this.props.active}/>
                <ProjectLink active={this.props.active}/>
            </div>
        )
    }
}
class ProjectTitle extends React.Component{
    constructor(props){
        super(props);

        this.titles = {"App": "Pattonville App Capstone", "Go": "Go Tournament Administrator", "Scanner":
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
class ProjectDescription extends React.Component{
    constructor(props){
        super(props);
        let app_desc_arr =["Over the course of one year I worked with seven other students to produce two apps, one for iOS and one for Android. We split into iOS and Android teams at the beginning of the year, but worked closely together to ensure similar design, within the given design standards of the two platforms, and features.  The year before we had all taken a class on Android development so we had learned the basics of mobile development and Android Development.  As a member of the iOS team I had to teach myself Swift in order to be able to develop for iOS as part of this project. ", "Throughout the course of the year we used principles from Agile development to produce features by deadlines. We met with our client, the board of education multiple times to present, and sent out surveys to parents, students and teachers about what features they wanted. We also formed a group of Alpha testers to test our app through various stages and give us feedback. As we continued to work we next released a semi-open beta, taking in feedback to figure out what features worked well and what didn’t and improving upon our design. Finally at the end of the year we held an open launch party for our app and presented on the process. ","I was a developer on the iOS team and the Documentation Lead. I worked to add data persistence across the app about which schools people needed to receive information from as well as created the calendar interface, among many other little tweaks. I also led the team in documenting our code and writing clean, reusable, readable code, in case another capstone group were to come along and maintain our project. "];
        let go_desc_arr = ["In Software Construction I worked with a partner over the course of the quarter to build a Go tournament administrator. Go is the abstract strategy board game where the goal is to use stones to surround more territory than your opponent. We used pair programming to build this project, programming primarily on one computer and discussing our code choices step by step as we did so. We built the entire project from scratch, first starting with the point and stone objects before growing the project to the boards objects, the rule checker, the game referee, and finally the tournament administrator. Throughout the quarter we gave multiple code walks to our class explaining and defending our code choice to the professor and our fellow students. Our final project had a visual component, as well as the ability to run a tournament comprised of local and remote players. We presented our final project to our professor giving one last final code walk discussing the entire breadth of our project.", "In this project I learned a lot about modular code design and the importance and effectiveness of Unit testing. Because this was a project that started small and grew rather large we had to design our code in a very modular and scalable way with frequent testing in order to ensure all the moving pieces worked together well. Additionally as an added challenge our professors had us switch partners half way through, as part of this process we had to decide which code base to use, and what elements we wanted to take from the other unchosen base. All in all this project gave me a lot of skills and practice that I believe I can apply to the workforce.", ""];
        let scanner_desc_arr = ["In my Introduction to Networking class we built a network scanner that given a list of domains would return information about the network. For this project I used Python 3, working within virtual environments and creating code that could be downloaded and ran on any machine through use of a pip requirements file. The scanner utilizes command line tools to do most of its lookups, and if the host machine is missing one of those command line tools the scanner still operates with graceful error handling.", "", ""];
        let tcp_desc_arr = ["In my Introduction to Networking class we built a reliable streaming transport protocol on top of UDP. It was a simplified version of TCP. We wrote code to break the data into chunks, code to handle the reordering of out of order packets, and we also used acknowledgments and pipelining to handle packet loss. Finally we wrote code to handle corruption errors. At the end we had a simplified version of TCP that we could use to transfer data. I learned a lot about concurrency issues and how to design code to avoid deadlock doing this project. ", "", ""];
        let search_desc_arr = ["Built a news search engine using AWS services (Elastic BeanStalk, ElasticSearch, Tomcat, EC2), Common Crawl web scraper, Java, and React.", "The process involved creating an ElasticSearch Index on AWS.  Then writing a java program that pulled Common Crawls most recent news archive and posted documents to it using the bulk api. Following that I wrote a program implenting the API by taking in query paramaters from the URL to query the Elastic Search Index. I utilized that programs results to display news article results in a React frontend similar to Google.", "Finally, I combined with a partner to mix and match our components and put all the programs together and have a working updating search engine. We recorded a video (linked below) showcasing all the working parts before taking the project down because it would cost money to continue to host."];
        let website_desc_arr = ["I decided to build this website for two reasons, one to have a personal website for the job search process, and two to practice and grow my web development skills. I created the first version in vanilla Javascript with HTML and CSS and hosted it on Github pages.  I then began thinking of adding an interactive for a class project to my website so I moved the website to pythonanywhere and bought a domain. ", "Recently I updated my projects page to be a React app to increase my React skills and also allow for easier future customization. After completing that I decided to add my network scanner project to my website as a full-stack web app. First I took my network scanner project and modified it so that it would work with a single domain and each method could be called individually. After that, I designed the front end in React furthering my React skills and growing my love for website design. While designing the front end I began creating and testing the Flask web server that runs with my modified class project. It is currently hosted on Heroku. The full project is live and you can use it for yourself on my scanner page", ""];
        this.descriptions = {"App": app_desc_arr, "Go": go_desc_arr, "Scanner":
                scanner_desc_arr, "Search": search_desc_arr, "TCP": tcp_desc_arr, "Website":
                website_desc_arr
        }
        this.state = {
            active: props.active,
            description: this.descriptions[this.props.active]
        };

    }
    render (){
        return (
            <div className="project_description_container">
                <h4 className="project_info_titles">Description</h4>
                <p className="project_description_paragraph">{this.descriptions[this.props.active][0]}</p>
                <p className="project_description_paragraph">{this.descriptions[this.props.active][1]}</p>
                <p className="project_description_paragraph">{this.descriptions[this.props.active][2]}</p>
            </div>
        )
    }
}
class ProjectRole extends React.Component{
    constructor(props){
        super(props);

        this.roles = {"App": "App Developer and Documentation Lead", "Go": "Co-Developer", "Scanner":
                "Lead Developer", "Search": "Lead Developer", "TCP": "Lead Developer", "Website":
                "Sole Designer and Developer"
        }
        console.log("this.props.active: ", this.props.active);
        this.state = {
            active: props.active,
            role: this.roles[this.props.active]
        };

    }
    render (){
        return (
            <div className="project_title_container">
                <h4 className="project_info_titles">Role</h4>
                <p className="project_info_lines">{this.roles[this.props.active]}</p>
            </div>
        )
    }
}
class ProjectLink extends React.Component{
    constructor(props){
        super(props);

        this.links = {"App": "https://github.com/Pattonville-App-Development-Team/ios-official", "Go": "https://github.com/MicahThompkins/go_project", "Scanner":
                "https://github.com/MicahThompkins/class_project1", "Search": "https://youtu.be/D_mMU-N8FOs", "TCP": "I can not link to this project due to academic integrity purposes. ", "Website":
                "www.micahthompkins.com"
        }
        // var links_arr = ["https://github.com/Pattonville-App-Development-Team/ios-official", "https://github.com/MicahThompkins/go_project", "https://github.com/MicahThompkins/class_project1", "I can not link to this project due to academic integrity purposes. "]
        console.log("this.props.active: ", this.props.active);
        this.state = {
            active: props.active,
            link: this.links[this.props.active]
        };

    }
    render (){
        if (this.props.active !=="TCP") {
            return (
                <div className="project_title_container">

                    <h4 className="project_info_titles">Link</h4>
                    <a href={this.links[this.props.active]}
                       className="project_info_links">{this.links[this.props.active]}</a>
                </div>
            )
        } else {
            return (
                <div className="project_title_container">

                    <h4 className="project_info_titles">Link</h4>
                    <p
                       className="project_info_lines">{this.links[this.props.active]}</p>
                </div>
            )
        }
    }
}
ReactDOM.render(
    <ProjectsApp/>,
    rootElement
)