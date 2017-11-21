import { DropdownItem } from '../dropdown-item';

const iconFolderPath = 'assets/icons/';

export const SupportDropdownItems: DropdownItem[] = [
  {
    iconPath: iconFolderPath + 'request.svg',
    jumpLink: 'mailto:support@clipchamp.com',
    title: 'Request',
    introduction: null
  },
  {
    iconPath: iconFolderPath + 'tutorial.svg',
    jumpLink: 'https://clipchamp.com/help/hc/en-us',
    title: 'Tutorial',
    introduction: null
  },
  {
    iconPath: iconFolderPath + 'Q&A.svg',
    jumpLink: 'https://clipchamp.com/help/hc/en-us',
    title: 'Q&A',
    introduction: null
  }
];
