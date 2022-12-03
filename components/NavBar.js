
import { useCallback, useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import "antd/dist/antd.css";
import { PlusCircleOutlined } from '@ant-design/icons';
import NoteCard from '../components/NoteCard'
import LogIn from './LogIn';
import Register from './Register';
import Link from 'next/link';

const { TextArea } = Input;


function NavBar({userNameCallback}) {
    const handleUserNameCallback = (username) => {
        console.log('nav bar user name', username)
        userNameCallback(username)
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FCF9BE' }}>
                <div>
                    <h1 style={{ color: 'black', paddingTop: '10px', marginLeft: '20px' }}> My Notes Application </h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FCF9BE', marginRight: '20px' }}>
                        <div >
                        <Button > <Link href="/profile">Profile</Link>  </Button>
                    </div>
                    <div >
                        <LogIn style={{marginRight:'20px'}} userNameCallback={handleUserNameCallback}></LogIn>
                    </div>
                    <div>
                        <Register></Register>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBar