import React, {useState} from "react";
import Paginator from "../paginator/paginator";
import User from "./user";
import Preloader from "../preloader/preloader";

import "./tabsUsers.css";

const Users = ({users, totalUsersCount, pageSize, onPageChanged, currentPage, follow, isFetching, unfollow, followingInProgress}) => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} 
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage}/>
            { isFetching ? <Preloader /> : 
                <div>
                    <div className="bloc-tabs">
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}>    
                        All users
                        </button>
                        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>
                        Followed users
                        </button>
                    </div>
                    <div className="content-tabs">
                        {!users.followed ?
                            <div className={toggleState === 1 ? "content active-content" : "content"}>
                            {
                                users.map(user => <User user={user}
                                    follow={follow}
                                    unfollow={unfollow}
                                    followingInProgress={followingInProgress}/>)
                            }
                            </div>
                            :
                            <div className={toggleState === 2 ? "content active-content" : "content"}>
                            {
                                users.map(user => <User user={user}
                                    follow={follow}
                                    unfollow={unfollow}
                                    followingInProgress={followingInProgress}/>)
                            }
                            </div>
                        }
                    </div>
                    {/* {
                        users.map(user => <User user={user}
                                                follow={follow}
                                                unfollow={unfollow}
                                                followingInProgress={followingInProgress}/>)
                                                
                    } */}
                </div>
            }
        </div>
    )
}

export default Users;