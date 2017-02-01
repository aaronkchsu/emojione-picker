var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");
var emojione = require("emojione");
var filterObject = require("./objectHelpers");

var Emoji = React.createClass({
  displayName: "Emoji",

  propTypes: {
    onClick: React.PropTypes.func,
    shortname: React.PropTypes.string
  },
  anchor_props: ["id", "href", "onKeyUp", "onClick", "onChange"],

  shouldComponentUpdate: function (nextProps, nextState) {
    // avoid rerendering the Emoji component if the shortname hasnt changed
    return nextProps.shortname != this.props.shortname;
  },

  createMarkup: function () {
    return { __html: emojione.shortnameToImage(this.props.shortname) };
  },

  anchorProps: function () {
    return filterObject(this.props, prop => this.anchor_props.includes(prop));
  },

  render: function () {
    return React.createElement("a", _extends({}, this.anchorProps(), { tabIndex: "0", className: "emoji",
      title: this.props.name,
      dangerouslySetInnerHTML: this.createMarkup() }));
  }
});

module.exports = Emoji;