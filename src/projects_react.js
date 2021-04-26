// const lement = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('projects_react_container'));
const rootElement = document.getElementById('projects_react_container');

/**
 * ProjectsApp is the entire container for the projects web page. This component contains onClick methods for all the projects.
 */
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
        /** state.active: is used to control the active state of the App. state.buttons: is used to change the className
         * and css/dispkay of the buttons based upon which button is active
         **/
        this.state = {
            active : "App",
            buttons: {"App": "project_title_button_active", "Go": "project_title_button", "Scanner": "project_title_button",
            "Search": "project_title_button", "TCP": "project_title_button", "Website": "project_title_button"
            }
        }

    }

    /**
     * This method is used to handle a click on each option. Whichever option is clicked this method then adjusts the
     * state.buttons dictionary so that the input method is now the active
     * @param type of the project that is now active
     */
    handleClick(type){
        let newButtons = this.state.buttons;
        newButtons[this.state.active] = "project_title_button";
        newButtons[type] = "project_title_button_active";
        this.setState({active: type, buttons: newButtons}, () => this.render());
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
                    <ProjectInfoBody active={this.state.active}/>
                </div>
            </div>
        )
    }
}

/**
 * Component that contains all the subcomponents that describe everything related to the project and if the project has an interactive, the interactive
 * props: active: the active project name
 */
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
                <ProjectInteractive active={this.props.active}/>
            </div>
        )
    }
}

/**
 * The component that changes the title based on the active project passed in the props. Uses a dictionary of titles keyed
 * on the active project shortname
 */
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

/**
 * The component that changes the description based on the active project passed in the props. Uses a dictionary of descriptions
 * keyed on the active project shortname.
 */
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

/**
 * The component that changes the role based on the active project passed in the props. Uses a dictionary of roles
 * keyed on the active project shortname.
 */
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

/**
 * The component that changes the link based on the active project passed in the props. Uses a dictionary of linkss
 * keyed on the active project shortname.
 */
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
    /** This render method conditionally renders because there is no link for the TCP project**/
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
class ProjectInteractive extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.active === "Scanner"){
            return <ScannerApp/>
        }else{
            return null;
        }
    }
}

/**
 * The component that contains the entire Scanner app. The state to be managed and passed down as props is the current
 * input in the domain box
 */
class ScannerApp extends React.Component{
    constructor(props) {
        super(props);
        this.setDomain = this.setDomain.bind(this);
        this.state ={
            domain: "", method: ""
        }
    }
    /** method called onchange of the text input to set the state and rerender the component**/
    setDomain(event){
        this.setState({domain: event.target.value}, () => this.render());
    }

    render(){
        return(
            <div className ="ScannerApp">
                <HeaderInfo/>
                <input id="domain_input" type="text" value = {this.state.domain} onChange={this.setDomain}/>
                <MethodsList domain = {this.state.domain}/>
            </div>
        )
    }
}

/**
 * The component that renders the header of the web app doesnt take in props.
 */
class HeaderInfo extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="header_info">
                <h2 className="scanner_title_heading">Scanner Web App</h2>
                <p className="scanner_header_info">This is my network scanner project. Please input a domain name and ending (like youtube.com) and then select the information you want to learn about.</p>
            </div>
        )
    }
}

/**
 * The component that contains all the MethodList items. props.domain is the current domain input
 */
class MethodsList extends React.Component{
    constructor(props) {
        super(props);
        // console.log("In methods buttons props.domain: " + props.domain);
    }
    render() {
        // console.log("in methods buttons render props.domain")
        return (
            <div className="scanner_methods_list">
                <MethodsListItem domain={this.props.domain} method='ipv4_addresses'/>
                <MethodsListItem domain={this.props.domain} method='ipv6_addresses'/>
                <MethodsListItem domain={this.props.domain} method='rdns_names'/>
                {/*<MethodsListItem domain={this.props.domain} method='rtt_range'/>*/}
                {/*<MethodsListItem domain={this.props.domain} method='tls_versions'/>*/}
                <MethodsListItem domain={this.props.domain} method='http_server'/>
                <MethodsListItem domain={this.props.domain} method='insecure_http'/>
                <MethodsListItem domain={this.props.domain} method='redirect_to_https'/>
                <MethodsListItem domain={this.props.domain} method='hsts'/>
                <MethodsListItem domain={this.props.domain} method='root_ca'/>
            </div>
        )
    }
}

/**
 * Component that contains the explanation component and button/output component. props.domain is the current domain input
 */
class MethodsListItem extends React.Component{
    constructor(props) {
        super(props);
        // console.log("In methods buttons props.domain: " + props.domain);
    }

    render() {
        return (
            <div className="scanner_method_list_item">
                <MethodsButtonExplanation method = {this.props.method}/>
                <MethodsButton domain={this.props.domain} method ={this.props.method}/>
            </div>
        )
    }
}

/**
 * Contains the method explanation. A dictonary of explanations that's keyed on the method names nad uses that dictonary
 * with the props.method to display the explanation about the method passed in.
 */
class MethodsButtonExplanation extends React.Component{
    constructor(props) {
        super(props);
        /// Commented out because tls_versions and rtt_range currently not working
        // this.method_explanations = {"ipv4_addresses": "A list of IPv4 addresses listed as DNS \"A\" records for the domain.",
        //     "ipv6_addresses": "A list of IPv6 addresses listed as DNS \"AAAA\" records for the domain",
        //     "rdns_names": "Lists the reverse dns names for the sites IPv4 addresses.",
        //     "rtt_range": "Prints the shortest and longest round trip time (RTT) observed when contacting all the sites IPv4 addresses.",
        //     "tls_versions": "Lists all versions of Transport Layer Security (TLS/SSL) supported by the server",
        //     "http_server": "The web server software reported in the Server Header of the HTTP response. If there is no server header in the response \"No Server Header\" is shown.",
        //     "insecure_http": "Returns a JSON boolean indicating whether the website listens for unencrypted HTTP requests on port 80.",
        //     "redirect_to_https": "Returns a JSON boolean indicating whether unencrypted HTTP requests on port 80 are redirected to HTTPS requests on port 443. After 10 redirects, it gives up and says false.",
        //     "hsts": "Returns a JSON boolean indicating whether the website has enabled HTTP Strict Transport Security",
        //     "root_ca": "Lists the organization name of the root certificate authority (CA) at the base of the chain of trust for validating this server's public key.}"
        // }
        this.method_explanations = {"ipv4_addresses": "A list of IPv4 addresses listed as DNS \"A\" records for the domain.",
            "ipv6_addresses": "A list of IPv6 addresses listed as DNS \"AAAA\" records for the domain",
            "rdns_names": "Lists the reverse dns names for the sites IPv4 addresses.",
            "http_server": "The web server software reported in the Server Header of the HTTP response. If there is no server header in the response \"No Server Header\" is shown.",
            "insecure_http": "Returns a JSON boolean indicating whether the website listens for unencrypted HTTP requests on port 80.",
            "redirect_to_https": "Returns a JSON boolean indicating whether unencrypted HTTP requests on port 80 are redirected to HTTPS requests on port 443. After 10 redirects, it gives up and says false.",
            "hsts": "Returns a JSON boolean indicating whether the website has enabled HTTP Strict Transport Security",
            "root_ca": "Lists the organization name of the root certificate authority (CA) at the base of the chain of trust for validating this server's public key."
        }
    }
    render() {
        return (
            <div className="methods_button_explanation_container">
                <p className="methods_button_explanation">{this.method_explanations[this.props.method]}</p>
            </div>
        )
    }

}

/**
 * The Button and output component. Contains a button labeled by methods shortname keyed to the inputs given by props.method, props.domain is the current domain input
 */
class MethodsButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleCLick = this.handleClick.bind(this);
        this.processJson = this.processJson.bind(this);
        this.method_titles = {"ipv4_addresses": "IPv4",
            "ipv6_addresses": "IPv6",
            "rdns_names": "RDNS",
            "http_server": "Server",
            "insecure_http": "Insecure?",
            "redirect_to_https": "Redirects",
            "hsts": "HSTS",
            "root_ca": "Root Ca"
        }
        this.state ={
            domain: this.props['domain'],
            output: ""
        }
    }
    /**
     * This method checks to see if the url passed in contains a period and doesnt error when creating a url object. If
     * both conditions are true it returns the hostname
     * @param inputUrl: the url to check
     * @returns {string|boolean}: the hostname if conditions are true otherwise false
     */
    isValidUrl(inputUrl){

        if(inputUrl.includes(".")) {
            try {
                // console.log("inputUrl: " + inputUrl)
                const url = new URL(inputUrl)
                if (url.protocol === "http:" || url.protocol === "https:") {
                    // console.log(url.hostname)
                    // console.log("length: "+ url.hostname.length)
                    let returnString = url.hostname
                    // return url.hostname;
                    return returnString;
                } else{
                    return false;
                }
            } catch (TypeError) {
                return false;
            }
        } else{
            return false;
        }
    }

    /** method to check to make sure the inputted domain is an acceptable format
     * Checks the passed in domain from props.domain, if the domain is empty returns false. if it begins with http:// or
     * https:// return 2 to tell handleclick it has http, if neither are then prepend http:// and return the value of
     * isValidUrl
     * @returns {string|boolean|number}
     */
    checkDomain(){

        let currDomain = this.props.domain
        // console.log(this.props.domain)
        if (currDomain === ""){
            return false;
        }
        else if( (currDomain.substring(0,7) === "http://") || currDomain.substring(0,8) === "https://" ){
            // console.log("in http://")
            // return this.isValidUrl(currDomain);

            return 2;
        }
        currDomain = "http://" + currDomain;
        return this.isValidUrl(currDomain);
    }

    /**
     * Function that checks the domain and then if it is valid sends it to the webserver with the given method
     * @param method the method that is calling the function
     */
    handleClick(method){
        // console.log(method);
        if(this.state.output === "") {
            this.setState({output: "Loading..."}, () => this.render());
            let domainToSend = this.checkDomain();
            // console.log("domainToSend: " + domainToSend);
            if (domainToSend !== 2 && domainToSend !== false) {
                // console.log("this.props.domain: " + this.props.domain + " method: " + this.props.method);
                const requestData = {
                    method: 'POST',
                    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                    body: JSON.stringify({"domain": this.props.domain, "method": method})

                }
                // const response = await fetch()
                // console.log("before Fetch")

                // fetch('http://127.0.0.1:5000/', requestData)
                fetch('https://scanner-webserver.herokuapp.com/', requestData)
                    // .then(response =>response.json())
                    .then(response => response.json())
                    .then(json => this.processJson(json))
                // console.log("after fetch")
            } else if (domainToSend === 2){
                this.setState({output: ""}, () => this.render());
                alert("Please do not input http:// or https://");
            }
            else {
                this.setState({output: ""}, () => this.render());
                alert("Invalid url, please enter a valid url");
            }
        }
        // console.log(response)
    }

    /**
     * method used to handles the json received from the webserver
     * @param json the JSON output from the webserver to be processed and set to the output
     */
    processJson(json){
        if (json.output === null){
            this.setState({output: ""}, () => this.render());
            alert("Server can't use that url, please enter a different url");
        } else{
            let outputToSet = json.output.toString();
            outputToSet = outputToSet.replace(/,/g, "\n");
            this.setState({output:outputToSet}, ()=> this.render());
            // alert(method + ": " + json.output);
            // console.log(method + ": " + json.output);

        }
    }

    /**
     * This changes the output of the methods if the domain is changed
     * @param props
     * @param state
     * @returns {{output: string, domain}|null}
     */
    static getDerivedStateFromProps(props, state){
        if (props.domain !== state.domain){
            return {domain: props.domain, output: ""};
        }
        else{
            return null;
        }
    }
    render(){
        // let method = this.props.method;
        // if (this.state.domain !== this.props.domain){
        //     this.setState({domain: this.props.domain, output:""}, ()=>this.render());
        // }
        return(
            <div className="method_button_and_output">
                <button className="scanner_button" onClick={() => this.handleClick(this.props.method)}>{this.method_titles[this.props.method]}</button>
                <p className="scanner_output">{this.state.output}</p>
                {/*<MethodsButtonOutput output = {this.state.output}/>*/}
            </div>
        )
    }
}


ReactDOM.render(
    <ProjectsApp/>,
    rootElement
)