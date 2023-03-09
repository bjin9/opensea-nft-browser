import {MainLayout} from "../common/layouts"
import {useEffect, useState} from "react"
import {LoadableButton} from "../common/button"
import {getAllNftsForCollection} from "../../service/alchemy"
import {toast} from "react-toastify"
import ScrollToTop from "react-scroll-to-top"
import Info from './info'
import List from './list'
import Dummy from './dummy.json'

export default () => {
  const [address, setAddress] = useState('')
  const [addressChanged, setAddressChanged] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [nfts, setNfts] = useState([])

  const load = () => {
    if (address) {
      if (addressChanged) {
        setData({})
        setAddressChanged(false)
      }
      setLoading(true)
      getAllNftsForCollection(address, data.pageKey)
        .then((res) => {
          console.log('NFTs', res)
          const newNfts = res.nfts.map(it => {
            if (!it.contractMetadata) {
              it.contractMetadata = it.contract
            }
            if (!it.metadata) {
              it.metadata = it.rawMetadata
            }

            return it
          })

          setData({
            pageKey: res.pageKey,
            nfts: addressChanged ? newNfts : nfts.concat(newNfts)
          })
        })
        .catch(e => {
          toast.error(e.message)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      toast.error('Please type collection address first')
    }
  }

  const onChangeAddress = (e) => {
    setAddressChanged(true)
    setAddress(e.target.value)
  }

  useEffect(() => {
    setNfts(data?.nfts || [])
  }, [data])

  return <MainLayout>
    <div className={'font-poppins w-full flex flex-col items-center justify-center space-y-10'}>
      {nfts.length < 1 && <div className={'h-40'}/>}
      <div className={'font-nulshock'}>Browse NFT Collection</div>
      <input
        type={'text'}
        className={'bg-transparent p-2 border-b-2 rounded-md w-full md:w-1/2 outline-none focus:border-b-2 focus:border-indigo-600 border-white text-center transition-all ease-in-out'}
        placeholder={'Type your collection address here'}
        value={address}
        spellCheck={false}
        onChange={onChangeAddress}/>
      <LoadableButton loading={loading} onClick={load} className={''}/>
      <Info metadata={nfts[0]?.contractMetadata}/>
      <List nfts={nfts}/>
      <div>
        {(data.pageKey && nfts.length > 0) && <LoadableButton caption={'load more'} loading={loading} onClick={load} />}
      </div>
    </div>

    <ScrollToTop smooth color="#6f00ff" width={40}/>
  </MainLayout>
}
