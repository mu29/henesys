import React from 'react'
import {
  WebView,
  Platform,
  ViewStyle,
  NativeSyntheticEvent,
  WebViewMessageEventData,
} from 'react-native'

const SCRIPT = `
<script>
function awaitPostMessage() {
  var isReactNativePostMessageReady = !!window.originalPostMessage;
  var queue = [];
  var currentPostMessageFn = function store(message) {
    if (queue.length > 100) queue.shift();
    queue.push(message);
  };
  if (!isReactNativePostMessageReady) {
    var originalPostMessage = window.postMessage;
    Object.defineProperty(window, 'postMessage', {
      configurable: true,
      enumerable: true,
      get: function () {
        return currentPostMessageFn;
      },
      set: function (fn) {
        currentPostMessageFn = fn;
        isReactNativePostMessageReady = true;
        setTimeout(sendQueue, 0);
      }
    });
    window.postMessage.toString = function () {
      return String(originalPostMessage);
    };
  }

  function sendQueue() {
    while (queue.length > 0) window.postMessage(queue.shift());
  }
}

window.onload = function() {
  awaitPostMessage();

  var height = Math.min.apply(Math, [
    window.innerHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.body.clientHeight,
    document.body.scrollHeight
  ].filter(Boolean));

  window.postMessage(String(height));
}
</script>
`

const STYLE = `
<style>
body {
  font-family: 'Apple SD Gothic Neo', 'Noto Sans CJK';
  background-color: '#FFFFFF';
  overflow: hidden;
}
img {
  width: 100% !important;
  margin-bottom: 16px;
}
div {
  font-size: 16px;
  line-height: 1.2;
}
font[size = "1"] {
  font-size: 14px;
  line-height: 1.2;
}
font[size = "2"] {
  font-size: 16px;
  line-height: 1.2;
}
font[size = "3"] {
  font-size: 18px;
  line-height: 1.2;
}
font[size = "4"] {
  font-size: 20px;
  line-height: 1.2;
}
font[size = "5"] {
  font-size: 22px;
  line-height: 1.2;
}
font[size = "6"] {
  font-size: 24px;
  line-height: 1.2;
}
br {
  line-height: 1.2;
}
</style>
`

export interface HtmlViewProps {
  content: string,
  style?: ViewStyle,
}

export interface HtmlViewState {
  contentHeight: number,
}

class HtmlView extends React.PureComponent<HtmlViewProps, HtmlViewState> {
  state = {
    contentHeight: 0,
  }

  _getArticleContent = () => ({
    html: `
      <html>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${STYLE}
        ${SCRIPT}
        <body>
          <div>
            ${this.props.content}
          </div>
        </body>
      </html>
    `,
  })

  _onMessage = (event: NativeSyntheticEvent<WebViewMessageEventData>) => this.setState({
    contentHeight: Number(event.nativeEvent.data),
  })

  render() {
    const { style } = this.props
    const { contentHeight: height } = this.state

    return height === 0 ? (
      <WebView
        source={this._getArticleContent()}
        onMessage={this._onMessage}
        scrollEnabled={false}
        javaScriptEnabled
      />
    ) : (
      <WebView
        source={this._getArticleContent()}
        style={[style, { height }]}
        scrollEnabled={Platform.OS === 'android'}
        javaScriptEnabled
      />
    )
  }
}

export default HtmlView
