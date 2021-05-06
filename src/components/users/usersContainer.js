import React from "react";
import Users from "./users";
import {follow, unfollow, toggleIsFollowingProgress, requestUsers} from "../../redux/usersReducer";
import { connect } from "react-redux";
import {compose} from "redux";

import {getUsers, getTotalUsersCount, getCurrentPage, getPageSize, getIsFetching, getFollowingInProgress} from "../../redux/selectors/usersSelectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <div>
                <Users {...this.props}
                    onPageChanged={this.onPageChanged}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow,
        toggleIsFollowingProgress, requestUsers})
)(UsersContainer);