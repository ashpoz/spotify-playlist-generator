import React from "react";
import Search from "../components/search";

class Home extends React.Component {
    componentDidMount() {
        console.log("test");
    }
    render() {
        return(
            <>
                <h1>My site!</h1>
                <Search />
            </>
        )
    }
} 

export default Home;
