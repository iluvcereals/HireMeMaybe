import BarChart from './BarChart';
import PieChart from './PieChart';

function ChartContainer() {
    return (
        <div className="flex flex-col md:flex-row  gap-5 border-2 border-black h-full md:h-80">
            <BarChart />
            <PieChart />
        </div>
    );
}

export default ChartContainer;
