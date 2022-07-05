import React from "react";

function MobileNav() {
  const searchSvg = (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1862 22.7054L17.2062 15.7254C18.2894 14.3251 18.8753 12.613 18.8753 10.8122C18.8753 8.65669 18.0341 6.63552 16.5128 5.11159C14.9916 3.58766 12.965 2.74909 10.8122 2.74909C8.65931 2.74909 6.63277 3.59034 5.11153 5.11159C3.58759 6.63284 2.74902 8.65669 2.74902 10.8122C2.74902 12.9651 3.59028 14.9916 5.11153 16.5129C6.63277 18.0368 8.65662 18.8754 10.8122 18.8754C12.6129 18.8754 14.3223 18.2895 15.7226 17.209L22.7026 24.1863C22.7231 24.2068 22.7474 24.223 22.7741 24.2341C22.8009 24.2452 22.8296 24.2509 22.8585 24.2509C22.8875 24.2509 22.9161 24.2452 22.9429 24.2341C22.9696 24.223 22.9939 24.2068 23.0144 24.1863L24.1862 23.0172C24.2067 22.9967 24.223 22.9724 24.2341 22.9456C24.2451 22.9189 24.2508 22.8902 24.2508 22.8613C24.2508 22.8323 24.2451 22.8036 24.2341 22.7769C24.223 22.7501 24.2067 22.7258 24.1862 22.7054V22.7054ZM15.0695 15.0696C13.9299 16.2065 12.4194 16.8327 10.8122 16.8327C9.20492 16.8327 7.69442 16.2065 6.55483 15.0696C5.41793 13.93 4.79169 12.4195 4.79169 10.8122C4.79169 9.20498 5.41793 7.6918 6.55483 6.55489C7.69442 5.41799 9.20492 4.79175 10.8122 4.79175C12.4194 4.79175 13.9326 5.4153 15.0695 6.55489C16.2064 7.69449 16.8327 9.20498 16.8327 10.8122C16.8327 12.4195 16.2064 13.9327 15.0695 15.0696Z"
        fill="white"
      />
    </svg>
  );

  return (
    <nav className="mobile-nav">
      <div className="icon search-button">
        {searchSvg}
        <p>Search</p>
      </div>
    </nav>
  );
}

export default MobileNav;