// import React from "react";
import image from "../home_background.jpg";

// export default function Home() {
//   return (
//     <main>
//       <img
//         src={image}
//         alt="computer keyboard"
//         className="absolute object-cover w-full h-full"
//       />
//       <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
//         <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
//           Hello!. I'm Anubhav.
//         </h1>
//       </section>
//     </main>
//   );
// }

import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
    };
  }
  componentDidMount() {
    this.handleType();
  }
  handleType = () => {
    const dataText = [
      "Hello world! I'm Anubhav",
      "I am a FullStack software developer",
      "Know more about me in the links above",
      //   "or, Contact me for any query!",
    ];
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }

    setTimeout(this.handleType, typingSpeed);
  };
  render() {
    return (
      <main>
        <img
          src={image}
          alt="computer keyboard"
          className="absolute object-cover w-full h-full"
        />
        {/* <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
            Hello!. I'm Anubhav.
          </h1>
        </section> */}
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-4xl text-green-100 font bold cursive leading-none lg:leading-snug home-name">
            <span>{this.state.text}</span>
            <span id="cursor" />
          </h1>
        </section>
      </main>
    );
  }
}

export default Home;

// for typewriter effect - https://stackoverflow.com/questions/49886123/trying-to-create-a-typing-effect-on-reactjs   - answer by Ali klein
