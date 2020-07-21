import React, {useEffect} from "react";
import s from "./usrs.module.css"
import Preloader from "../Preloader/Preloader";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Button, Col} from "react-bootstrap";
import ReactPaginate from 'react-paginate';

let UsersClass = (props) => {

    useEffect(() => {
        if (props.users.length === 0) {
            props.thunkSetUsers(props.currentPage, props.pageSize)
        }

    }, [props])


    let onPageChang = (number) => {
        let val = Object.values(number)
        props.thunkCurrentPage(val[0] + 1, props.pageSize)
    }
    let pag = Math.ceil(props.total / props.pageSize)
    return (<Container>

            {props.isLoading ? <Preloader/> : <Container>
                <div className={s.tanks}>

                    {props.users.map(u => <div className={s.card}
                                               key={u.id}>
                        <Link to={'/Detail/' + u.id}>
                            <img className={s.photo} src={
                                u.photos.small ? u.photos.small : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                            } alt={''}/></Link>
                        <div>{u.name}</div>
                        {props.userId ?( <div>{
                            u.followed ?
                                <Button variant="light" disabled={
                                    props.loadingButton.some(id => id === u.id)
                                } onClick={() => {
                                    props.thunkUnFollow(u.id)


                                }}>unfollow </Button>
                                : <Button variant="light" disabled={
                                    props.loadingButton.some(id => id === u.id)
                                } onClick={() => {
                                    props.thunkFollow(u.id)
                                }}> follow </Button>

                        }</div>) : ''}
                        <div className={s.status}>{u.status}</div>

                    </div>)}


                </div>
            </Container>}


            <Container>
                <Col md={{span: 8, offset: 1}}>
                    <ReactPaginate
                        initialPage={+props.currentPage}
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pag}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={10}
                        onPageChange={onPageChang}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </Col>
            </Container>

        </Container>

    )

}


export default UsersClass