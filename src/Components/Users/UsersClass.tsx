import React, {FC, useEffect} from "react";
import s from "./usrs.module.css"
import Preloader from "../Preloader/Preloader";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Button, Col} from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import {usersType} from "../../redux/Redusers/users-reducers";


export type mapDispatchType={
    thunkSetUsers: (currentPage: number, pageSize:number) => void
    thunkCurrentPage: (number: number , pageSize:number) => void
    thunkUnFollow: (userId: number) => void
    thunkFollow: (userId: number) => void
}


export type  propsType = {
    currentPage: number
    pageSize:number
    total: number
    isLoading:boolean
    userId:number
    loadingButton: Array<number>
    users: Array<usersType>
}

let UsersClass:FC<propsType & mapDispatchType> = ({currentPage,
                                    pageSize,
                                    users,
                                    thunkSetUsers,
                                    thunkCurrentPage,
                                    total,
                                    isLoading,
                                    userId,
                                    loadingButton,
                                    thunkUnFollow,
                                    thunkFollow

                                    }) => {

    useEffect(() => {
        if (users.length === 0) {
            thunkSetUsers(currentPage, pageSize)
        }


    }, [users])


    let onPageChang = (number:Object) => {
        let val = Object.values(number)
        thunkCurrentPage(val[0] + 1, pageSize)
    }
    let pag = Math.ceil(total / pageSize)
    return (<Container>

            {isLoading ? <Preloader/> : <Container>
                <div className={s.tanks}>

                    {users.map(u =>

                        <div className={s.card}

                                               key={u.id}>
                        <Link to={'/Detail/' + u.id}>
                            <img className={s.photo} src={
                                u.photos.small ? u.photos.small : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                            } alt={''}/></Link>
                        <div>{u.name}</div>
                            <div className={s.status}>{u.status ? u.status : "..."}</div>
                        {userId ?( <div>{
                            u.followed ?
                                <Button variant="light" disabled={
                                    loadingButton.some(id => id === u.id)
                                } onClick={() => {
                                    thunkUnFollow(u.id)


                                }}>unfollow </Button>
                                : <Button variant="light" disabled={
                                    loadingButton.some(id => id === u.id)
                                } onClick={() => {
                                    thunkFollow(u.id)
                                }}> follow </Button>

                        }</div>) : ''}


                    </div>)}


                </div>
            </Container>}


            <Container>
                <Col md={{span: 8, offset: 1}}>
                    <ReactPaginate
                        initialPage={+currentPage - 1}
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pag}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={10}
                        onPageChange={onPageChang}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </Col>
            </Container>

        </Container>

    )

}


export default UsersClass