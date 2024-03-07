// 数据
const data = [
  { name: 'A', value: 20, color: 'red' },
  { name: 'B', value: 30, color: 'blue' },
  { name: 'C', value: 40, color: 'green' }
];

// 基准数据线
const baseline = 25;

// 创建 SVG 元素
const svgWidth = 400;
const svgHeight = 300;
const barPadding = 5;
const barWidth = (svgWidth / data.length);

const svg = d3.select('body')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// 创建柱状图
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * barWidth)
  .attr('y', (d) => svgHeight - d.value)
  .attr('width', barWidth - barPadding)
  .attr('height', (d) => d.value)
  .attr('fill', (d) => d.color);

// 添加基准数据线
svg.append('line')
  .attr('x1', 0)
  .attr('y1', svgHeight - baseline)
  .attr('x2', svgWidth)
  .attr('y2', svgHeight - baseline)
  .attr('stroke', 'black')
  .attr('stroke-width', 2);
