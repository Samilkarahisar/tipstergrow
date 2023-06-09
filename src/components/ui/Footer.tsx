import { IconDiscord, IconTwitter } from '@/res/icons';
import { footerRoutes } from '@/res/routes';
import { DISCORD_LINK, TWITTER_LINK } from '@/res/values';
import Link from 'next/link';
import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <div className="bg-white border-t border-black dark:border-dark-secondary pt-4 pb-4">
      <Container>
        <div className="flex tablet:items-center items-start justify-between tablet:mb-10 mb-14 flex-wrap gap-5">
          <ul className="flex space-y-4 tablet:space-x-8 flex-wrap tablet:flex-row flex-col tablet:space-y-0 mb-0">
            {footerRoutes.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
                  <a className="dark:text-dark-gray1 text-gray1 text-sm laptop:text-md">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-3 flex-wrap">
            <div className="p-[10px] bg-secondary flex dark:bg-dark-secondary rounded-xl">
              <Link href={TWITTER_LINK}>
                <a target="_blank" className="flex">
                  <IconTwitter alt="twitter" />
                </a>
              </Link>
            </div>
            <div className="p-[10px] bg-secondary flex dark:bg-dark-secondary rounded-xl">
              <Link href={DISCORD_LINK}>
                <a target="_blank" className="flex">
                  <IconDiscord alt="discord" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <label className="text-gray2 text-xs">
          Decoloco © 2022 - contact@decoloco.co
        </label>
      </Container>
    </div>
  );
};

export default Footer;
