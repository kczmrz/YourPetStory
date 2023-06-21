import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode, 
  Image as AvatarImage
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
  SettingsIcon
} from '@chakra-ui/icons';

import { ThemeAppDay } from '@/app/ColorsTheme';
import { ImageLogo } from '@/images';
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from '@/redux/store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

/* Sub nawigacja w mobilnym wygladzie navbaru, ten przycisk taki do rozwijania */
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const buttonsBackgroundColor = useColorModeValue('gray.500', 'gray.500')
  const navbarBackgroundColor = useColorModeValue(ThemeAppDay.lightAshen, '#250045');
   
  const { userLogin, userAvatar, userPets, userNick } = useSelector((state: RootState) => state.User)

  const { colorMode, toggleColorMode } = useColorMode();
  
  const [navbarAvatar, setNavbarAvatar] = useState<string>("");

  const changeIconToggleBtn = ()=> {
    if(colorMode === 'dark') {
      return <MoonIcon/>
    }
    else return <SunIcon/>
  }

  useEffect(()=> {
     if(userAvatar == null || userAvatar == "")
     {
      setNavbarAvatar("./public/images/other/blankavatar.jpg");
     }
     else {
      setNavbarAvatar(userAvatar);
     }
  }, [userAvatar])

  return (
    <Box>
      <Flex
        bg={navbarBackgroundColor}
        color={useColorModeValue('white', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} color={'white'}  /> : <HamburgerIcon w={5} h={5} color={'white'} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        {/* Elementy do loga */}
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('white', 'white')}
            h={"30px"}>
              <Link href={'/'}> 
                <Image src={(colorMode === 'dark') ? ImageLogo.logoWhite : ImageLogo.logoDark} alt={"logo"} width={70}/>
              </Link>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

      {/* Przyciski logowania */}
      {userLogin
      
      ? <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}>
     <Flex display={'flex'} flexDirection={'row'} mr={'1em'}>
      <Box flex="1" width={'40px'} mr="0.5em"> <AvatarImage src={navbarAvatar} alt="avatar" borderRadius={'2em'} /> </Box>
      <Box flex="1" width={'40px'}> <Button><SettingsIcon/> </Button> </Box>

     </Flex>
      </Stack>

      :<Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}>
     <Button onClick={toggleColorMode}>
     <Icon color={'black'} w={3} h={3} as={()=> changeIconToggleBtn()} />
     </Button>

     <Link href={'/login'}>
        <Button
          
            fontSize={'sm'}
           fontWeight={600}
           bgColor={buttonsBackgroundColor}
           color={'white'}
           display={'inline-flex'}
          >
           Zaloguj się
         </Button>
    </Link>
    
    <Link href={'/register'}>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bgColor={buttonsBackgroundColor}>
        Zarejestruj się
      </Button>
      </Link>
    </Stack>  }
        

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}


/*  linki po lewej stronie obok loga */
const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('#051B15', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} display={'flex'} placeItems={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger>
             {/* Miejsce na linki */}
            
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

/* divy po najechaniu na te linki po lewej stronie */
const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <ChakraLink
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('white', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'white' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </ChakraLink>
  );
};

/*Navbar Mobilny */

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

/*Ustawienie itemu w mobilnym navbarze */
const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <ChakraLink key={child.label} py={2} href={child.href}>
                {child.label}
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

/* Data */
const NAV_ITEMS: Array<NavItem> = [
  
];