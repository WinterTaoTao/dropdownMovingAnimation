import { DropdownItem } from '../dropdown-item';

const iconFolderPath = 'assets/icons/';

export const ProductDropdownItems: DropdownItem[] = [
  {
    iconPath: iconFolderPath + '4in1.svg',
    jumpLink: 'https://clipchamp.com/en/dashboard',
    title: '4 in 1',
    introduction: 'Compress, Convert, Edit & Record'
  },
  {
    iconPath: iconFolderPath + 'video-request.svg',
    jumpLink: 'https://clipchamp.com/en/video-sharing-request',
    title: 'Video Request',
    introduction: 'Send your request to others'
  },
  {
    iconPath: iconFolderPath + 'api.svg',
    jumpLink: 'https://clipchamp.com/en/api',
    title: 'API',
    introduction: 'Enjoy our awesome API'
  }
];
