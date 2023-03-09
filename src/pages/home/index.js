import {MainLayout} from "../common/layouts";
import {useState} from "react";

export default () => {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)

  const load = () => {

  }

  return <MainLayout>
    <div className={'w-full flex justify-center'}>
      <input
        type={'text'} className={'bg-transparent p-2 border rounded-md w-full md:w-1/2'}
        placeholder={'Type collection address here'}
        onChange={e => setAddress(e.target.value)}/>
    </div>
  </MainLayout>
}
