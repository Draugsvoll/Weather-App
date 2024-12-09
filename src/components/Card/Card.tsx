import { weatherProp } from '../../types';
import './Card.css';
import icons from '../../icons';
import type { icon } from '../../types';

export const Card = (data: weatherProp) => {
  const dayOrNight: string = data.is_day === 1 ? 'day' : 'night';
  const icon: icon = icons[data.weathercode]?.[dayOrNight];

  return (
    <div className="card-container">
      <p>{icon.description}</p>
      <img src={icon.image} alt={icon.description} />
      <p>{data.temperature}&deg; C</p>
    </div>
  );
};
