var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootElement = document.getElementById('scanner_react_container');

var ScannerApp = function (_React$Component) {
    _inherits(ScannerApp, _React$Component);

    function ScannerApp(props) {
        _classCallCheck(this, ScannerApp);

        var _this = _possibleConstructorReturn(this, (ScannerApp.__proto__ || Object.getPrototypeOf(ScannerApp)).call(this, props));

        _this.handleCLick = _this.handleClick.bind(_this);
        _this.setDomain = _this.setDomain.bind(_this);
        _this.processJson = _this.processJson.bind(_this);
        _this.state = {
            domain: ""
        };
        return _this;
    }

    _createClass(ScannerApp, [{
        key: 'handleClick',
        value: function handleClick(button) {
            var _this2 = this;

            console.log(button);
            var requestData = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "domain": this.state.domain, "method": button })
                // const response = await fetch()
            };console.log("before Fetch");
            fetch('http://127.0.0.1:5000/', requestData)
            // .then(response =>response.json())
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                return _this2.processJson(json);
            });
            console.log("afte fetch");
            // console.log(response)
        }
    }, {
        key: 'processJson',
        value: function processJson(json) {
            console.log(json);
        }
    }, {
        key: 'setDomain',
        value: function setDomain(event) {
            this.setState({ domain: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { className: 'ScannerApp' },
                React.createElement(
                    'div',
                    { className: 'scanner_buttons' },
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('ipv4_addresses');
                            } },
                        'IPv4'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('ipv6_addresses');
                            } },
                        'IPv6'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('rdns_names');
                            } },
                        'RDNS'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('rtt_range');
                            } },
                        'Round Trip Range'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('tls_versions');
                            } },
                        'TLS'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('http_server');
                            } },
                        'HTTP Server Name'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('insecure_http');
                            } },
                        'Responds to HTTP'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('redirect_to_https');
                            } },
                        'Redirects to HTTPS'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('hsts');
                            } },
                        'HSTS'
                    ),
                    React.createElement(
                        'button',
                        { className: 'scanner_buttons', onClick: function onClick() {
                                return _this3.handleClick('root_ca');
                            } },
                        'Root Certificate Authority'
                    )
                ),
                React.createElement('input', { type: 'text', onChange: this.setDomain })
            );
        }
    }]);

    return ScannerApp;
}(React.Component);

ReactDOM.render(React.createElement(ScannerApp, null), rootElement);