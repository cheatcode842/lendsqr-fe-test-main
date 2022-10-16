type CartPropType = {
  numberOfUsers: string;
  alt?: string;
  imgUrl: string;
  status: string;
};

const Card = ({ imgUrl, alt, status, numberOfUsers }: CartPropType) => (
  <div className='card'>
    <div className='card__header'>
      <img src={imgUrl} alt={alt || status} />
    </div>
    <p className='card__body--status'>{status}</p>
    <b className='card__body--number-of-users'>{numberOfUsers}</b>
  </div>
);

export default Card;
