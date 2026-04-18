import style from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={style.item} key={id} style={{backgroundColor: randColor()}}>
              <span className={style.label}>{label} </span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function randColor() {
  const r = Math.random() * (255 - 0) + 0;
  const g = Math.random() * (255 - 0) + 0;
  const b = Math.random() * (255 - 0) + 0;
  const res = `rgb(${r}, ${g}, ${b})`;
  return res;
}

export default Statistics;