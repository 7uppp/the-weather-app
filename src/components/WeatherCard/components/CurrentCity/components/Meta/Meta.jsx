import Humidity from './Humidity/Humidity'
import Wind from './Wind/Wind'

const Meta = ({ humidity, wind_kph }) => {
  // console.log(humidity)
  return (
    <div className="flex text-white gap-4 mt-6">
      <Humidity humidity={humidity} />
      <div className="border-[1px] border-white " />
      <Wind wind_kph={wind_kph} />
    </div>
  )
}

export default Meta
