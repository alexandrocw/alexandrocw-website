import React from "react";

const htmlFile = require("./index.html");

class Home extends React.Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
        )
    }
}

export default Home;