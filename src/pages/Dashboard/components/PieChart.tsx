import { PieChart, Pie, Cell, ResponsiveContainer, PieLabelRenderProps } from 'recharts';

const data = [
    { name: 'Interview', value: 12 },
    { name: 'Rejected', value: 3 },
    { name: 'Pending', value: 5 },
];

const COLORS = ['#59788E', '#945454', '#BDA55D'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload }: PieLabelRenderProps) => {
    const safeCx = Number(cx);
    const safeCy = Number(cy);
    const safeInnerRadius = Number(innerRadius) || 0;
    const safeOuterRadius = Number(outerRadius) || 0;

    const radius = safeInnerRadius + (safeOuterRadius - safeInnerRadius) * 0.5;
    const x = safeCx + radius * Math.cos(-midAngle * RADIAN);
    const y = safeCy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > safeCx ? 'start' : 'end'} dominantBaseline="central">
            {`${payload.name}`}
        </text>
    );
};
function PieChartComponent() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieChartComponent;
