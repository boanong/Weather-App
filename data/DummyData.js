import { Feather } from '@expo/vector-icons';

const Forecast = [
    {
        day: 'Sunday',
        temperature: 25,
        Icon: ({ style, color, size }) => <Feather name="sun" size={size} color={color} style={style} />,
    },
    {
        day: 'Monday',
        temperature: 26,
        // icon: 'cloud',
        Icon: ({ style, color, size }) => <Feather name="sun" size={size} color={color} style={style} />,
    },
    {
        day: 'Tuesday',
        temperature: 27,
        // icon: 'rain',
        Icon: ({ style, color, size }) => <Feather name="cloud" size={size} color={color} style={style} />,
    },
    {
        day: 'Wednesday',
        temperature: 28,
        // icon: 'snow',
        Icon: ({ style, color, size }) => <Feather name="cloud-snow" size={size} color={color} style={style} />,
    },
];

export default Forecast