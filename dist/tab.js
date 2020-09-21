'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = exports.Tab = function Tab(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'a',
    { href: '#', onClick: onClick },
    title
  );
};

Tab.propTypes = {
  title: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func,
  name: _react2.default.PropTypes.string
};