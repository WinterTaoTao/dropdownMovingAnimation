import {DropdownItem} from '../dropdown-item';

const iconFolerPath = 'assets/icons/';

export const PriceDropdownItems: DropdownItem[] = [
  {
    iconPath: iconFolerPath + '4in1.svg',
    jumpLink: 'https://clipchamp.com/en/pricing/compress-record',
    title: '4 in 1 Pricing',
    introduction: null
  },

  {
    iconPath: iconFolerPath + 'video-request.svg',
    jumpLink: 'https://clipchamp.com/en/video-sharing-request',
    title: 'Video Request Pricing',
    introduction: null
  },

  {
    iconPath: iconFolerPath + 'api.svg',
    jumpLink: 'https://clipchamp.com/en/pricing/api-access#compare-api-plans',
    title: 'API Pricing',
    introduction: null
  }
];
