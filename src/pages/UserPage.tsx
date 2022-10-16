import { GeneralInformation, UserProfile } from '../components/user';
import leftArrowLogo from '../assets/icons/arrow-left.svg';
import { Link, useLocation } from 'react-router-dom';
import { useFetchOneUserQuery } from '../app/services/users';

const UserPage = () => {
  const { pathname } = useLocation();
  const userId = pathname.replace('/users/', '');
  const { data } = useFetchOneUserQuery(userId);

  return (
    <div className='page user'>
      <div className='controller'>
        <Link className='back-to-users text-2xl' to='/users'>
          <span className='leftArrorContainer'>
            <img src={leftArrowLogo} alt='back to users' />
          </span>
          <span className='text-xl title'>Back to Users</span>
        </Link>
        <div className='banner'>
          <h1 className='text-2xl'>User Details</h1>
          <div className='cta'>
            <button type='button' className='btn btn-cta text-lg'>
              Blacklist User
            </button>
            <button type='button' className='btn btn-cta text-lg'>
              Activate User
            </button>
          </div>
        </div>
      </div>

      {data === undefined ? (
        <h2 className='loading text-2xl'>Looding...</h2>
      ) : (
        <>
          <UserProfile
            accountNumber={data.accountNumber}
            balance={data.accountBalance}
            bankName='Providus Bank'
            firstname={data.profile.firstName}
            lastname={data.profile.lastName}
            stars={1}
            tier='User tier'
            username={data.userName}
            avatar={data.profile.avatar}
            currency={data.profile.currency}
          />
          {/* General Information tab  */}
          <GeneralInformation {...data} />
        </>
      )}
    </div>
  );
};

export default UserPage;
