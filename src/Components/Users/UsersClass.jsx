import React from "react";
import s from "./usrs.module.css"
import Preloader from "../Preloader/Preloader";
import {Link} from "react-router-dom";



class UsersClass extends React.Component {


    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.thunkSetUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChang = (number) => {
        this.props.thunkCurrentPage(number, this.props.pageSize)

    }

    render() {

        let pag = Math.ceil(this.props.total / this.props.pageSize)
        let total = []
        for (let i = 1; i <= pag; i++) {
            total.push(i)
        }


        return (<div>

                {this.props.isLoading ? <Preloader/> : <div className={s.tanks}>

                    {this.props.users.map(u => <div className={s.card}
                                                    key={u.id}>
                        <Link to={'/Detail/' + u.id}>
                            <img className={s.photo} src={
                                u.photos.small ? u.photos.small : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                            } alt={''}/></Link>
                        <div>{u.name}</div>
                        <div>{
                            u.followed ?
                                <button className="btn" disabled={
                                    this.props.loadingButton.some(id => id === u.id)
                                } onClick={() => {
                                    this.props.thunkUnFollow(u.id)


                                }}>unfollow </button>
                                : <button className="btn" disabled={
                                    this.props.loadingButton.some(id => id === u.id)
                                } onClick={() => {
                                    this.props.thunkFollow(u.id)
                                }}> follow </button>
                        }
                        </div>
                        <div className={s.status}>{u.status}</div>
                        {/*<div>{"u.location.city"}</div>*/}
                        {/*<div>{"u.location.country"}</div>*/}
                    </div>)}


                </div>}


                <div className="container">
                    <div className={s.btn_wrap}>
                        {total.map(m => {
                            return <button className={(this.props.currentPage === m && s.active) + ' tratata'}
                                           onClick={() => {
                                               this.onPageChang(m)
                                           }}
                            >{m}</button>
                        })}

                    </div>
                </div>
            </div>

        )
    }
}


export default UsersClass