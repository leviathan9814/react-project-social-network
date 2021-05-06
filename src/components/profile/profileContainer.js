import React from "react";
import Profile from "./profile";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import { compose } from "redux";
import {getProfile, getStatusProfile, getAuthorizedUserId} from "../../redux/selectors/profileSelectors";
import {getIsAuth} from "../../redux/selectors/authSelectors";

class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        
        this.props.getUserProfile (userId);
        this.props.getStatus (userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/login"/>

        return (
            <div>
                <Profile {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        isAuth: getIsAuth(state),
        status: getStatusProfile(state),
        authorizedUserId: getAuthorizedUserId(state),
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile }),
    withRouter
)(ProfileContainer); 