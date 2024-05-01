import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

function Hero() {
  return (
    <Box sx={{ position: 'relative' }}>
      <div className="relative">
        <Image
          alt="Bg Image"
          src={assets.img.heroImg}
          height={1500}
          width={1500}
          className="h-[95vh] w-full"
        />
        <Image
          alt="Bg Image"
          src={assets.img.heroImgShape}
          height={1500}
          width={1500}
          className="h-[95vh] w-full absolute top-0"
        />
      </div>
      <div className="w-full h-[95vh] absolute top-10 z-40 flex items-center">
        <Container>
          <Stack direction='column' alignItems='flex-start' spacing='2rem' sx={{ width: '60%' }}>
            <h1 className="text-4xl font-semibold">
              Providing Quality Health Care. Your Health is Our Top Priority with <span className="text-[#0075ff]">Comprehensive</span>
            </h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <Button>Appointment Now</Button>
          </Stack>
        </Container>
      </div>
    </Box>
  );
}

export default Hero;