import { BrowserRouter, Route, Link } from "react-router-dom"; //import the package
import RouteFinder from "../RouteFinder" //import your signIn page
import SignUp from "../SignUp" //import your signUp page

function MainRouter(){
    return(
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/RouteFinder" component={RouteFinder} />
                    <Route path="/signUp" component={SignUP} />
                </Switch>
            </div>
       </BrowserRouter>

    )
}
export default MainRouter