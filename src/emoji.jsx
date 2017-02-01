var React = require("react");
var emojione = require("emojione");
var filterObject = require("./objectHelpers");

var Emoji = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    shortname: React.PropTypes.string
  },
  anchor_props: ["id", "href", "onKeyUp", "onClick", "onChange"],

  shouldComponentUpdate: function(nextProps, nextState) {
    // avoid rerendering the Emoji component if the shortname hasnt changed
    return nextProps.shortname != this.props.shortname;
  },

  createMarkup: function() {
    return {__html: emojione.shortnameToImage(this.props.shortname)};
  },



  anchorProps: function() {
    return filterObject(this.props, (prop) => this.anchor_props.includes(prop));
  },

  render: function() {
    return <a {...this.anchorProps()} tabIndex="0" className="emoji"
                title={this.props.name}
                dangerouslySetInnerHTML={this.createMarkup()}>
    </a>
  }
});

module.exports = Emoji;
