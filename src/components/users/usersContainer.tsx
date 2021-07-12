import React from "react";
import Users from "./users";
import {follow, unfollow, requestUsers} from "../../redux/usersReducer";
import { connect} from "react-redux";
import {compose} from "redux";
import {getUsers, getTotalUsersCount, getCurrentPage, getPageSize, getIsFetching, getFollowingInProgress} from "../../redux/selectors/usersSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
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

const mapStateToProps = (state: any): MapStatePropsType => {
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
    connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, {follow, unfollow, requestUsers})
)(UsersContainer);