import H2D from 'hex2dec'
import {useState} from "react"
import DetailModal from './detail-modal'

export default ({nfts}) => {
  const [activeItem, setActiveItem] = useState(null)

  return <div className={'grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 m-2 md:m-4'}>
    {nfts?.map((it, id) => {
      return <div
        className={'group relative rounded-md md:rounded-xl p-4 bg-slate-800 flex flex-col space-y-2 md:space-y-3 cursor-pointer hover:bg-slate-700 transition'}
        onClick={() => setActiveItem(it)}
        key={'nft-' + id}>
        <img src={it.media[0].thumbnail || it.media[0].gateway} alt={''} className={'w-full group-hover:blur-sm'}/>
        <div className={'text-center group-hover:blur-sm'}>
          #{it.id?.tokenId && H2D.hexToDec(it.id?.tokenId) || it.tokenId}
        </div>
        <div className={'group-hover:blur-sm border-t pt-1'}>
          {it.metadata?.attributes?.sort((a, b) => a.trait_type > b.trait_type ? 1 : -1)
            .map((at, at_id) => {
              if (at_id > 1)
                return <></>

              return <div className={'grid grid-cols-2 gap-2'} key={'att-' + id + at_id}>
                <div className={'text-right text-sm'}>{at.trait_type} :</div>
                <div className={'font-bold'}>{at.value}</div>
              </div>
            })}
        </div>
        <div className={'hidden group-hover:flex absolute bg-indigo-700/50 -top-4 bottom-0 left-0 right-0 rounded-md md:rounded-xl items-center justify-center'}>
          <button className={'border-2 rounded-md p-2 px-4 font-nulshock'}>
            View Details
          </button>
        </div>
      </div>
    })}
    <DetailModal isOpen={activeItem !== null} data={activeItem} onRequestClose={() => setActiveItem(null)}/>
  </div>
}