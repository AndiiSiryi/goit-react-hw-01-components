import PropTypes from "prop-types";
import css from '../Statistics/Statistics.module.css';
import { generateRandomColor } from './generateRandomColor'


export const Statistics = ({ title , stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statlist}>
                {stats.map(({ id, label, percentage }) => {return (
            <li
              key={id}
                        className={css.item}
                        style={{ backgroundColor: generateRandomColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );}
                )}
    
  </ul>
</section>
    )

}

