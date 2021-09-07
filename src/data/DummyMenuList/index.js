import React from 'react'
import {IconArrowBack, IconBookPrimary, IconBooks, IconChangePassword, IconLogout, IconPasswordPrimary, IconProfilePrimary} from '../../assets'

export const dummyMenuList = [
    {
        id: 1,
        nama: 'Edit Profile',
        icon1: <IconProfilePrimary />,
        icon2: <IconArrowBack />,
        halaman: "editProfile"
    },
    {
        id: 2,
        nama: 'Change Password',
        icon1: <IconPasswordPrimary />,
        icon2: <IconArrowBack />,
        halaman: "changePassword"
    },
    {
        id: 3,
        nama: 'History',
        icon1: <IconBookPrimary />,
        icon2: <IconArrowBack />,
        halaman: "history"
    },
    {
        id: 4,
        nama: 'SignOut',
        icon1: <IconLogout />,
        icon2: <IconArrowBack />,
        halaman: "signout"
    },
]