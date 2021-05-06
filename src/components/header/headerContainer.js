import React from "react";
import Header from "./header";
import {logout} from "../../redux/authReducer";
import { connect } from "react-redux";

import {getIsAuth, getLogin} from "../../redux/selectors/authSelectors";

class HeaderContainer extends React.Component {

    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);