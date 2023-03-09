import {useSelector} from "react-redux";
import {settingsSelector} from "../../redux/slices/settings.slice";

const Header = (props) => {
  const {lang} = useSelector(settingsSelector)

  return <div className={'flex justify-between w-full px-8 py-4 items-center'}>
    <div className={'text-md md:text-2xl font-bold w-2/6 md:w-1/6 border-b-2 border-indigo-600'}>NFT List</div>
    <div className={'text-sm md:text-lg font-bold'}>{lang}</div>
  </div>
}

export default Header