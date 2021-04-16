const rootElement = document.getElementById('scanner_react_container');
class ScannerApp extends React.Component{
    constructor(props) {
        super(props);
        // this.handleCLick = this.handleClick.bind(this);
        this.setDomain = this.setDomain.bind(this);
        // this.processJson = this.processJson.bind(this);
        this.state ={
            domain: "", method: ""
        }
    }
    // isValidUrl(inputUrl){
    //     if(inputUrl.includes(".")) {
    //         try {
    //             const url = new URL(inputUrl)
    //             if (url.protocol === "http:" || url.protocol === "https:") {
    //                 return url.hostname;
    //             } else{
    //                 return false;
    //             }
    //         } catch (TypeError) {
    //             return false;
    //         }
    //     } else{
    //         return false;
    //     }
    // }
    // checkDomain(){
    //     //TODO add more in depth error checking
    //     let currDomain = this.state.domain
    //     if (currDomain === ""){
    //         return false;
    //     } else if( (currDomain.substring(0,7) === "http://") || currDomain.substring(0,8) === "https://" ){
    //         return this.isValidUrl(currDomain);
    //     } else {
    //         currDomain = "http://" + currDomain;
    //         return this.isValidUrl(currDomain);
    //     }
    // }
    // handleClick(button){
    //     console.log(button);
    //     let domainToSend = this.checkDomain();
    //     if (domainToSend) {
    //         const requestData = {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({"domain": this.state.domain, "method": button})
    //
    //         }
    //         // const response = await fetch()
    //         console.log("before Fetch")
    //         fetch('http://127.0.0.1:5000/', requestData)
    //             // .then(response =>response.json())
    //             .then(response => response.json())
    //             .then(json => this.processJson(json, button))
    //         console.log("afte fetch")
    //     } else {
    //         alert("invalid url, please enter a valid url");
    //     }
    //         // console.log(response)
    // }
    //
    // processJson(json, button){
    //     console.log("json.output type: " + typeof json.output);
    //     // if(json.output){
    //     //     console.log("if json output is true");
    //     // }
    //     if (json.output === null || json.output === {}){
    //         alert("invalid url, please enter a valid url");
    //     } else{
    //         alert(button + ": " + json.output);
    //     }
    // }
    setDomain(event){
        this.setState({domain: event.target.value}, () => this.render());
    }

    render(){
        return(
            <div className ="ScannerApp">
                <HeaderInfo/>
                <input id="domain_input" type="text" value = {this.state.domain} onChange={this.setDomain}/>
                <MethodsList domain = {this.state.domain}/>
                {/*<div className="scanner_buttons">*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('ipv4_addresses')}>IPv4</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('ipv6_addresses')}>IPv6</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('rdns_names')}>RDNS</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('rtt_range')}>Round Trip Range</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('tls_versions')}>TLS</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('http_server')}>HTTP Server Name</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('insecure_http')}>Responds to HTTP</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('redirect_to_https')}>Redirects to HTTPS</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('hsts')}>HSTS</button>*/}
                {/*    <button className="scanner_buttons" onClick={() => this.handleClick('root_ca')}>Root Certificate Authority</button>*/}
                {/*</div>*/}

                {/*<div className ="output_div_container">*/}
                {/*    <Output output = {this.state.output} method = {this.state.method}/>*/}
                {/*</div>*/}
            </div>
        )
    }
}
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
}// function MethodsButtons(props){
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

    isValidUrl(inputUrl){

        if(inputUrl.includes(".")) {
            try {
                console.log("inputUrl: " + inputUrl)
                const url = new URL(inputUrl)
                if (url.protocol === "http:" || url.protocol === "https:") {
                    console.log(url.hostname)
                    console.log("length: "+ url.hostname.length)
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
    checkDomain(){
        //TODO add more in depth error checking

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
        //else {
        //         //     currDomain = "http://" + currDomain;
        //         //     return this.isValidUrl(currDomain);
        //         // }
        // if (currDomain.substring(0,7) === "http://"){
        //     currDomain = currDomain.substring(7);
        //     console.log("strippedString: " + currDomain);
        // }
        // if (currDomain.substring(0,8) === "https://" ){
        //     currDomain = currDomain.substring(8);
        //     console.log("strippedString: " + currDomain);
        // }
        currDomain = "http://" + currDomain;
        return this.isValidUrl(currDomain);
    }
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
                    .then(json => this.processJson(json, method))
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

    processJson(json, method){
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
    // static getDerivedStateFromProps(state, props){
    //     console.log("in derived")
    //     if (state.domain !== props.domain){
    //         // console.log("in delete");
    //         // this.setState({domain: props.domain, output:""}, ()=>this.render());
    //         state.domain = props.domain;
    //         state.output = "";
    //         return {domain : props.domain, output : ""};
    //     } else {
    //         return {domain: props.domain, output: props.output}
    //     }
    //
    // }
    render(){
        // let method = this.props.method;
        if (this.state.domain !== this.props.domain){
            this.setState({domain: this.props.domain, output:""}, ()=>this.render());
        }
        return(
            <div className="method_button_and_output">
                <button className="scanner_button" onClick={() => this.handleClick(this.props.method)}>{this.method_titles[this.props.method]}</button>
                <p className="scanner_output">{this.state.output}</p>
                {/*<MethodsButtonOutput output = {this.state.output}/>*/}
            </div>
        )
    }
}
// class MethodsButtonOutput

ReactDOM.render(
    <ScannerApp/>,
    rootElement
)