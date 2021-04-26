var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const lement = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('projects_react_container'));
var rootElement = document.getElementById('projects_react_container');

/**
 * ProjectsApp is the entire container for the projects web page. This component contains onClick methods for all the projects.
 */

var ProjectsApp = function (_React$Component) {
    _inherits(ProjectsApp, _React$Component);

    function ProjectsApp(props) {
        _classCallCheck(this, ProjectsApp);

        var _this = _possibleConstructorReturn(this, (ProjectsApp.__proto__ || Object.getPrototypeOf(ProjectsApp)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleAppClick = _this.handleAppClick.bind(_this);
        _this.handleGoClick = _this.handleGoClick.bind(_this);
        _this.handleScannerClick = _this.handleScannerClick.bind(_this);
        _this.handleTCPClick = _this.handleTCPClick.bind(_this);
        _this.handleSearchClick = _this.handleSearchClick.bind(_this);
        _this.handleWebsiteClick = _this.handleWebsiteClick.bind(_this);
        /** state.active: is used to control the active state of the App. state.buttons: is used to change the className
         * and css/dispkay of the buttons based upon which button is active
         **/
        _this.state = {
            active: "App",
            buttons: { "App": "project_title_button_active", "Go": "project_title_button", "Scanner": "project_title_button",
                "Search": "project_title_button", "TCP": "project_title_button", "Website": "project_title_button"
            }
        };

        return _this;
    }

    /**
     * This method is used to handle a click on each option. Whichever option is clicked this method then adjusts the
     * state.buttons dictionary so that the input method is now the active
     * @param type of the project that is now active
     */


    _createClass(ProjectsApp, [{
        key: "handleClick",
        value: function handleClick(type) {
            var _this2 = this;

            var newButtons = this.state.buttons;
            newButtons[this.state.active] = "project_title_button";
            newButtons[type] = "project_title_button_active";
            this.setState({ active: type, buttons: newButtons }, function () {
                return _this2.render();
            });
            console.log(type);
        }
    }, {
        key: "handleAppClick",
        value: function handleAppClick() {
            this.handleClick("App");
        }
    }, {
        key: "handleGoClick",
        value: function handleGoClick() {
            this.handleClick("Go");
        }
    }, {
        key: "handleScannerClick",
        value: function handleScannerClick() {
            this.handleClick("Scanner");
        }
    }, {
        key: "handleTCPClick",
        value: function handleTCPClick() {
            this.handleClick("TCP");
        }
    }, {
        key: "handleSearchClick",
        value: function handleSearchClick() {
            this.handleClick("Search");
        }
    }, {
        key: "handleWebsiteClick",
        value: function handleWebsiteClick() {
            this.handleClick("Website");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "projectApp" },
                React.createElement(
                    "div",
                    { className: "project_titles" },
                    React.createElement(
                        "button",
                        { className: this.state.buttons["App"], onClick: this.handleAppClick },
                        "App"
                    ),
                    React.createElement(
                        "button",
                        { className: this.state.buttons["Go"], onClick: this.handleGoClick },
                        "Go"
                    ),
                    React.createElement(
                        "button",
                        { className: this.state.buttons["Scanner"], onClick: this.handleScannerClick },
                        "Scanner"
                    ),
                    React.createElement(
                        "button",
                        { className: this.state.buttons["Search"], onClick: this.handleSearchClick },
                        "Search"
                    ),
                    React.createElement(
                        "button",
                        { className: this.state.buttons["TCP"], onClick: this.handleTCPClick },
                        "TCP"
                    ),
                    React.createElement(
                        "button",
                        { className: this.state.buttons["Website"], onClick: this.handleWebsiteClick },
                        "Website"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "projectInfoBody" },
                    React.createElement(ProjectInfoBody, { active: this.state.active })
                )
            );
        }
    }]);

    return ProjectsApp;
}(React.Component);

/**
 * Component that contains all the subcomponents that describe everything related to the project and if the project has an interactive, the interactive
 * props: active: the active project name
 */


var ProjectInfoBody = function (_React$Component2) {
    _inherits(ProjectInfoBody, _React$Component2);

    function ProjectInfoBody(props) {
        _classCallCheck(this, ProjectInfoBody);

        return _possibleConstructorReturn(this, (ProjectInfoBody.__proto__ || Object.getPrototypeOf(ProjectInfoBody)).call(this, props));
    }

    _createClass(ProjectInfoBody, [{
        key: "render",
        value: function render() {
            console.log("ProjectInfoBody this.props.active: ", this.props.active);
            return React.createElement(
                "div",
                null,
                React.createElement(ProjectTitle, { active: this.props.active }),
                React.createElement(ProjectDescription, { active: this.props.active }),
                React.createElement(ProjectRole, { active: this.props.active }),
                React.createElement(ProjectLink, { active: this.props.active }),
                React.createElement(ProjectInteractive, { active: this.props.active })
            );
        }
    }]);

    return ProjectInfoBody;
}(React.Component);

/**
 * The component that changes the title based on the active project passed in the props. Uses a dictionary of titles keyed
 * on the active project shortname
 */


var ProjectTitle = function (_React$Component3) {
    _inherits(ProjectTitle, _React$Component3);

    function ProjectTitle(props) {
        _classCallCheck(this, ProjectTitle);

        var _this4 = _possibleConstructorReturn(this, (ProjectTitle.__proto__ || Object.getPrototypeOf(ProjectTitle)).call(this, props));

        _this4.titles = { "App": "Pattonville App Capstone", "Go": "Go Tournament Administrator", "Scanner": "Network Scanner", "Search": "News Search Engine", "TCP": "Reliable Transport Streamer over UDP", "Website": "Website"
        };
        console.log("this.props.active: ", _this4.props.active);
        _this4.state = {
            active: props.active,
            title: _this4.titles[_this4.props.active]
        };

        return _this4;
    }

    _createClass(ProjectTitle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "project_title_container" },
                React.createElement(
                    "h2",
                    { className: "project_title" },
                    this.titles[this.props.active]
                )
            );
        }
    }]);

    return ProjectTitle;
}(React.Component);

/**
 * The component that changes the description based on the active project passed in the props. Uses a dictionary of descriptions
 * keyed on the active project shortname.
 */


var ProjectDescription = function (_React$Component4) {
    _inherits(ProjectDescription, _React$Component4);

    function ProjectDescription(props) {
        _classCallCheck(this, ProjectDescription);

        var _this5 = _possibleConstructorReturn(this, (ProjectDescription.__proto__ || Object.getPrototypeOf(ProjectDescription)).call(this, props));

        var app_desc_arr = ["Over the course of one year I worked with seven other students to produce two apps, one for iOS and one for Android. We split into iOS and Android teams at the beginning of the year, but worked closely together to ensure similar design, within the given design standards of the two platforms, and features.  The year before we had all taken a class on Android development so we had learned the basics of mobile development and Android Development.  As a member of the iOS team I had to teach myself Swift in order to be able to develop for iOS as part of this project. ", "Throughout the course of the year we used principles from Agile development to produce features by deadlines. We met with our client, the board of education multiple times to present, and sent out surveys to parents, students and teachers about what features they wanted. We also formed a group of Alpha testers to test our app through various stages and give us feedback. As we continued to work we next released a semi-open beta, taking in feedback to figure out what features worked well and what didn’t and improving upon our design. Finally at the end of the year we held an open launch party for our app and presented on the process. ", "I was a developer on the iOS team and the Documentation Lead. I worked to add data persistence across the app about which schools people needed to receive information from as well as created the calendar interface, among many other little tweaks. I also led the team in documenting our code and writing clean, reusable, readable code, in case another capstone group were to come along and maintain our project. "];
        var go_desc_arr = ["In Software Construction I worked with a partner over the course of the quarter to build a Go tournament administrator. Go is the abstract strategy board game where the goal is to use stones to surround more territory than your opponent. We used pair programming to build this project, programming primarily on one computer and discussing our code choices step by step as we did so. We built the entire project from scratch, first starting with the point and stone objects before growing the project to the boards objects, the rule checker, the game referee, and finally the tournament administrator. Throughout the quarter we gave multiple code walks to our class explaining and defending our code choice to the professor and our fellow students. Our final project had a visual component, as well as the ability to run a tournament comprised of local and remote players. We presented our final project to our professor giving one last final code walk discussing the entire breadth of our project.", "In this project I learned a lot about modular code design and the importance and effectiveness of Unit testing. Because this was a project that started small and grew rather large we had to design our code in a very modular and scalable way with frequent testing in order to ensure all the moving pieces worked together well. Additionally as an added challenge our professors had us switch partners half way through, as part of this process we had to decide which code base to use, and what elements we wanted to take from the other unchosen base. All in all this project gave me a lot of skills and practice that I believe I can apply to the workforce.", ""];
        var scanner_desc_arr = ["In my Introduction to Networking class we built a network scanner that given a list of domains would return information about the network. For this project I used Python 3, working within virtual environments and creating code that could be downloaded and ran on any machine through use of a pip requirements file. The scanner utilizes command line tools to do most of its lookups, and if the host machine is missing one of those command line tools the scanner still operates with graceful error handling.", "", ""];
        var tcp_desc_arr = ["In my Introduction to Networking class we built a reliable streaming transport protocol on top of UDP. It was a simplified version of TCP. We wrote code to break the data into chunks, code to handle the reordering of out of order packets, and we also used acknowledgments and pipelining to handle packet loss. Finally we wrote code to handle corruption errors. At the end we had a simplified version of TCP that we could use to transfer data. I learned a lot about concurrency issues and how to design code to avoid deadlock doing this project. ", "", ""];
        var search_desc_arr = ["Built a news search engine using AWS services (Elastic BeanStalk, ElasticSearch, Tomcat, EC2), Common Crawl web scraper, Java, and React.", "The process involved creating an ElasticSearch Index on AWS.  Then writing a java program that pulled Common Crawls most recent news archive and posted documents to it using the bulk api. Following that I wrote a program implenting the API by taking in query paramaters from the URL to query the Elastic Search Index. I utilized that programs results to display news article results in a React frontend similar to Google.", "Finally, I combined with a partner to mix and match our components and put all the programs together and have a working updating search engine. We recorded a video (linked below) showcasing all the working parts before taking the project down because it would cost money to continue to host."];
        var website_desc_arr = ["I decided to build this website for two reasons, one to have a personal website for the job search process, and two to practice and grow my web development skills. I created the first version in vanilla Javascript with HTML and CSS and hosted it on Github pages.  I then began thinking of adding an interactive for a class project to my website so I moved the website to pythonanywhere and bought a domain. ", "Recently I updated my projects page to be a React app to increase my React skills and also allow for easier future customization. After completing that I decided to add my network scanner project to my website as a full-stack web app. First I took my network scanner project and modified it so that it would work with a single domain and each method could be called individually. After that, I designed the front end in React furthering my React skills and growing my love for website design. While designing the front end I began creating and testing the Flask web server that runs with my modified class project. It is currently hosted on Heroku. The full project is live and you can use it for yourself on my scanner page", ""];
        _this5.descriptions = { "App": app_desc_arr, "Go": go_desc_arr, "Scanner": scanner_desc_arr, "Search": search_desc_arr, "TCP": tcp_desc_arr, "Website": website_desc_arr
        };
        _this5.state = {
            active: props.active,
            description: _this5.descriptions[_this5.props.active]
        };

        return _this5;
    }

    _createClass(ProjectDescription, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "project_description_container" },
                React.createElement(
                    "h4",
                    { className: "project_info_titles" },
                    "Description"
                ),
                React.createElement(
                    "p",
                    { className: "project_description_paragraph" },
                    this.descriptions[this.props.active][0]
                ),
                React.createElement(
                    "p",
                    { className: "project_description_paragraph" },
                    this.descriptions[this.props.active][1]
                ),
                React.createElement(
                    "p",
                    { className: "project_description_paragraph" },
                    this.descriptions[this.props.active][2]
                )
            );
        }
    }]);

    return ProjectDescription;
}(React.Component);

/**
 * The component that changes the role based on the active project passed in the props. Uses a dictionary of roles
 * keyed on the active project shortname.
 */


var ProjectRole = function (_React$Component5) {
    _inherits(ProjectRole, _React$Component5);

    function ProjectRole(props) {
        _classCallCheck(this, ProjectRole);

        var _this6 = _possibleConstructorReturn(this, (ProjectRole.__proto__ || Object.getPrototypeOf(ProjectRole)).call(this, props));

        _this6.roles = { "App": "App Developer and Documentation Lead", "Go": "Co-Developer", "Scanner": "Lead Developer", "Search": "Lead Developer", "TCP": "Lead Developer", "Website": "Sole Designer and Developer"
        };
        console.log("this.props.active: ", _this6.props.active);
        _this6.state = {
            active: props.active,
            role: _this6.roles[_this6.props.active]
        };

        return _this6;
    }

    _createClass(ProjectRole, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "project_title_container" },
                React.createElement(
                    "h4",
                    { className: "project_info_titles" },
                    "Role"
                ),
                React.createElement(
                    "p",
                    { className: "project_info_lines" },
                    this.roles[this.props.active]
                )
            );
        }
    }]);

    return ProjectRole;
}(React.Component);

/**
 * The component that changes the link based on the active project passed in the props. Uses a dictionary of linkss
 * keyed on the active project shortname.
 */


var ProjectLink = function (_React$Component6) {
    _inherits(ProjectLink, _React$Component6);

    function ProjectLink(props) {
        _classCallCheck(this, ProjectLink);

        var _this7 = _possibleConstructorReturn(this, (ProjectLink.__proto__ || Object.getPrototypeOf(ProjectLink)).call(this, props));

        _this7.links = { "App": "https://github.com/Pattonville-App-Development-Team/ios-official", "Go": "https://github.com/MicahThompkins/go_project", "Scanner": "https://github.com/MicahThompkins/class_project1", "Search": "https://youtu.be/D_mMU-N8FOs", "TCP": "I can not link to this project due to academic integrity purposes. ", "Website": "www.micahthompkins.com"
            // var links_arr = ["https://github.com/Pattonville-App-Development-Team/ios-official", "https://github.com/MicahThompkins/go_project", "https://github.com/MicahThompkins/class_project1", "I can not link to this project due to academic integrity purposes. "]
        };console.log("this.props.active: ", _this7.props.active);
        _this7.state = {
            active: props.active,
            link: _this7.links[_this7.props.active]
        };

        return _this7;
    }
    /** This render method conditionally renders because there is no link for the TCP project**/


    _createClass(ProjectLink, [{
        key: "render",
        value: function render() {
            if (this.props.active !== "TCP") {
                return React.createElement(
                    "div",
                    { className: "project_title_container" },
                    React.createElement(
                        "h4",
                        { className: "project_info_titles" },
                        "Link"
                    ),
                    React.createElement(
                        "a",
                        { href: this.links[this.props.active],
                            className: "project_info_links" },
                        this.links[this.props.active]
                    )
                );
            } else {
                return React.createElement(
                    "div",
                    { className: "project_title_container" },
                    React.createElement(
                        "h4",
                        { className: "project_info_titles" },
                        "Link"
                    ),
                    React.createElement(
                        "p",
                        {
                            className: "project_info_lines" },
                        this.links[this.props.active]
                    )
                );
            }
        }
    }]);

    return ProjectLink;
}(React.Component);

var ProjectInteractive = function (_React$Component7) {
    _inherits(ProjectInteractive, _React$Component7);

    function ProjectInteractive(props) {
        _classCallCheck(this, ProjectInteractive);

        return _possibleConstructorReturn(this, (ProjectInteractive.__proto__ || Object.getPrototypeOf(ProjectInteractive)).call(this, props));
    }

    _createClass(ProjectInteractive, [{
        key: "render",
        value: function render() {
            if (this.props.active === "Scanner") {
                return React.createElement(ScannerApp, null);
            } else {
                return null;
            }
        }
    }]);

    return ProjectInteractive;
}(React.Component);

/**
 * The component that contains the entire Scanner app. The state to be managed and passed down as props is the current
 * input in the domain box
 */


var ScannerApp = function (_React$Component8) {
    _inherits(ScannerApp, _React$Component8);

    function ScannerApp(props) {
        _classCallCheck(this, ScannerApp);

        var _this9 = _possibleConstructorReturn(this, (ScannerApp.__proto__ || Object.getPrototypeOf(ScannerApp)).call(this, props));

        _this9.setDomain = _this9.setDomain.bind(_this9);
        _this9.state = {
            domain: "", method: ""
        };
        return _this9;
    }
    /** method called onchange of the text input to set the state and rerender the component**/


    _createClass(ScannerApp, [{
        key: "setDomain",
        value: function setDomain(event) {
            var _this10 = this;

            this.setState({ domain: event.target.value }, function () {
                return _this10.render();
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


var HeaderInfo = function (_React$Component9) {
    _inherits(HeaderInfo, _React$Component9);

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


var MethodsList = function (_React$Component10) {
    _inherits(MethodsList, _React$Component10);

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


var MethodsListItem = function (_React$Component11) {
    _inherits(MethodsListItem, _React$Component11);

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


var MethodsButtonExplanation = function (_React$Component12) {
    _inherits(MethodsButtonExplanation, _React$Component12);

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
        var _this14 = _possibleConstructorReturn(this, (MethodsButtonExplanation.__proto__ || Object.getPrototypeOf(MethodsButtonExplanation)).call(this, props));

        _this14.method_explanations = { "ipv4_addresses": "A list of IPv4 addresses listed as DNS \"A\" records for the domain.",
            "ipv6_addresses": "A list of IPv6 addresses listed as DNS \"AAAA\" records for the domain",
            "rdns_names": "Lists the reverse dns names for the sites IPv4 addresses.",
            "http_server": "The web server software reported in the Server Header of the HTTP response. If there is no server header in the response \"No Server Header\" is shown.",
            "insecure_http": "Returns a JSON boolean indicating whether the website listens for unencrypted HTTP requests on port 80.",
            "redirect_to_https": "Returns a JSON boolean indicating whether unencrypted HTTP requests on port 80 are redirected to HTTPS requests on port 443. After 10 redirects, it gives up and says false.",
            "hsts": "Returns a JSON boolean indicating whether the website has enabled HTTP Strict Transport Security",
            "root_ca": "Lists the organization name of the root certificate authority (CA) at the base of the chain of trust for validating this server's public key."
        };
        return _this14;
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


var MethodsButton = function (_React$Component13) {
    _inherits(MethodsButton, _React$Component13);

    function MethodsButton(props) {
        _classCallCheck(this, MethodsButton);

        var _this15 = _possibleConstructorReturn(this, (MethodsButton.__proto__ || Object.getPrototypeOf(MethodsButton)).call(this, props));

        _this15.handleCLick = _this15.handleClick.bind(_this15);
        _this15.processJson = _this15.processJson.bind(_this15);
        _this15.method_titles = { "ipv4_addresses": "IPv4",
            "ipv6_addresses": "IPv6",
            "rdns_names": "RDNS",
            "http_server": "Server",
            "insecure_http": "Insecure?",
            "redirect_to_https": "Redirects",
            "hsts": "HSTS",
            "root_ca": "Root Ca"
        };
        _this15.state = {
            domain: _this15.props['domain'],
            output: ""
        };
        return _this15;
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
            var _this16 = this;

            // console.log(method);
            if (this.state.output === "") {
                this.setState({ output: "Loading..." }, function () {
                    return _this16.render();
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
                        return _this16.processJson(json);
                    });
                    // console.log("after fetch")
                } else if (domainToSend === 2) {
                    this.setState({ output: "" }, function () {
                        return _this16.render();
                    });
                    alert("Please do not input http:// or https://");
                } else {
                    this.setState({ output: "" }, function () {
                        return _this16.render();
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
            var _this17 = this;

            if (json.output === null) {
                this.setState({ output: "" }, function () {
                    return _this17.render();
                });
                alert("Server can't use that url, please enter a different url");
            } else {
                var outputToSet = json.output.toString();
                outputToSet = outputToSet.replace(/,/g, "\n");
                this.setState({ output: outputToSet }, function () {
                    return _this17.render();
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
            var _this18 = this;

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
                            return _this18.handleClick(_this18.props.method);
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

ReactDOM.render(React.createElement(ProjectsApp, null), rootElement);