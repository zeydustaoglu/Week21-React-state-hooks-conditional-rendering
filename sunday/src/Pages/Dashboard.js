import React, {useState} from 'react';
import NavigationBar from '../Components/Dashboard/NavigationBar';
import PageContent from '../Components/Dashboard/PageContent';
import {database} from '../data';

function Dashboard () {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
    }

    const logout = () => {
        setLoggedIn(false);
    }

    return(
        <div>
            <NavigationBar loggedIn = {loggedIn} login={login} logout={logout}/>
            <PageContent loggedIn = {loggedIn} database={database}/>
        </div>
    )
}

export default Dashboard;