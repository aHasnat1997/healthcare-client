import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import BiotechIcon from '@mui/icons-material/Biotech';
import Groups2Icon from '@mui/icons-material/Groups2';
import { getStoredUser } from '@/utils/currentStoredUser';

type TList = {
  title: string,
  path: string,
  icon: React.ReactNode
}

export default function DrawerListItems(): TList[] {
  const { role } = getStoredUser('access-token');
  // console.log(role);


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

  const list = role === 'ADMIN' ? admin : [];

  return list;
};