import React from 'react';
import hdpopular from '../../json/hdpopular.json';
import hdscss from '../scss/mhs.module.scss';
import{ Link } from 'react-router-dom'

const ListItem = ({ item, index }) => (
  <li className="m-0">
    <a href={item.href}>
      <span className={index < 3 ? `${hdscss.number} ${hdscss.red}` : hdscss.number}>
        {index + 1}
      </span>
      {item.text}
    </a>
  </li>
);

const Hdpopular = () => {
  const list1Length = hdpopular.list1.length;
  return (
    <div className="d-flex">
      <div>
        <ul className="ps-0">
          {hdpopular.list1.map((item, index) => (
            <ListItem key={index} item={item} index={index} />
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {hdpopular.list2.map((item, index) => (
            <li key={index + list1Length} className="ms-3">
              <Link to={item.href}>
                <span className={(index + list1Length) < 3 ? `${hdscss.number} ${hdscss.red}` : hdscss.number}>
                  {index + 1 + list1Length} 
                </span> {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hdpopular;
