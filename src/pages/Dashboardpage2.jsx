import React from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardPage.css';

const Dashboardpage2=()=>{
    return(
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 menu'>
                        <nav>
                            <ul>
                                <li><NavLink to={'/UserProfile'} className={'nav'}>User Profile</NavLink></li>
                                <li><NavLink to={'/BorrowedBooks'} className={'nav'}>Borrowed Books</NavLink></li>
                                <li><NavLink to={'/BookSuggestions'} className={'nav'}>Book Suggestions</NavLink></li>
                                <li><NavLink to={'/ReadingHistory'} className={'nav'}>Reading History</NavLink></li>
                                <li><NavLink to={'/AccountSettings'} className={'nav'}>Account Settings</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboardpage2