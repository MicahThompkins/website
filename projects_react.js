var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const lement = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('projects_react_container'));
var rootElement = document.getElementById('projects_react_container');

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
        _this.state = {
            active: "App",
            buttons: { "App": "project_title_button_active", "Go": "project_title_button", "Scanner": "project_title_button",
                "Search": "project_title_button", "TCP": "project_title_button", "Website": "project_title_button"
            }
        };

        return _this;
    }

    _createClass(ProjectsApp, [{
        key: "handleClick",
        value: function handleClick(type) {
            var _this2 = this;

            var newButtons = this.state.buttons;
            newButtons[this.state.active] = "project_title_button";
            newButtons[type] = "project_title_button_active";
            this.setState({ active: type }, function () {
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
            console.log("rendering projects app");
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
                React.createElement(ProjectLink, { active: this.props.active })
            );
        }
    }]);

    return ProjectInfoBody;
}(React.Component);

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

var ProjectDescription = function (_React$Component4) {
    _inherits(ProjectDescription, _React$Component4);

    function ProjectDescription(props) {
        _classCallCheck(this, ProjectDescription);

        var _this5 = _possibleConstructorReturn(this, (ProjectDescription.__proto__ || Object.getPrototypeOf(ProjectDescription)).call(this, props));

        var app_desc_arr = ["Over the course of one year I worked with seven other students to produce two apps, one for iOS and one for Android. We split into iOS and Android teams at the beginning of the year, but worked closely together to ensure similar design, within the given design standards of the two platforms, and features.  The year before we had all taken a class on Android development so we had learned the basics of mobile development and Android Development.  As a member of the iOS team I had to teach myself Swift in order to be able to develop for iOS as part of this project. ", "Throughout the course of the year we used principles from Agile development to produce features by deadlines. We met with our client, the board of education multiple times to present, and sent out surveys to parents, students and teachers about what features they wanted. We also formed a group of Alpha testers to test our app through various stages and give us feedback. As we continued to work we next released a semi-open beta, taking in feedback to figure out what features worked well and what didn’t and improving upon our design. Finally at the end of the year we held an open launch party for our app and presented on the process. ", "I was a developer on the iOS team and the Documentation Lead. I worked to add data persistence across the app about which schools people needed to receive information from as well as created the calendar interface, among many other little tweaks. I also led the team in documenting our code and writing clean, reusable, readable code, in case another capstone group were to come along and maintain our project. "];
        var go_desc_arr = ["In Software Construction I worked with a partner over the course of the quarter to build a Go tournament administrator. Go is the abstract strategy board game where the goal is to use stones to surround more territory than your opponent. We used pair programming to build this project, programming primarily on one computer and discussing our code choices step by step as we did so. We built the entire project from scratch, first starting with the point and stone objects before growing the project to the boards objects, the rule checker, the game referee, and finally the tournament administrator. Throughout the quarter we gave multiple code walks to our class explaining and defending our code choice to the professor and our fellow students. Our final project had a visual component, as well as the ability to run a tournament comprised of local and remote players. We presented our final project to our professor giving one last final code walk discussing the entire breadth of our project.", "In this project I learned a lot about modular code design and the importance and effectiveness of Unit testing. Because this was a project that started small and grew rather large we had to design our code in a very modular and scalable way with frequent testing in order to ensure all the moving pieces worked together well. Additionally as an added challenge our professors had us switch partners half way through, as part of this process we had to decide which code base to use, and what elements we wanted to take from the other unchosen base. All in all this project gave me a lot of skills and practice that I believe I can apply to the workforce.", ""];
        var scanner_desc_arr = ["In my Introduction to Networking class we built a network scanner that given a list of domains would return information about the network. For this project I used Python 3, working within virtual environments and creating code that could be downloaded and ran on any machine through use of a pip requirements file. The scanner utilizes command line tools to do most of its lookups, and if the host machine is missing one of those command line tools the scanner still operates with graceful error handling.", "", ""];
        var tcp_desc_arr = ["In my Introduction to Networking class we built a reliable streaming transport protocol on top of UDP. It was a simplified version of TCP. We wrote code to break the data into chunks, code to handle the reordering of out of order packets, and we also used acknowledgments and pipelining to handle packet loss. Finally we wrote code to handle corruption errors. At the end we had a simplified version of TCP that we could use to transfer data. I learned a lot about concurrency issues and how to design code to avoid deadlock doing this project. ", "", ""];
        var search_desc_arr = ["Built a news search engine using AWS services (Elastic BeanStalk, ElasticSearch, Tomcat, EC2), Common Crawl web scraper, Java, and React.", "The process involved creating an ElasticSearch Index on AWS.  Then writing a java program that pulled Common Crawls most recent news archive and posted documents to it using the bulk api. I wrote a program implenting the API by taking in query paramaters from the URL to . And then I utilized that program to query the ElasticSearch index for news results and display those results in a React frontend similar to Google.", "Finally, I combined with a partner to mix and match our components and put all the programs together and have a working updating search engine. We recorded a video showcasing all the working parts before taking the project down because it would cost money to continue to host."];
        var website_desc_arr = ["I decided to build this website for two reasons, one to have a personal website for the job search process, and two to practice and grow my web development skills. I created the first version in vanilla Javascript with HTML and CSS and hosted it on Github pages.  I then began thinking of adding an interactive for a class project to my website so I moved the website to pythonanywhere and bought a domain. ", "Winter quarter I focused on my classes and growing my skills in security, SQL, and AWS. I recently updated my projects page to be a React app to increase my react skills and also allow for easier future customization.", "I am currently working on adding my network scanner project to my website. After that I plan to add some of my photography work as well as class work from two of my classes this quarter that I am working extra on to ensure they match the design style and quality of my website."];
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

ReactDOM.render(React.createElement(ProjectsApp, null), rootElement);