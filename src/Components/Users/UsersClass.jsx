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
    // componentDidMount() {
    //     if (this.props.users.length === 0) {
    //         this.props.thunkSetUsers(this.props.currentPage, this.props.pageSize)
    //     }
    // }

   let onPageChang = (number) => {
        props.thunkCurrentPage(number, props.pageSize)

    }

        let pag = Math.ceil(props.total / props.pageSize)
        // let total = []
        // for (let i = 1; i <= pag; i++) {
        //     total.push(i)
        // }


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
                            <div>{
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
                            }
                            </div>
                            <div className={s.status}>{u.status}</div>

                        </div>)}


                    </div>
                </Container>}


                <Container>
                    {/*<div className={s.btn_wrap}>*/}
                    {/*    {total.map(m => {*/}
                    {/*        return <button className={(this.props.currentPage === m && s.active) + ' tratata'}*/}
                    {/*                       onClick={() => {*/}
                    {/*                           this.onPageChang(m)*/}
                    {/*                       }}*/}
                    {/*        >{m}</button>*/}
                    {/*    })}*/}

                    {/*</div>*/}
                    <Col md={{ span: 8, offset: 2 }} >
                        <ReactPaginate
                            initialPage={props.currentPage}
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