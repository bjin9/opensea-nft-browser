import {MainLayout} from "../common/layouts";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/slices/user.slice";
import {useNavigate} from "react-router-dom"

export default () => {
  const user = useSelector(userSelector)
  const navigate = useNavigate()

  return <MainLayout>
    <div className={'grid grid-cols-3'}>
      <div/>
      <div className={'font-bold text-lg text-center bg-black -mt-4 rounded-bl-3xl rounded-br-3xl'}>USDT</div>
      <div/>
    </div>
    <div className={'bg-slate-700 p-2 rounded-md text-xs space-y-4'}>
      <div className={'grid grid-cols-2 p-4'}>
        <div className={''}>
          <div className={'h-8 flex flex-row items-center'}>
            <div className={'w-3/6 md:w-1/6'}>
              Available
            </div>
            <div className={'w-3/6 md:w-5/6 font-bold'}>
              538.05
            </div>
          </div>
          <div className={'h-8 flex flex-row items-center'}>
            <div className={'w-3/6 md:w-1/6'}>
              Total
            </div>
            <div className={'w-3/6 md:w-5/6 font-bold'}>
              738.05
            </div>
          </div>
        </div>
        <div>
          <div className={'h-8 flex flex-row items-center'}>
            <div className={'w-3/6 md:w-1/6'}>
              Amount in withdrawal
            </div>
            <div className={'w-3/6 md:w-5/6 font-bold'}>
              200.00
            </div>
          </div>
          <div className={'h-8 flex flex-row items-center'}>
            <div className={'w-3/6 md:w-1/6'}>
              Times
            </div>
            <div className={'w-3/6 md:w-5/6 font-bold'}>
              0
            </div>
          </div>
        </div>
      </div>

      <div className={'w-full text-center'}>
        <div className={'m-auto flex w-16 h-16 rounded-full text-white bg-orange-500 justify-center items-center font-bold cursor-pointer'}>Start</div>
      </div>

      <div className={'grid grid-cols-4 gap-2 pb-4'}>
        <div className={'flex flex-col justify-center items-center space-y-2'}>
          <div className={'text-center px-4 py-1 rounded-md border border-orange-200 w-full md:w-1/2'} onClick={() => navigate('/recharge')}>Recharge</div>
        </div>
        <div className={'flex flex-col justify-center items-center space-y-2'}>
          <div className={'text-center px-4 py-1 rounded-md border border-orange-200 w-full md:w-1/2'}>Withdraw</div>
        </div>
        <div className={'flex flex-col justify-center items-center space-y-2'}>
          <div className={'text-center px-4 py-1 rounded-md border border-orange-200 w-full md:w-1/2'}>Upgrade</div>
        </div>
        <div className={'flex flex-col justify-center items-center space-y-2'}>
          <div className={'text-center px-4 py-1 rounded-md border border-orange-200 w-full md:w-1/2'}>Record</div>
        </div>
      </div>
    </div>

    {/*  Tiers */}
    <div className={'flex flex-col space-y-2 w-100 m-auto'}>
      {Tiers.map((tier, id) => <div className={'w-full px-4 py-2 rounded-md bg-slate-800'} key={'tier-' + id}>
        <div className={'flex flex-row justify-between items-center'}>
          <div className={'font-bold italic'}>
            V<sub>{tier.grade}</sub>
          </div>
          <div className={'text-center'}>
            <div className={'text-gray-500 text-sm'}>Account Balance</div>
            <div className={'text-md font-bold'}>{tier.balance_min}U-{tier.balance_max}U</div>
          </div>
          <div className={'text-center'}>
            <div className={'text-gray-500 text-sm'}>Operation Times</div>
            <div className={'text-md font-bold'}>{tier.operation_times}</div>
          </div>
        </div>
        <div className={'text-sm text-gray-500 text-center'}>
          {tier.description}
        </div>
      </div>)}
    </div>
  </MainLayout>
}

const Tiers = [
  {
    grade: '1',
    balance_min: 30,
    balance_max: 1000,
    operation_times: 2,
    description: ''
  },
  {
    grade: '2',
    balance_min: 100,
    balance_max: 5000,
    operation_times: 5,
    description: 'Invite 2 members, each member recharge 60U or more'
  },
  {
    grade: '3',
    balance_min: 200,
    balance_max: 10000,
    operation_times: 7,
    description: 'Invite 5 members, each member recharge 60U or more'
  },
  {
    grade: '4',
    balance_min: 10000,
    balance_max: 100000,
    operation_times: 9,
    description: 'Invite 7 members, each member recharge 60U or more'
  },
  {
    grade: '5',
    balance_min: 10000,
    balance_max: 300000,
    operation_times: 11,
    description: 'Invite 9 members, each member recharge 60U or more'
  },
]