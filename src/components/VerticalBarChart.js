import '../App.scss';

const data = [
  {
    id: 1,
    highlight: false,
    value: 0.8
  },
  {
    id: 2,
    highlight: false,
    value: 0.8
  },
  {
    id: 3,
    highlight: false,
    value: 0.5
  },
  {
    id: 4,
    highlight: false,
    value: 0.6
  },
  {
    id: 5,
    highlight: false,
    value: 0.9
  },
  {
    id: 6,
    highlight: false,
    value: 0.7
  },
  {
    id: 7,
    highlight: true,
    value: 1
  },
  {
    id: 8,
    highlight: false,
    value: 0.9
  },
  {
    id: 9,
    highlight: false,
    value: 0.6
  },
  {
    id: 10,
    highlight: false,
    value: 0.5
  },
  {
    id: 11,
    highlight: false,
    value: 0.5
  },
  {
    id: 12,
    highlight: true,
    value: 0.9
  },
  {
    id: 13,
    highlight: false,
    value: 0.5
  },
  {
    id: 14,
    highlight: false,
    value: 0.9
  },
  {
    id: 15,
    highlight: false,
    value: 0.9
  },
  {
    id: 16,
    highlight: false,
    value: 0.5
  }
]

function VerticalBarChart() {
  const displayCols = data.map(item => {
    return (
      <div
        className={ `bar ${item.highlight ? 'highlight' : ''}` }
        key={item.id}
        style={ {height: `${item.value * 100}%` } }
      />
    );
  })

  return (
    <div className="vertical-chart">
      <h2 className="vertical-chart-title">Chart 2</h2>
      <div className="vertical-chart-body">
        { displayCols }
      </div>
      <div className="vertical-chart-label">
        <div className="circle"/>
        <div className="label">Text 1</div>
        <div className="circle highlight"/>
        <div className="label">Text 2</div>
      </div>
    </div>
  );
}

export default VerticalBarChart;
