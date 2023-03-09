import Modal from 'react-modal'
import {isMobile} from 'react-device-detect'
import H2D from 'hex2dec'

Modal.setAppElement(document.getElementById('root'));

export default ({...props}) => {
  const it = props.data

  if (!it) {
    return <></>
  }

  const tokenId = it.id?.tokenId ? H2D.hexToDec(it?.id?.tokenId) : (it.tokenId || '')

  return <Modal
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
    style={modalStyle}
  >
    <div className={'absolute top-0 left-0 right-0 bottom-0 bg-transparent p-2 font-serif rounded-3xl '}>
      <div className={'flex flex-col md:flex-row w-full md:h-full rounded-3xl bg-slate-800 justify-center items-center gap-2 overflow-hidden'}>
        <div className={'w-full md:w-1/3 md:h-full bg-white flex justify-center items-center'}>
          <img src={it?.media?.[0]?.thumbnail || it?.media?.[0]?.gateway} alt={''} className={' group-hover:blur-sm'}/>
        </div>
        <div className={'w-full md:w-2/3 flex flex-col justify-center items-center gap-2 p-2 md:p-6'}>
          <div className={'font-nulshock text-xl md:text-3xl'}>
            {it?.contractMetadata?.symbol} #{tokenId}
          </div>
          <div className={'text-sm'}>
            Last updated at {new Date(it?.timeLastUpdated).toLocaleString()}
          </div>
          <div className={'font-poppins text-xs text-gray-400'}>
            {it?.contractMetadata?.openSea?.description}
          </div>
          <div className={'w-full flex flex-col items-center border rounded-md p-2'}>
            {it?.metadata?.attributes?.sort((a, b) => a.trait_type > b.trait_type ? 1 : -1)
              .map((at, at_id) => <div className={'flex w-4/6 space-x-4'} key={'detail-att-' + at_id}>
                <div className={'w-1/2 text-sm'}>{at.trait_type}</div>
                <div className={'w-1/2 font-bold'}>{at.value}</div>
              </div>)}
          </div>
          <div className={'flex font-nulshock gap-6 my-6 text-sm md:text-lg'}>
            <a
              className={'border- px-4 py-2 rounded-md bg-indigo-700 hover:bg-indigo-600'}
              href={`https://opensea.io/assets/ethereum/${it?.contract?.address}/${tokenId}`}
              target={'_blank'}
            >
              Opensea
            </a>
            <button className={'border- px-4 py-2 rounded-md bg-red-700 hover:bg-red-600'} onClick={props.onRequestClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
}

const modalStyle = {
  content: {
    top: isMobile ? '12%' : '20%',
    left: isMobile ? '4%' : '18%',
    right: isMobile ? '4%' : '18%',
    bottom: isMobile ? '10%' : '20%',
    margin: 'auto',
    padding: 0,
    background: 'transparent',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(56,54,113,0.84)'
  }
}