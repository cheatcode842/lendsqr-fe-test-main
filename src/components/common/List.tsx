import { ReactNode } from 'react';

type LinkType = {
  title: string;
  children?: ReactNode;
};

const Link = ({ title, children }: LinkType) => {
  return (
    <div className='links'>
      <h2 className='links__header--title text-base'>{title}</h2>
      <ul className='links__body'>{children}</ul>
    </div>
  );
};

export default Link;
