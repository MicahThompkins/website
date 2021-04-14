const rootElement = document.getElementById('scanner_react_container');
class ScannerApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleCLick = this.handleClick.bind(this);
        this.setDomain = this.setDomain.bind(this);
        this.processJson = this.processJson.bind(this);
        this.state ={
            domain: ""
        }
    }
    handleClick(button){
        console.log(button);
        const requestData ={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"domain": this.state.domain, "method":button})

        }
        // const response = await fetch()
        console.log("before Fetch")
        fetch('http://127.0.0.1:5000/', requestData)
            // .then(response =>response.json())
            .then(response => response.json())
            .then(json => this.processJson(json))
        console.log("afte fetch")
        // console.log(response)
    }
    processJson(json){
        console.log(json)
    }
    setDomain(event){
        this.setState({domain: event.target.value})
    }

    render(){
        return(
            <div className ="ScannerApp">
                <div className="scanner_buttons">
                    <button className="scanner_buttons" onClick={() => this.handleClick('ipv4_addresses')}>IPv4</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('ipv6_addresses')}>IPv6</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('rdns_names')}>RDNS</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('rtt_range')}>Round Trip Range</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('tls_versions')}>TLS</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('http_server')}>HTTP Server Name</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('insecure_http')}>Responds to HTTP</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('redirect_to_https')}>Redirects to HTTPS</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('hsts')}>HSTS</button>
                    <button className="scanner_buttons" onClick={() => this.handleClick('root_ca')}>Root Certificate Authority</button>
                </div>
                <input type="text" onChange={this.setDomain}/>
            </div>
        )
    }
}
ReactDOM.render(
    <ScannerApp/>,
    rootElement
)