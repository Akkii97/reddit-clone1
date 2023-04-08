import Header from "../Header/Header";
// import Post from "../Posts/Post";
import Posts from "../Posts/Posts";

const Main = () => {
    return(
        <div className="main-page">
            <div>
                <Header />
            </div>
            <div>
                <Posts/>
            </div>
        </div>
    )
}

export default Main;