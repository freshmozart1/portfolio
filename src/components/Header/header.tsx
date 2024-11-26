import React, { useState } from "react";
import { navigate, findNavigationPath } from "../Navigation/navigation.tsx";
import './header.scss';

export default function Header({ currentPage, setCurrentPage }: { currentPage: { columnIndex: number, rowIndex: number }, setCurrentPage: React.Dispatch<React.SetStateAction<{ columnIndex: number, rowIndex: number }>> }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenu, setSubMenu] = useState<Array<{ text: string, columnIndex: number, rowIndex: number }>>();

  function iconClick(icon: 'mail' | 'linkedin' | 'xing' | 'medium' | 'github') {
    switch (icon) {
      case 'mail': window.open('mailto:mail@ole-koester.de'); break;
      case 'linkedin': window.open('https://www.linkedin.com/in/ole-koester/'); break;
      case 'xing': window.open('https://www.xing.com/profile/Ole_Koester5'); break;
      case 'github': window.open('https://github.com/freshmozart1'); break;
    }
  }

  function expandSubMenu(subMenu: Array<{ text: string, columnIndex: number, rowIndex: number }>) {
    setSubMenu(subMenu);
    const subMenuList: HTMLUListElement = document.querySelectorAll('div.menu>div.menuItems>ul')[1] as HTMLUListElement;
    const subMenuButton: HTMLButtonElement = document.querySelector('div.menu>div.menuButtonContainer>button') as HTMLButtonElement;
    Object.assign(subMenuList.style, {
      width: '100%', height: '100%', opacity: '1', fontSize: window.innerWidth >= 1024 ? '40px' : '20px',
      lineHeight: window.innerWidth >= 1024 ? '50px' : '25px'
    });
    subMenuList.scrollIntoView({ behavior: 'smooth' });
    Object.assign(subMenuButton.style, {
      width: window.innerWidth >= 1024 ? '90px' : '45px',
      height: window.innerWidth >= 1024 ? '90px' : '45px',
    });
  }

  function closeSubMenu() {
    (document.querySelector('div.menu>div.menuItems>ul') as HTMLUListElement).scrollIntoView({ behavior: 'smooth' });
    Object.assign((document.querySelector('div.menu>div.menuButtonContainer>button') as HTMLButtonElement).style, {
      width: '0',
      height: '0',
    });
  }

  function menuClick(nextPage?: { columnIndex: number, rowIndex: number }) {
    const [menu, mainMenuList, subMenuList] = [
      document.querySelector('div.menu'),
      document.querySelectorAll('div.menu>div.menuItems>ul')[0],
      document.querySelectorAll('div.menu>div.menuItems>ul')[1]
    ].map(el => el as HTMLElement);

    function closeMenu() {
      closeSubMenu();
      ['right', 'top', 'width', 'height', 'backgroundColor', 'borderRadius', 'padding'].forEach((prop, i) => {
        menu.style[prop] = ['20px', '20px', window.innerWidth >= 1024 ? '90px' : '45px', window.innerWidth >= 1024 ? '90px' : '45px', 'rgba(0, 0, 0, 0)', '0 0 0 50%', '0'][i];
      });
      [mainMenuList, subMenuList].forEach(list => Object.assign(list.style, {
        width: '0',
        height: '0',
        opacity: '0',
        fontSize: '0',
        lineHeight: '0'
      }));
      setMenuOpen(false);
    };

    if (nextPage) {
      const path = findNavigationPath(currentPage, nextPage);
      if (path) {
        closeMenu();
        navigate(path, setCurrentPage);
      }
      return;
    }

    if (menuOpen) closeMenu();
    else {
      ['right', 'top', 'width', 'height', 'backgroundColor', 'borderRadius', 'padding'].forEach((prop, i) => {
        menu.style[prop] = ['0', '0', '100%', '100%', 'rgba(0, 0, 0, 0.9)', '0', '20px'][i];
      });
      ['width', 'height', 'opacity', 'fontSize', 'lineHeight'].forEach((prop, i) => {
        mainMenuList.style[prop] = ['100%', '100%', '1', window.innerWidth >= 1024 ? '40px' : '20px', window.innerWidth >= 1024 ? '50px' : '25px'][i];
      });
      setMenuOpen(true);
    }
  }

  return (
    <div className='header'>
      <svg onClick={e => iconClick('mail')} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
      </svg>
      <svg onClick={e => iconClick('xing')} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540.543 540.543">
        <g>
          <g>
            <path d="M129.989,378.772c8.274,0,15.361-5.006,21.243-15.036c53.813-95.423,81.806-145.093,83.991-149.028l-53.593-93.458c-5.667-9.804-12.858-14.707-21.567-14.707H81.953c-5.019,0-8.495,1.634-10.459,4.902c-2.399,3.268-2.289,7.301,0.325,12.087l52.613,91.176c0.214,0.232,0.214,0.331,0,0.331L41.75,361.453c-2.172,4.149-2.172,8.066,0,11.757c2.173,3.715,5.557,5.562,10.129,5.562H129.989z" />
            <path d="M488.492,0h-78.758c-8.495,0-15.472,4.902-20.912,14.707C277.053,212.97,219.206,315.596,215.283,322.555l110.784,203.282c5.227,9.804,12.418,14.706,21.567,14.706h78.104c4.791,0,8.28-1.634,10.459-4.902c2.172-3.715,2.068-7.748-0.325-12.099L326.073,322.555v-0.318L498.627,16.995c2.393-4.571,2.393-8.592,0-12.087C496.662,1.634,493.284,0,488.492,0z" />
          </g>
        </g>
      </svg>
      <svg onClick={e => iconClick('linkedin')} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 192 192" enableBackground="new 0 0 192 192">
        <path fill="#FFFFFF" opacity="1.000000" d="M1.000002,186.000000 C1.000000,126.979103 1.000000,67.958206 1.294219,8.755864 C3.725626,6.049609 5.862813,3.524805 8.000000,1.000000 C67.020897,1.000000 126.041786,1.000000 185.244141,1.294221 C187.950394,3.725629 190.475189,5.862814 193.000000,8.000000 C193.000000,67.020897 193.000000,126.041786 192.705780,185.244141 C190.274384,187.950394 188.137192,190.475204 186.000000,193.000000 C126.979103,193.000000 67.958206,193.000000 8.755867,192.705780 C6.049613,190.274368 3.524809,188.137177 1.000002,186.000000 M137.056870,164.253601 C146.242035,164.253601 155.427185,164.253601 164.912369,164.253601 C164.725937,164.465714 164.927582,164.343475 164.927841,164.220810 C164.961502,148.388901 165.168396,132.553864 164.907455,116.726555 C164.803101,110.396919 164.169113,103.981773 162.905945,97.782898 C158.888412,78.067116 139.262787,67.034164 119.659515,72.940254 C111.696922,75.339241 105.097778,79.620667 99.018417,86.582062 C99.018417,81.498535 99.018417,77.443031 99.018417,73.204117 C90.215538,73.204117 81.809135,73.204117 73.201241,73.204117 C73.201241,103.794930 73.201241,134.198868 73.201241,164.797943 C82.467865,164.797943 91.539284,164.797943 101.000000,164.797943 C101.000000,162.979538 101.000000,161.356583 101.000000,159.733627 C101.000000,144.234467 101.106903,128.734283 100.957626,113.236549 C100.875526,104.713913 108.144562,94.447739 121.121338,94.732193 C129.104813,94.907204 137.173538,102.972778 137.056015,112.789543 C136.854523,129.619537 137.002609,146.453705 137.056870,164.253601 M29.000000,126.500000 C29.000000,139.262405 29.000000,152.024826 29.000000,164.711517 C38.646896,164.711517 47.718575,164.711517 56.713932,164.711517 C56.713932,134.021179 56.713932,103.620163 56.713932,73.288437 C47.353172,73.288437 38.281204,73.288437 29.000000,73.288437 C29.000000,90.883995 29.000000,108.192001 29.000000,126.500000 M46.027855,57.999146 C55.171204,55.009209 58.932877,49.373386 57.999233,40.063354 C57.278568,32.877094 50.085449,27.726719 41.151367,28.000042 C34.837353,28.193209 28.648020,34.581131 27.922417,40.760616 C26.692793,51.232510 35.209259,59.717278 46.027855,57.999146 z" />
        <path fill="none" opacity="1.000000" d="M137.030396,163.769867 C137.002609,146.453705 136.854523,129.619537 137.056015,112.789543 C137.173538,102.972778 129.104813,94.907204 121.121338,94.732193 C108.144562,94.447739 100.875526,104.713913 100.957626,113.236549 C101.106903,128.734283 101.000000,144.234467 101.000000,159.733627 C101.000000,161.356583 101.000000,162.979538 101.000000,164.797943 C91.539284,164.797943 82.467865,164.797943 73.201241,164.797943 C73.201241,134.198868 73.201241,103.794930 73.201241,73.204117 C81.809135,73.204117 90.215538,73.204117 99.018417,73.204117 C99.018417,77.443031 99.018417,81.498535 99.018417,86.582062 C105.097778,79.620667 111.696922,75.339241 119.659515,72.940254 C139.262787,67.034164 158.888412,78.067116 162.905945,97.782898 C164.169113,103.981773 164.803101,110.396919 164.907455,116.726555 C165.168396,132.553864 164.961502,148.388901 164.927841,164.220810 C164.927582,164.343475 164.725937,164.465714 164.912369,164.253601 C155.427185,164.253601 146.242035,164.253601 137.030396,163.769867 z" />
        <path fill="none" opacity="1.000000" d="M29.000000,126.000000 C29.000000,108.192001 29.000000,90.883995 29.000000,73.288437 C38.281204,73.288437 47.353172,73.288437 56.713932,73.288437 C56.713932,103.620163 56.713932,134.021179 56.713932,164.711517 C47.718575,164.711517 38.646896,164.711517 29.000000,164.711517 C29.000000,152.024826 29.000000,139.262405 29.000000,126.000000 z" />
        <path fill="none" opacity="1.000000" d="M45.596424,57.999542 C35.209259,59.717278 26.692793,51.232510 27.922417,40.760616 C28.648020,34.581131 34.837353,28.193209 41.151367,28.000042 C50.085449,27.726719 57.278568,32.877094 57.999233,40.063354 C58.932877,49.373386 55.171204,55.009209 45.596424,57.999542 z" />
      </svg>
      {
      /*<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <rect width="1024" height="1024" rx="179.649" mask='url(#mediumMask)' />
        <mask id="mediumMask">
          <rect width="1024" height="1024" rx="179.649" fill="white" />
          <path d="M1024 704.736V797.736C1018.16 798.3 1012.16 798.588 1006 798.588C896.061 798.588 834.166 707.016 831.497 592.432C831.418 588.002 831.448 583.6 831.546 579.228C831.606 576.501 831.714 573.783 831.852 571.075C831.921 569.628 831.989 568.269 832.098 566.753C832.206 565.236 832.315 563.72 832.443 562.204C836.401 511.613 852.687 466.594 879.568 433.284C896.267 412.606 916.334 396.852 939.09 386.316C959.078 376.253 987.17 370.699 1010.07 370.699H1011.06C1015.4 370.699 1019.71 370.844 1024 371.13V396.717C1019.45 395.47 1014.58 394.801 1009.4 394.715C963.086 395.67 935.486 451.145 932.049 528.007H1024V549.669H929.972L929.942 549.689C925.703 624.579 966.692 687.87 1024 704.736Z" fill="black" />
          <path d="M836.115 244.625L836.923 244.448V238.195H672.014L518.891 598.084L365.768 238.195H188.059V244.448L188.857 244.625C218.957 251.419 234.239 261.551 234.239 298.091V725.872C234.239 762.412 218.898 772.544 188.798 779.338L188 779.516V785.788H308.57V779.535L307.773 779.358C277.672 772.564 262.39 762.432 262.39 725.892V322.905L459.093 785.788H470.249L672.683 309.996V736.457C670.104 765.317 654.96 774.228 627.705 780.382L626.897 780.569V786.773H836.923V780.569L836.115 780.382C808.831 774.228 793.322 765.317 790.743 736.457L790.605 298.091H790.743C790.743 261.551 806.024 251.419 836.115 244.625Z" fill="black" />
        </mask>
      </svg> */}
      <svg onClick={e => iconClick('github')} viewBox='0 0 98 96' xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
      </svg>
      <div className='menu'>
        <div className="menuButtonContainer">
          <button onClick={e => closeSubMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>
          <button onClick={e => menuClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>

        <div className="menuItems">
          <ul>
            {[
              {
                text: 'Me', subMenu: [
                  { text: 'Me', columnIndex: 2, rowIndex: 0 },
                  { text: '2000 - 2018', columnIndex: 2, rowIndex: 1 },
                  { text: '2019 - 2024', columnIndex: 3, rowIndex: 1 }
                ]
              },
              { text: 'Skills', columnIndex: 3, rowIndex: 0 },
              {
                text: 'Talk With Everyone', subMenu: [
                  { text: 'Talk With Everyone', columnIndex: 4, rowIndex: 0 },
                  { text: 'Overview', columnIndex: 4, rowIndex: 1 },
                  { text: 'Purpose', columnIndex: 5, rowIndex: 1 },
                  { text: 'Objective', columnIndex: 6, rowIndex: 1 },
                  { text: 'My Role', columnIndex: 7, rowIndex: 1 },
                  { text: 'Tech Stack', columnIndex: 8, rowIndex: 1 },
                  { text: 'Backend', columnIndex: 9, rowIndex: 1 },
                  { text: 'Google Firebase Authentication', columnIndex: 10, rowIndex: 1 },
                  { text: 'Google Firestore', columnIndex: 11, rowIndex: 1 },
                  { text: 'Building the Interface', columnIndex: 12, rowIndex: 1 },
                  { text: 'The Chat', columnIndex: 13, rowIndex: 1 },
                  { text: 'react-native-maps', columnIndex: 14, rowIndex: 1 },
                  { text: 'Testing & Debuging', columnIndex: 15, rowIndex: 1 },
                  { text: 'Duration, what I learned and next steps', columnIndex: 16, rowIndex: 1 },
                  { text: 'Conclusion', columnIndex: 17, rowIndex: 1 }
                ]
              },
              { text: 'myFlix', columnIndex: 5, rowIndex: 0 },
              { text: 'Pokédex', columnIndex: 6, rowIndex: 0 },
              { text: 'Imprint', columnIndex: 7, rowIndex: 0 },
            ].map(item => (
              <li key={item.text} onClick={e => item.subMenu ? expandSubMenu(item.subMenu) : menuClick({ columnIndex: item.columnIndex, rowIndex: item.rowIndex })}>
                <div>{item.text}{item.subMenu && <span style={{ marginLeft: '10px' }}>&rarr;</span>}</div>
              </li>
            ))}
          </ul>
          <ul>
            {subMenu?.map((item, index) => (
              <li key={item.text} onClick={e => menuClick({ columnIndex: item.columnIndex, rowIndex: item.rowIndex })}>
                <div>{item.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}