import { Link as RouterLink, useLocation } from 'react-router-dom';
import avatarLogo from '../../assets/icons/avatar.svg';
import { Stars } from './Stars';

type UserProfilePropTypes = {
  avatar?: string;
  firstname: string;
  lastname: string;
  tier: string;
  stars: number;
  username: string;
  balance: string;
  accountNumber: string;
  currency: string;
  bankName: string;
};

export const UserProfile = ({
  accountNumber,
  balance,
  bankName,
  currency,
  lastname,
  firstname,
  avatar,
  stars,
  tier,
  username,
}: UserProfilePropTypes) => {
  const { pathname } = useLocation();

  return (
    <section className='profile'>
      <div className='profile--user'>
        <div className='imgContainer'>
          <img
            className='profile-picture'
            src={avatar || avatarLogo}
            alt={`${lastname} ${firstname}`}
          />
        </div>
        <div className='identity'>
          <h1 className='lastname text-xl'>{lastname}</h1>
          <h2 className='fristname text-lg'>{firstname}</h2>
          <p className='user-id'>{username}</p>
        </div>
        {/* vertical separator */}
        <div className='dividerContainer'>
          <div className='divider' />
        </div>
        <div className='levels'>
          <h2 className='text text-lg'>{tier}</h2>
          <p>
            <Stars rating={stars} />
          </p>
        </div>

        {/* vertical separator */}
        <div className='dividerContainer'>
          <div className='divider' />
        </div>

        <div className='account-info'>
          <h2 className='balance text-lg'>
            {currency} {balance}
          </h2>
          <p className='bank-info'>
            {accountNumber}/ {bankName}
          </p>
        </div>
      </div>
      <nav className='profile--nav'>
        <ul className='nav-list'>
          <li className='nav-item text-lg'>
            <RouterLink to={pathname}>General Details</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/documents'>Documents</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/documents'>Bank Details</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/loans'>Loans</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/savings'>Savings</RouterLink>
          </li>
          <li className='nav-item text-lg'>
            <RouterLink to='#/app-and-system'>App and System</RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
