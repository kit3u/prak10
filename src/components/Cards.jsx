import Card from './Card';

function Cards({ data, period }) {
  const colors = ['#ff5ef2ff', '#ff92ffff', '#ffdef4ff', '#ac9baaff', '#815f7aff', '#963068ff'];

  return (
    <section className="cards">
      {data.map((item, index) => {
        const { current, previous } = item.timeframes[period];
        return (
          <Card
            key={item.title}
            title={item.title}
            current={current}
            previous={previous}
            color={colors[index]}
          />
        );
      })}
    </section>
  );
}

export default Cards;