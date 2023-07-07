import AppDashboard from '../components/dashboard/AppDashboard'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { Route } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function() {
    const router = useRouter();
    const { userLogin } = useSelector((state: RootState) => state.User)
    
    useEffect(()=> {
      if(!userLogin){
        router.push('/login', undefined);
      }
    }, [])
    return (<> 
            <AppDashboard > </AppDashboard>
        </>
    )
}