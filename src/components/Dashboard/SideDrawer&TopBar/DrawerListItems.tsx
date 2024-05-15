import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import BiotechIcon from '@mui/icons-material/Biotech';
import Groups2Icon from '@mui/icons-material/Groups2';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';

type TList = {
  title: string,
  path: string,
  icon: React.ReactNode
}

export default function DrawerListItems(): TList[] {
  const currentStoredUser = useAppSelector((state: RootState) => state.auth.userInfo);
  // console.log(currentStoredUser?.role);

  const admin: TList[] = [
    {
      icon: <SpaceDashboardIcon sx={{ color: '#fff' }} />,
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: <BiotechIcon sx={{ color: '#fff' }} />,
      title: 'Doctors',
      path: '/dashboard/doctors'
    },
    {
      icon: <AssistWalkerIcon sx={{ color: '#fff' }} />,
      title: 'Patients',
      path: '/dashboard/patients'
    },
    {
      icon: <Groups2Icon sx={{ color: '#fff' }} />,
      title: 'Admins',
      path: '/dashboard/admins'
    }
  ];

  const list = currentStoredUser?.role === 'ADMIN' ? admin : [];

  return list;
};