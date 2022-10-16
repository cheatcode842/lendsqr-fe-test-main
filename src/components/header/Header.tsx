import { BsSearch as SearchIcon } from 'react-icons/bs';
import {
  IoMdNotificationsOutline as NotificationsOutlineIcon,
  IoMdArrowDropdown as ArrowDropdownIcon,
} from 'react-icons/io';
import logo from '../../assets/lendsqr-logo.svg';
import user from '../../assets/image 4.png';

const Header = () => {
  return (
    <nav className='header'>
      <div className='header__logo'>
        <img className='header__logo--img' src={logo} alt='' />
      </div>
      <div className='header__search'>
        <input
          className='header__search--search-box'
          type='text'
          placeholder='search for anything'
          aria-label='search box'
        />
        <button className='btn btn--search'>
          <SearchIcon className='icon search-icon' />
        </button>
      </div>
      <div className='header__user'>
        <div className='user__docs'>
          <a href='#/docs'>Docs</a>
        </div>
        <div className='user__notifications'>
          <NotificationsOutlineIcon className='icon icon--notifications' />
        </div>

        <div className='user__imageContainer'>
          <img className='user__imageContainer--img' src={user} alt='user logo' />
        </div>
        <div className='user__management'>
          {/* TODO: dynamically render username */}
          <span className='username'>Adedeji</span>
          <ArrowDropdownIcon className='icon icon--settings' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
