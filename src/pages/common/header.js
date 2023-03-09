const Header = () => {
  return <div className={'fixed top-0 left-0 right-0 z-50 font-nulshock flex justify-between w-full px-2 md:px-8 py-4 items-center bg-slate-800/80 backdrop-opacity-50 drop-shadow'}>
    <a href={'/'} className={'text-lg md:text-2xl font-bold pr-6 border-b-2 border-indigo-600 cursor-pointer'}>NFT List</a>
    <div className={'hidden md:block text-xs font-mono'}>This demo app supports Ethereum network.</div>
    <div className={'text-xs md:text-md font-bold border px-2 py-1 rounded-sm'}>For Assessment Only</div>
  </div>
}

export default Header