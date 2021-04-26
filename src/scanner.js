const rootElement = document.getElementById('scanner_react_container');

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
    <ScannerApp/>,
    rootElement
)