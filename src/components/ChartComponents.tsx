import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

type CustomTooltipProps = {
  active?: boolean;
  payload?: PayloadType[];
  label?: number;
};

type PayloadType = {
  name: string;
  value: string | number;
};

const data = [
  { time: "00:00", value: 2400, value2: 2400 },
  { time: "04:00", value: 1398, value2: 1398 },
  { time: "08:00", value: 9800, value2: 2000 },
  { time: "12:00", value: 3908, value2: 2780 },
  { time: "16:00", value: 4800, value2: 1890 },
  { time: "20:00", value: 3800, value2: 2390 },
  { time: "23:59", value: 4300, value2: 3490 },
];

const streamData = [
  { name: "Jan", unlocked: 100, locked: 900 },
  { name: "Feb", unlocked: 200, locked: 800 },
  { name: "Mar", unlocked: 300, locked: 700 },
  { name: "Apr", unlocked: 400, locked: 600 },
  { name: "May", unlocked: 500, locked: 500 },
  { name: "Jun", unlocked: 600, locked: 400 },
];

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black border border-white p-2 text-xs font-mono uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
        <p className="text-zinc-400 mb-1 border-b border-zinc-800 pb-1">
          {label}
        </p>
        {payload.map((p: PayloadType, i: number) => (
          <p key={i} className="text-white flex justify-between gap-4">
            <span>{p.name}</span>
            <span className="font-bold">{p.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const TvlChart = () => {
  return (
    <div className="h-[120px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <pattern
              id="gridPattern"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <rect width="1" height="1" fill="#333" />
            </pattern>
            <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="step"
            dataKey="value"
            stroke="#fff"
            strokeWidth={1}
            fill="url(#fadeGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const VolumeBarChart = () => {
  return (
    <div className="h-[60px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#1a1a1a" }} />
          <Bar
            dataKey="value2"
            fill="#333"
            radius={[0, 0, 0, 0]}
            activeBar={{ fill: "white" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const StreamingChart = () => {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={streamData} stackOffset="expand">
          <defs>
            <pattern
              id="diagonalHatch"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="4" stroke="#333" strokeWidth="1" />
            </pattern>
          </defs>
          <CartesianGrid
            strokeDasharray="0"
            stroke="#1a1a1a"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#444"
            tickLine={false}
            axisLine={false}
            fontSize={10}
            fontFamily="monospace"
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="unlocked"
            stackId="1"
            stroke="#fff"
            strokeWidth={2}
            fill="#fff"
          />
          <Area
            type="monotone"
            dataKey="locked"
            stackId="1"
            stroke="#333"
            fill="url(#diagonalHatch)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
