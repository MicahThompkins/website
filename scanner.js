var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootElement = document.getElementById('scanner_react_container');

/**
 * The component that contains the entire Scanner app. The state to be managed and passed down as props is the current
 * input in the domain box
 */

var ScannerApp = function (_React$Component) {
    _inherits(ScannerApp, _React$Component);

    function ScannerApp(props) {
        _classCallCheck(this, ScannerApp);

        var _this = _possibleConstructorReturn(this, (ScannerApp.__proto__ || Object.getPrototypeOf(ScannerApp)).call(this, props));

        _this.setDomain = _this.setDomain.bind(_this);
        _this.state = {
            domain: "", method: ""
        };
        return _this;
    }
    /** method called onchange of the text input to set the state and rerender the component**/


    _createClass(ScannerApp, [{
        key: "setDomain",
        value: function setDomain(event) {
            var _this2 = this;

            this.setState({ domain: event.target.value }, function () {
                return _this2.render();
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "ScannerApp" },
                React.createElement(HeaderInfo, null),
                React.createElement("input", { id: "domain_input", type: "text", value: this.state.domain, onChange: this.setDomain }),
                React.createElement(MethodsList, { domain: this.state.domain })
            );
        }
    }]);

    return ScannerApp;
}(React.Component);

/**
 * The component that renders the header of the web app doesnt take in props.
 */


var HeaderInfo = function (_React$Component2) {
    _inherits(HeaderInfo, _React$Component2);

    function HeaderInfo(props) {
        _classCallCheck(this, HeaderInfo);

        return _possibleConstructorReturn(this, (HeaderInfo.__proto__ || Object.getPrototypeOf(HeaderInfo)).call(this, props));
    }

    _createClass(HeaderInfo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "header_info" },
                React.createElement(
                    "h2",
                    { className: "scanner_title_heading" },
                    "Scanner Web App"
                ),
                React.createElement(
                    "p",
                    { className: "scanner_header_info" },
                    "This is my network scanner project. Please input a domain name and ending (like youtube.com) and then select the information you want to learn about."
                )
            );
        }
    }]);

    return HeaderInfo;
}(React.Component);

/**
 * The component that contains all the MethodList items. props.domain is the current domain input
 */


var MethodsList = function (_React$Component3) {
    _inherits(MethodsList, _React$Component3);

    function MethodsList(props) {
        _classCallCheck(this, MethodsList);

        return _possibleConstructorReturn(this, (MethodsList.__proto__ || Object.getPrototypeOf(MethodsList)).call(this, props));
        // console.log("In methods buttons props.domain: " + props.domain);
    }

    _createClass(MethodsList, [{
        key: "render",
        value: function render() {
            // console.log("in methods buttons render props.domain")
            return React.createElement(
                "div",
                { className: "scanner_methods_list" },
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "ipv4_addresses" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "ipv6_addresses" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "rdns_names" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "http_server" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "insecure_http" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "redirect_to_https" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "hsts" }),
                React.createElement(MethodsListItem, { domain: this.props.domain, method: "root_ca" })
            );
        }
    }]);

    return MethodsList;
}(React.Component);

/**
 * Component that contains the explanation component and button/output component. props.domain is the current domain input
 */


var MethodsListItem = function (_React$Component4) {
    _inherits(MethodsListItem, _React$Component4);

    function MethodsListItem(props) {
        _classCallCheck(this, MethodsListItem);

        return _possibleConstructorReturn(this, (MethodsListItem.__proto__ || Object.getPrototypeOf(MethodsListItem)).call(this, props));
        // console.log("In methods buttons props.domain: " + props.domain);
    }

    _createClass(MethodsListItem, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "scanner_method_list_item" },
                React.createElement(MethodsButtonExplanation, { method: this.props.method }),
                React.createElement(MethodsButton, { domain: this.props.domain, method: this.props.method })
            );
        }
    }]);

    return MethodsListItem;
}(React.Component);

/**
 * Contains the method explanation. A dictonary of explanations that's keyed on the method names nad uses that dictonary
 * with the props.method to display the explanation about the method passed in.
 */


var MethodsButtonExplanation = function (_React$Component5) {
    _inherits(MethodsButtonExplanation, _React$Component5);

    function MethodsButtonExplanation(props) {
        _classCallCheck(this, MethodsButtonExplanation);

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
        var _this6 = _possibleConstructorReturn(this, (MethodsButtonExplanation.__proto__ || Object.getPrototypeOf(MethodsButtonExplanation)).call(this, props));

        _this6.method_explanations = { "ipv4_addresses": "A list of IPv4 addresses listed as DNS \"A\" records for the domain.",
            "ipv6_addresses": "A list of IPv6 addresses listed as DNS \"AAAA\" records for the domain",
            "rdns_names": "Lists the reverse dns names for the sites IPv4 addresses.",
            "http_server": "The web server software reported in the Server Header of the HTTP response. If there is no server header in the response \"No Server Header\" is shown.",
            "insecure_http": "Returns a JSON boolean indicating whether the website listens for unencrypted HTTP requests on port 80.",
            "redirect_to_https": "Returns a JSON boolean indicating whether unencrypted HTTP requests on port 80 are redirected to HTTPS requests on port 443. After 10 redirects, it gives up and says false.",
            "hsts": "Returns a JSON boolean indicating whether the website has enabled HTTP Strict Transport Security",
            "root_ca": "Lists the organization name of the root certificate authority (CA) at the base of the chain of trust for validating this server's public key."
        };
        return _this6;
    }

    _createClass(MethodsButtonExplanation, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "methods_button_explanation_container" },
                React.createElement(
                    "p",
                    { className: "methods_button_explanation" },
                    this.method_explanations[this.props.method]
                )
            );
        }
    }]);

    return MethodsButtonExplanation;
}(React.Component);

/**
 * The Button and output component. Contains a button labeled by methods shortname keyed to the inputs given by props.method, props.domain is the current domain input
 */


var MethodsButton = function (_React$Component6) {
    _inherits(MethodsButton, _React$Component6);

    function MethodsButton(props) {
        _classCallCheck(this, MethodsButton);

        var _this7 = _possibleConstructorReturn(this, (MethodsButton.__proto__ || Object.getPrototypeOf(MethodsButton)).call(this, props));

        _this7.handleCLick = _this7.handleClick.bind(_this7);
        _this7.processJson = _this7.processJson.bind(_this7);
        _this7.method_titles = { "ipv4_addresses": "IPv4",
            "ipv6_addresses": "IPv6",
            "rdns_names": "RDNS",
            "http_server": "Server",
            "insecure_http": "Insecure?",
            "redirect_to_https": "Redirects",
            "hsts": "HSTS",
            "root_ca": "Root Ca"
        };
        _this7.state = {
            domain: _this7.props['domain'],
            output: ""
        };
        return _this7;
    }
    /**
     * This method checks to see if the url passed in contains a period and doesnt error when creating a url object. If
     * both conditions are true it returns the hostname
     * @param inputUrl: the url to check
     * @returns {string|boolean}: the hostname if conditions are true otherwise false
     */


    _createClass(MethodsButton, [{
        key: "isValidUrl",
        value: function isValidUrl(inputUrl) {

            if (inputUrl.includes(".")) {
                try {
                    // console.log("inputUrl: " + inputUrl)
                    var url = new URL(inputUrl);
                    if (url.protocol === "http:" || url.protocol === "https:") {
                        // console.log(url.hostname)
                        // console.log("length: "+ url.hostname.length)
                        var returnString = url.hostname;
                        // return url.hostname;
                        return returnString;
                    } else {
                        return false;
                    }
                } catch (TypeError) {
                    return false;
                }
            } else {
                return false;
            }
        }

        /** method to check to make sure the inputted domain is an acceptable format
         * Checks the passed in domain from props.domain, if the domain is empty returns false. if it begins with http:// or
         * https:// return 2 to tell handleclick it has http, if neither are then prepend http:// and return the value of
         * isValidUrl
         * @returns {string|boolean|number}
         */

    }, {
        key: "checkDomain",
        value: function checkDomain() {

            var currDomain = this.props.domain;
            // console.log(this.props.domain)
            if (currDomain === "") {
                return false;
            } else if (currDomain.substring(0, 7) === "http://" || currDomain.substring(0, 8) === "https://") {
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

    }, {
        key: "handleClick",
        value: function handleClick(method) {
            var _this8 = this;

            // console.log(method);
            if (this.state.output === "") {
                this.setState({ output: "Loading..." }, function () {
                    return _this8.render();
                });
                var domainToSend = this.checkDomain();
                // console.log("domainToSend: " + domainToSend);
                if (domainToSend !== 2 && domainToSend !== false) {
                    // console.log("this.props.domain: " + this.props.domain + " method: " + this.props.method);
                    var requestData = {
                        method: 'POST',
                        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
                        body: JSON.stringify({ "domain": this.props.domain, "method": method })
                        // const response = await fetch()
                        // console.log("before Fetch")

                        // fetch('http://127.0.0.1:5000/', requestData)
                    };fetch('https://scanner-webserver.herokuapp.com/', requestData)
                    // .then(response =>response.json())
                    .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        return _this8.processJson(json);
                    });
                    // console.log("after fetch")
                } else if (domainToSend === 2) {
                    this.setState({ output: "" }, function () {
                        return _this8.render();
                    });
                    alert("Please do not input http:// or https://");
                } else {
                    this.setState({ output: "" }, function () {
                        return _this8.render();
                    });
                    alert("Invalid url, please enter a valid url");
                }
            }
            // console.log(response)
        }

        /**
         * method used to handles the json received from the webserver
         * @param json the JSON output from the webserver to be processed and set to the output
         */

    }, {
        key: "processJson",
        value: function processJson(json) {
            var _this9 = this;

            if (json.output === null) {
                this.setState({ output: "" }, function () {
                    return _this9.render();
                });
                alert("Server can't use that url, please enter a different url");
            } else {
                var outputToSet = json.output.toString();
                outputToSet = outputToSet.replace(/,/g, "\n");
                this.setState({ output: outputToSet }, function () {
                    return _this9.render();
                });
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

    }, {
        key: "render",
        value: function render() {
            var _this10 = this;

            // let method = this.props.method;
            // if (this.state.domain !== this.props.domain){
            //     this.setState({domain: this.props.domain, output:""}, ()=>this.render());
            // }
            return React.createElement(
                "div",
                { className: "method_button_and_output" },
                React.createElement(
                    "button",
                    { className: "scanner_button", onClick: function onClick() {
                            return _this10.handleClick(_this10.props.method);
                        } },
                    this.method_titles[this.props.method]
                ),
                React.createElement(
                    "p",
                    { className: "scanner_output" },
                    this.state.output
                )
            );
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
            if (props.domain !== state.domain) {
                return { domain: props.domain, output: "" };
            } else {
                return null;
            }
        }
    }]);

    return MethodsButton;
}(React.Component);

ReactDOM.render(React.createElement(ScannerApp, null), rootElement);