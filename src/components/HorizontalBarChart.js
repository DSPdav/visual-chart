import '../App.scss';

const data = [
  {
    id: 1,
    month: 'Jan',
    value: 0.7
  },
  {
    id: 2,
    month: 'Feb',
    value: 0.5
  },
  {
    id: 3,
    month: 'Mar',
    value: 0.8
  },
  {
    id: 4,
    month: 'Apr',
    value: 0.4
  },
  {
    id: 5,
    month: 'May',
    value: 0.65
  },
]

function HorizontalBarChart() {
  const displayRows = data.map(month => {
    return (
      <div className="row" key={month.id}>
        <div className="month">{month.month}</div>
        <div className="bar">
         <div className="value" style={ { width: `${month.value * 100}%` } }></div>
        </div>
      </div>
    );
  })

  return (
    <div className="horizontal-chart">
      <h2 className="horizontal-chart-title">Chart 1</h2>
      <div className="horizontal-chart-body">
        <div className="row-values">
          <div className="month"/>
          <div className="values">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
          </div>
        </div>
        {displayRows}
      </div>
    </div>
  );
}

export default HorizontalBarChart;
