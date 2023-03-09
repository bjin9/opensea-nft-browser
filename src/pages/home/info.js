import {FaDiscord, FaTwitter} from "react-icons/fa"
import {BiLink} from "react-icons/bi"
import {AiFillCheckCircle} from "react-icons/ai";

export default ({metadata}) => {
  if (!metadata) {
    return <></>
  }

  return <div className={'w-full flex flex-col md:flex-row space-x-4 justify-center items-center border-b'}>
    <div className={'w-full md:w-1/4'}>
      <img className={'w-200'} src={metadata.openSea?.imageUrl} alt={'collection-logo'} />
    </div>
    <div className={'w-full md:w-2/4 flex flex-col gap-2 pb-2'}>
      <div className={'flex w-full'}>
        <div className={'w-1/3 md:w-1/4'}>Name</div>
        <div className={'w-2/3 md:w-3/4 font-bold flex items-center'}>
          {metadata.name}
          {metadata.openSea?.safelistRequestStatus === 'verified' && <span className={'ml-1 text-indigo-400 text-lg'}><AiFillCheckCircle/></span>}
        </div>
      </div>
      <div className={'flex w-full'}>
        <div className={'w-1/3 md:w-1/4'}>Symbol</div>
        <div className={'w-2/3 md:w-3/4 font-nulshock'}>{metadata.symbol}</div>
      </div>
      <div className={'flex w-full'}>
        <div className={'w-1/3 md:w-1/4'}>Token type</div>
        <div className={'w-2/3 md:w-3/4 font-nulshock'}>{metadata.tokenType}</div>
      </div>
      <div className={'flex w-full'}>
        <div className={'w-1/3 md:w-1/4'}>Total supply</div>
        <div className={'w-2/3 md:w-3/4 font-nulshock'}>{metadata.totalSupply}</div>
      </div>
      <div className={'flex w-full'}>
        <div className={'w-1/3 md:w-1/4'}>Last ingested at</div>
        <div className={'w-2/3 md:w-3/4 font-nulshock'}>{new Date(metadata.openSea?.lastIngestedAt).toLocaleString()}</div>
      </div>
      <div className={'flex w-full'}>
        <div className={'w-1/3 md:w-1/4'}>Description</div>
        <div className={'w-2/3 md:w-3/4 text-gray-400 text-sm'}>{metadata.openSea?.description}</div>
      </div>
      <div className={'flex w-full'}>
        <div className={'w-1/3 md:w-1/4'}>Links</div>
        <div className={'w-2/3 md:w-3/4 flex items-center gap-2 text-xl'}>
          <a href={metadata.openSea?.externalUrl} target={'_blank'}>
            <BiLink/>
          </a>
          <a href={metadata.openSea?.discordUrl} target={'_blank'}>
            <FaDiscord />
          </a>
          <a href={`https://twitter.com/${metadata.openSea?.twitterUsername}`} target={'_blank'}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  </div>
}