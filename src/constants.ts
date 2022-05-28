import { IPlayerCard, INftCard, stakingNFTs } from '@root/types'
export const MOBILE_MAX_WIDTH = 480
export const TABULET_MAX_WIDTH = 992
export const CONTACT_PHONE = '014-3456244'
export const CONTACT_EMAIL = 'hello@mecarreira.co.il'
const jwtToken = localStorage.getItem('accessToken')
console.log({ jwtToken })

export const API_CONSTANTS = {
  HOST_URL: process.env.REACT_APP_HOST_URL,
  MOCK_URL: process.env.REACT_APP_MOCK_URL,
  headers: {
    // 'Content-Type': 'application/json',
    // Accept: 'application/json',
    Authorization: `Bearer ${jwtToken}`,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}

export const serverErrorCodes = [500, 501, 502, 503, 504, 505]

export const unAuthorizedErrorCode = 401

export const Faq = [
  {
    question: 'Question 1',
    answer:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum',
  },
  {
    question: 'Question 2',
    answer:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum',
  },
  {
    question: 'Question 3',
    answer:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum',
  },
  {
    question: 'Question 4',
    answer:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum',
  },
]

export const PlayerCardData: IPlayerCard[] = [
  {
    name: 'Alessandro Del Piero',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/alessandro_del_piero.png'),
    profileLink: 'player/1',
    changedPrice: '+20%',
    coinIssued: 168.425,
    holders: 48789,
  },
  {
    name: 'Diego Maradona',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/diego_maradona.png'),
    profileLink: 'player/2',
    changedPrice: '+20%',
    coinIssued: 1168.425,
    holders: 48789,
  },
  {
    name: 'Gianluigi Buffon',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/gianluigi_buffon.png'),
    profileLink: 'player/3',
    changedPrice: '+20%',
    coinIssued: 1682.425,
    holders: 48789,
  },
  {
    name: 'Granit Xhaka',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/granit_xhaka.png'),
    profileLink: 'player/4',
    changedPrice: '+20%',
    coinIssued: 16812.425,
    holders: 48789,
  },
  {
    name: 'Kylian Mbappe',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/killian_mbappe.png'),
    profileLink: 'player/5',
    changedPrice: '+20%',
    coinIssued: 168.425,
    holders: 48789,
  },
  {
    name: 'Lorenzo Insigne',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/lorenzo_insigne.png'),
    profileLink: 'player/5',
    changedPrice: '+20%',
    coinIssued: 168.425,
    holders: 48789,
  },
  {
    name: 'Mohammed Salah',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/mohammed_salah.png'),
    profileLink: 'player/5',
    changedPrice: '+20%',
    coinIssued: 168.425,
    holders: 48789,
  },
  {
    name: 'Neymar da Silva Santos',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/neymar_jr.png'),
    profileLink: 'player/5',
    changedPrice: '+20%',
    coinIssued: 168.425,
    holders: 48789,
  },
  {
    name: 'Ralf Rangnick',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/ralf_rangnick.png'),
    profileLink: 'player/5',
    changedPrice: '+20%',
    coinIssued: 168.425,
    holders: 48789,
  },
  {
    name: 'Robert Lewandowski',
    ethPrice: 1.99,
    price: 6186,
    time: '06:03:23:42',
    img: require('@assets/images/players/robert_lewandowski.png'),
    profileLink: 'player/5',
    changedPrice: '+20%',
    coinIssued: 168.425,
    holders: 48789,
  },
]

export const NftCardData: INftCard[] = [
  {
    name: 'David Villa Sanchez',
    title: 'Football Jersey',
    number: 351,
    owner: '0x234234235435345sdfers79834sdfsdfsd',
    img: require('@assets/images/nfts/1-min.png'),
    mintDate: '16.02.2022',
  },
  {
    name: 'Joe Cheeo Sanchez',
    title: 'Football Jersey',
    number: 3551,
    owner: '0x234234235435345sdfers79834sdfsdfsd',
    img: require('@assets/images/nfts/2-min.png'),
    mintDate: '16.02.2022',
  },
  {
    name: 'Joe Cheeo Sanchez',
    title: 'Football Jersey',
    number: 3551,
    owner: '0x234234235435345sdfers79834sdfsdfsd',
    img: require('@assets/images/nfts/3-min.png'),
    mintDate: '16.02.2022',
  },
  {
    name: 'Joe Cheeo Sanchez',
    title: 'Football Jersey',
    number: 3551,
    owner: '0x234234235435345sdfers79834sdfsdfsd',
    img: require('@assets/images/nfts/4-min.png'),
    mintDate: '16.02.2022',
  },
  {
    name: 'Joe Cheeo Sanchez',
    title: 'Football Jersey',
    number: 3551,
    owner: '0x234234235435345sdfers79834sdfsdfsd',
    img: require('@assets/images/nfts/5-min.png'),
    mintDate: '16.02.2022',
  },
  {
    name: 'Joe Cheeo Sanchez',
    title: 'Football Jersey',
    number: 3551,
    owner: '0x234234235435345sdfers79834sdfsdfsd',
    img: require('@assets/images/nfts/2-min.png'),
    mintDate: '16.02.2022',
  },
  {
    name: 'Joe Cheeo Sanchez',
    title: 'Football Jersey',
    number: 3551,
    owner: '0x234234235435345sdfers79834sdfsdfsd',
    img: require('@assets/images/nfts/3-min.png'),
    mintDate: '16.02.2022',
  },
]

export const NftPlayerPriceData = [
  {
    id: 1,
    label: 'Estimated price per coin',
    value: '0.02147898 MATIC',
  },
  {
    id: 2,
    label: 'Total estimated',
    value: '2.2214 MATIC',
  },
]

export const Notifications = [
  {
    title: 'New Voting Request',
    content:
      'David Villa Sanchez is requesting your vote! Visit profile and vote now',
    date: '2022-03-07 14:34',
    url: '#',
  },
  {
    title: 'New Voting Request',
    content:
      'David Villa Sanchez is requesting your vote! Visit profile and vote now',
    date: '2022-03-07 14:34',
    url: '#',
  },
  {
    title: 'New Voting Request',
    content:
      'David Villa Sanchez is requesting your vote! Visit profile and vote now',
    date: '2022-03-07 14:34',
    url: '#',
  },
]

export const NotificationList = [
  {
    title: 'Notification 1',
  },
  {
    title: 'Notification 2',
  },
  {
    title: 'Notification 3',
  },
]

export const MenuItems = [
  {
    title: 'language',
    url: 'language',
  },
  {
    title: 'account',
    url: 'accounts/changePassword',
  },
  {
    title: 'ongoing subscriptions',
    url: '',
  },
  {
    title: 'latest created NFT’s',
    url: '',
  },
]

export const ContactUs = [
  'about us',
  'team',
  'terms & conditions',
  'privacy',
  'careers',
]

export const SocialGroup = [
  {
    social: require('@assets/icons/icon/twitter.svg'),
  },
  {
    social: require('@assets/icons/icon/discord.svg'),
  },
  {
    social: require('@assets/icons/icon/Instagram.svg'),
  },
  {
    social: require('@assets/icons/icon/youtube.svg'),
  },
]

export const Languages = [
  {
    name: 'English',
    symbol: 'en',
  },
  {
    name: '中文',
    symbol: 'zh',
  },
  {
    name: 'Français',
    symbol: 'fr',
  },
  {
    name: 'Deutsch',
    symbol: 'de',
  },
  {
    name: 'Português',
    symbol: 'pt',
  },
  {
    name: 'Italiano',
    symbol: 'it',
  },
  {
    name: 'Polski',
    symbol: 'ps',
  },
  {
    name: 'Español',
    symbol: 'es',
  },
]

export const Nfts: stakingNFTs[] = [
  {
    name: 'Manuel Akanji',
    image: require('@assets/images/nfts/1-min.png'),
    amount: 1.254,
    price: 4652,
    stakingAmount: 0,
  },
  {
    name: 'Neymar da Silva Santos',
    image: require('@assets/images/nfts/3-min.png'),
    amount: 1.254,
    price: 4652,
    stakingAmount: 0.8,
  },
  {
    name: 'Mohammed Salah',
    image: require('@assets/images/nfts/4-min.png'),
    amount: 1.254,
    price: 4652,
    stakingAmount: 10,
  },
  {
    name: 'Manuel Akanji',
    image: require('@assets/images/nfts/5-min.png'),
    amount: 1.254,
    price: 4652,
    stakingAmount: 0.07,
  },
]
