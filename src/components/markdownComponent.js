import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

// ---- Remark plugins ---- \\
import emoji from "remark-emoji";
import gfm from "remark-gfm";
import images from "remark-images";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import Tex from "@matejmazur/react-katex";
import math from "remark-math";
import "katex/dist/katex.min.css"; // `react-katex` does not import the CSS for you
// ---- --------------- ---- \\

const remarkConfig = {
  renderers: {
    inlineMath: ({ value }) => <Tex math={value} />,
    math: ({ value }) => <Tex block math={value} />,
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={nord}
          language={language}
          children={value}
          wrapLines={true}
        />
      );
    },
  },
  plugins: [gfm, emoji, images, math],
};

class Markdown extends Component {
  render() {
    return (
      <ReactMarkdown
        renderers={remarkConfig.renderers}
        plugins={remarkConfig.plugins}
        allowDangerousHtml
      >
        {this.props.children}
      </ReactMarkdown>
    );
  }
}

export default Markdown;
