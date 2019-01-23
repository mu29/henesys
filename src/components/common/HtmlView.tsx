import React from 'react'
import {
  WebView,
  StyleSheet,
  Dimensions,
  ViewStyle,
  NativeSyntheticEvent,
  WebViewMessageEventData,
} from 'react-native'

const SCRIPT_AND_STYLE = `
<script>
function waitForBridge() {
  if (window.postMessage.length !== 1){
    setTimeout(waitForBridge, 200);
  } else {
    window.postMessage(document.body.scrollHeight);
  }
}
window.onload = waitForBridge;
</script>
<style>
body {
  font-family: 'Apple SD Gothic Neo', 'Noto Sans CJK';
  background-color: '#FFFFFF',
}
img {
  width: 100%;
  margin-bottom: 16px;
}
div {
  font-size: 16px;
  line-height: 1.2;
}
font[size = "1"] {
  font-size: 24px;
  line-height: 1.2;
}
font[size = "2"] {
  font-size: 28px;
  line-height: 1.2;
}
font[size = "3"] {
  font-size: 32px;
  line-height: 1.2;
}
font[size = "4"] {
  font-size: 36px;
  line-height: 1.2;
}
font[size = "5"] {
  font-size: 40px;
  line-height: 1.2;
}
font[size = "6"] {
  font-size: 44px;
  line-height: 1.2;
}
br {
  line-height: 1.2;
}
</style>
`

const WINDOW_HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  calculator: {
    height: 0,
  },
})

export interface HtmlViewProps {
  content: string,
  style?: ViewStyle,
}

export interface HtmlViewState {
  contentHeight: number,
}

class HtmlView extends React.PureComponent<HtmlViewProps, HtmlViewState> {
  state = {
    contentHeight: WINDOW_HEIGHT,
  }

  _getArticleContent = () => ({
    html: `
      <html>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${SCRIPT_AND_STYLE}
        <body>
          ${this.props.content || ''}
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

    return (
      <React.Fragment>
        <WebView
          source={this._getArticleContent()}
          onMessage={this._onMessage}
          style={styles.calculator}
          scrollEnabled={false}
          javaScriptEnabled
        />
        <WebView
          source={this._getArticleContent()}
          style={[style, { height }]}
          scrollEnabled={false}
          javaScriptEnabled
        />
      </React.Fragment>
    )
  }
}

export default HtmlView
