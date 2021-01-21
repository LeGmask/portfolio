import React, { Component } from "react";
import BlogCard from "../components/blogCard/blogCard";

import "./sass/blog.scss";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <div className="blog__grid">
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="lorem ipsum dolorem sit amet duro que cando tante de milo de nanda. Senor te auro que conocio la montagna"
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc vitae magna aliquet tempus. Nullam id cursus velit. In urna nunc, tempus venenatis elit sit amet, facilisis laoreet quam. Nulla in erat vulputate, tristique orci eu, scelerisque turpis. Vivamus eu dapibus enim, feugiat luctus purus. Etiam elementum ut libero ac venenatis. Aliquam fermentum, nisl sed auctor eleifend, erat sapien laoreet dolor, ut semper ligula enim nec purus. Sed tellus felis, posuere quis ornare porttitor, rhoncus et libero. Cras a condimentum diam, et tempus odio. Aliquam erat volutpat. "
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc vitae magna aliquet tempus. Nullam id cursus velit. In urna nunc, tempus venenatis elit sit amet, facilisis laoreet quam. Nulla in erat vulputate, tristique orci eu, scelerisque turpis. Vivamus eu dapibus enim, feugiat luctus purus. Etiam elementum ut libero ac venenatis. Aliquam fermentum, nisl sed auctor eleifend, erat sapien laoreet dolor, ut semper ligula enim nec purus. Sed tellus felis, posuere quis ornare porttitor, rhoncus et libero. Cras a condimentum diam, et tempus odio. Aliquam erat volutpat. "
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc vitae magna aliquet tempus. Nullam id cursus velit. In urna nunc, tempus venenatis elit sit amet, facilisis laoreet quam. Nulla in erat vulputate, tristique orci eu, scelerisque turpis. Vivamus eu dapibus enim, feugiat luctus purus. Etiam elementum ut libero ac venenatis. Aliquam fermentum, nisl sed auctor eleifend, erat sapien laoreet dolor, ut semper ligula enim nec purus. Sed tellus felis, posuere quis ornare porttitor, rhoncus et libero. Cras a condimentum diam, et tempus odio. Aliquam erat volutpat. "
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="lorem ipsum dolorem sit amet duro que cando tante de milo de nanda. Senor te auro que conocio la montagna"
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="lorem ipsum dolorem sit amet duro que cando tante de milo de nanda. Senor te auro que conocio la montagna"
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="lorem ipsum dolorem sit amet duro que cando tante de milo de nanda. Senor te auro que conocio la montagna"
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="lorem ipsum dolorem sit amet duro que cando tante de milo de nanda. Senor te auro que conocio la montagna"
          />
          <BlogCard
            img="https://i.imgur.com/HuiuYGa.png"
            title="Hello World!"
            synopsis="lorem ipsum dolorem sit amet duro que cando tante de milo de nanda. Senor te auro que conocio la montagna"
          />
        </div>
      </div>
    );
  }
}

export default Blog;
