import React, { useEffect } from 'react'
import Account from '../components/Account/Account'

const Profile = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Account/>
    </div>
  )
}

export default Profile