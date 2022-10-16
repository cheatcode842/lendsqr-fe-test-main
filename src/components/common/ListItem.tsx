type LinkItemsType = {
  leftIcon: string;
  title: string;
};

const LinkItems = ({ leftIcon, title }: LinkItemsType) => (
  <li className='links__body--item'>
    <img className='icon' src={leftIcon} alt={title} />
    <h3 className='text'>{title}</h3>
  </li>
);

export default LinkItems;
