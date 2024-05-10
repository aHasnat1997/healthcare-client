import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import BiotechIcon from '@mui/icons-material/Biotech';
import Groups2Icon from '@mui/icons-material/Groups2';

type TList = {
  title: string,
  path: string,
  icon: React.ReactNode
}

export default function DrawerListItems(): TList[] {
  const { role } = JSON.parse(localStorage.getItem('access-token')!);
  // console.log(role);


  const admin: TList[] = [
    {
      icon: <SpaceDashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: <BiotechIcon />,
      title: 'Doctors',
      path: '/dashboard/doctors'
    },
    {
      icon: <AssistWalkerIcon />,
      title: 'Patients',
      path: '/dashboard/patients'
    },
    {
      icon: <Groups2Icon />,
      title: 'Admins',
      path: '/dashboard/admins'
    }
  ];

  const list = role === 'ADMIN' ? admin : [];

  return list;
};