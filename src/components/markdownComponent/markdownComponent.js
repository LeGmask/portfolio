import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

// ---- Remark plugins ---- \\
import emoji from "remark-emoji";
import gfm from "remark-gfm";
import images from "remark-images";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // `react-katex` does not import the CSS for you

import "./markdownComponent.scss";
// ---- --------------- ---- \\

const remarkConfig = {
  renderers: {
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
  rehypePlugins: [rehypeRaw, rehypeKatex],
  remarkPlugins: [remarkMath, gfm, emoji, images],
};

class Markdown extends Component {
  render() {
    return (
      <ReactMarkdown
        renderers={remarkConfig.renderers}
        plugins={remarkConfig.plugins}
        rehypePlugins={remarkConfig.rehypePlugins}
        remarkPlugins={remarkConfig.remarkPlugins}
        className="markdown-body"
      >
        {this.props.children}
      </ReactMarkdown>
    );
  }
}

export default Markdown;
