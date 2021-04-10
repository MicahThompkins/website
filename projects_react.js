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
            active: "App"
        };

        return _this;
    }

    _createClass(ProjectsApp, [{
        key: "handleClick",
        value: function handleClick(type) {
            var _this2 = this;

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
                        { className: "project_title_button", onClick: this.handleAppClick },
                        "App"
                    ),
                    React.createElement(
                        "button",
                        { className: "project_title_button", onClick: this.handleGoClick },
                        "Go"
                    ),
                    React.createElement(
                        "button",
                        { className: "project_title_button", onClick: this.handleScannerClick },
                        "Scanner"
                    ),
                    React.createElement(
                        "button",
                        { className: "project_title_button", onClick: this.handleSearchClick },
                        "Search"
                    ),
                    React.createElement(
                        "button",
                        { className: "project_title_button", onClick: this.handleTCPClick },
                        "TCP"
                    ),
                    React.createElement(
                        "button",
                        { className: "project_title_button", onClick: this.handleWebsiteClick },
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
                React.createElement(ProjectTitle, { active: this.props.active })
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

        _this4.titles = { "App": "Pattonville App Capstone Project", "Go": "Go Tournament Administrator", "Scanner": "Network Scanner", "Search": "News Search Engine", "TCP": "Reliable Transport Streamer over UDP", "Website": "Website"
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
// class ProjectDescription extends React.Component{
// }
// class ProjectRole extends React.Component{
//
// }
// class ProjectLink extends React.Component{
//
// }


ReactDOM.render(React.createElement(ProjectsApp, null), rootElement);