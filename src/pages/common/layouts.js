import Header from "./header";

export const MainLayout = ({children}) => {
  return <div className={' flex flex-col justify-center items-center w-full pb-10'}>
    <Header/>
    <div className={"w-full p-4 pb-12 space-y-2 flex flex-col"}>
      {children}
    </div>
  </div>
}