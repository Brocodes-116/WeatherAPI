import { format, parseISO } from 'date-fns'

const Weeklyforecast = (props) => {

    console.log(props);
    
    return (
        <div>
            {props.data.map((day, idx) => {
                return (
                    <div key={idx} className='my-4 flex flex-col gap-2 max-w-[75%] p-4'>
                        <div>{format(parseISO(day.date), 'EEE')}</div>
                        <div>💧{day.day.daily_chance_of_rain}%</div>
                        <div>
                            <img src={day.day.condition.icon} alt="" />
                            <span>{day.day.condition.text}</span>
                            <div>
                                {Math.round(day.day.maxtemp_c)} {Math.round(day.day.mintemp_c)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Weeklyforecast