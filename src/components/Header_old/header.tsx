import React, { useState, useRef } from "react";
import { navigate, findNavigationPath } from "../Navigation_old/navigation.tsx";
import { CurrentPageProps } from "../../interfaces_old/page.tsx";
import HeaderIcons from "./Icons/icons.tsx";
import * as menuItemsJSON from './menuItems.json';
import './header.scss';

export default function Header({ currentPage, setCurrentPage }: CurrentPageProps) {
  const menuItems = Array.from(menuItemsJSON);
  const [subMenuItems, setSubMenuItems] = useState<Array<{ text: string, columnIndex: number, rowIndex: number }>>();
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const leftMenuRef = useRef<HTMLUListElement>(null);
  const rightMenuRef = useRef<HTMLUListElement>(null);

  interface MenuItem {
    text: string,
    columnIndex: number,
    rowIndex: number
  }

  interface SubMenu {
    text: string,
    subMenu: Array<MenuItem>
  }

  function toggleMenu() {
    menuRef.current!.classList.toggle('expanded') && subMenuItems ? backButtonRef.current!.classList.add('visible') : backButtonRef.current!.classList.remove('visible');
  }
  function isActiveListItem(item: MenuItem | SubMenu) {
    if ('subMenu' in item) {
      return item.subMenu.some(subItem => subItem.columnIndex === currentPage.columnIndex && subItem.rowIndex === currentPage.rowIndex);
    }
    return item.columnIndex === currentPage.columnIndex && item.rowIndex === currentPage.rowIndex;
  }

  function menuItemClickHandler(item: MenuItem | SubMenu) {
    if ('subMenu' in item) {
      backButtonRef.current!.classList.add('visible');
      setSubMenuItems(item.subMenu);
    }
    else {
      toggleMenu();
      navigate(findNavigationPath(currentPage, { columnIndex: item.columnIndex, rowIndex: item.rowIndex })!, setCurrentPage);
    }
  }

  return (
    <div className='header'>
      <span>mail@ole-koester.de</span>
      <HeaderIcons />
      <div className='menu' ref={menuRef}>
        <div className="menuButtonContainer">
          <button className="backButton" ref={backButtonRef} disabled={subMenuItems ? false : true} onClick={e => {
            leftMenuRef.current!.classList.remove('subMenu');
            leftMenuRef.current!.classList.add('mainMenu');
            rightMenuRef.current!.classList.remove('subMenu');
            rightMenuRef.current!.classList.add('mainMenu');
            backButtonRef.current!.classList.remove('visible');
            setTimeout(() => {
              setSubMenuItems(undefined);
            }, 500)
          }}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>
          <button onClick={e => toggleMenu()}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>

        <div className="menuItems">
          <ul className={subMenuItems ? 'subMenu' : 'mainMenu'} ref={leftMenuRef}>
            {menuItems.map((item, index) => <li key={index} className={isActiveListItem(item) ? 'active' : ''} onClick={e => menuItemClickHandler(item)}>
              <div>{item.text}{'subMenu' in item && <span>&rarr;</span>}</div>
            </li>)}
          </ul>
          <ul className={subMenuItems ? 'subMenu' : 'mainMenu'} ref={rightMenuRef}>
            {subMenuItems && subMenuItems.map((item, index) => <li key={index} className={isActiveListItem(item) ? 'active' : ''} onClick={e => menuItemClickHandler(item)}>
              <div>{item.text}</div>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}