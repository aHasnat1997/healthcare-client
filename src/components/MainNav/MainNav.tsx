import assets from "@/assets";
import { Box, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function MainNav() {
  type TNavContent = {
    title: string;
    path: string;
  };
  const navContent: TNavContent[] = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/'
    },
    {
      title: 'Department',
      path: '/'
    },
    {
      title: 'Service',
      path: '/'
    },
    {
      title: 'Price',
      path: '/'
    },
    {
      title: 'Contact',
      path: '/'
    }
  ];

  return (
    <Container sx={{ padding: '1rem 0' }}>
      <Stack justifyContent='space-between' alignItems='center'>
        <Box>
          <Image
            alt="Logo"
            src={assets.img.logo}
            height={100}
            width={100}
          />
        </Box>
        <Stack spacing='4rem'>
          {
            navContent.map((item, i) => <Box key={i}>
              <Link href={item.path} className="hover:text-[#0075ff]">{item.title}</Link>
            </Box>)
          }
        </Stack>
        <Box>
          <Button
            variant="outlined"
            className="duration-200 hover:bg-[#0075ff] hover:text-white"
          >
            Login
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default MainNav; 