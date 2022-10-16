import fullStarIcon from '../../assets/icons/full-star.svg';
import emptyStarIcon from '../../assets/icons/empty-star.svg';

type StarType = {
  rating: number;
};
/* eslint-disable */
export const Stars = ({ rating: number }: StarType) => {
  // handle the logic here
  return (
    <span className='stars'>
      <img src={fullStarIcon} alt='full star' />
      <img src={emptyStarIcon} alt='empty star' />
      <img src={emptyStarIcon} alt='empty star' />
    </span>
  );
};
