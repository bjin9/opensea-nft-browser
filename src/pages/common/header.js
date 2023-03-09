import {useSelector} from "react-redux";
import {settingsSelector} from "../../redux/slices/settings.slice";

const Header = (props) => {
  const {lang} = useSelector(settingsSelector)

  return <div className={'font-nulshock flex justify-between w-full px-8 py-4 items-center'}>
    <div className={'text-lg md:text-2xl font-bold pr-4 border-b-2 border-blue-600 cursor-pointer'}>NFT List</div>
    <div className={'text-sm md:text-lg font-bold'}>{lang}</div>
  </div>
}

export default Header