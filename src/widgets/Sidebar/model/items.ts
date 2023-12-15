import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Головна',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'Про сайт',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Сторінка профілю',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'Статті',
    authOnly: true,
  },
];
