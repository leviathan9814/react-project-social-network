import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

import styles from "./users.module.css";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div key={user.id} className={styles.userItem}>
            <div>
                <div>
                    <Link to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.userPhoto}/>
                    </Link>
                </div>
                <div className={styles.userFollowed}>
                {
                    user.followed
                        ? <button className="btn btn-outline-dark" disabled={followingInProgress
                            .some(id => id === user.id)}
                                    onClick={() => {unfollow(user.id) }}>
                            Unfollow</button>
                        : <button className="btn btn-outline-dark" disabled={followingInProgress
                            .some(id => id === user.id)}
                                    onClick={() => { follow(user.id) }}>
                            Follow</button>
                }
                </div>
            </div>
            <div className={styles.userInfo}>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                {/* <span>
                    <div>location.country</div>
                    <div>location.city</div>
                </span> */}
            </div>
        </div>
    )
}

export default User;