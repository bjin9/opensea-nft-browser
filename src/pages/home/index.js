import {MainLayout} from "../common/layouts";
import {useState} from "react";
import {LoadableButton} from "../common/button";
import Squares from "react-activity/dist/Squares";

export default () => {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)

  const load = () => {
    setLoading(!loading)
  }

  return <MainLayout>
    <div className={'font-poppins w-full flex flex-col items-center justify-center space-y-10'}>
      <input
        type={'text'}
        className={'bg-transparent p-2 border-b-2 rounded-md w-full md:w-1/2 outline-none focus:border-b-2 border-blue-600 focus:border-white text-center transition-all ease-in-out'}
        placeholder={'Type your collection address here'}
        onChange={e => setAddress(e.target.value)}/>
      <LoadableButton loading={loading} onClick={load} className={''}/>
    </div>
  </MainLayout>
}
