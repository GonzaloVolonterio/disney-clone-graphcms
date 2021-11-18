"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Gonza\\Desktop\\disney-clone-graphcms\\components\\Card.js";

const Card = ({
  thumbnail
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    className: "card",
    src: thumbnail.url,
    alt: thumbnail.title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Image */ "next/Image");
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_disney_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/disney.png */ "./public/disney.png");

var _jsxFileName = "C:\\Users\\Gonza\\Desktop\\disney-clone-graphcms\\components\\NavBar.js";




const NavBar = ({
  account
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "navbar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "logo-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_disney_png__WEBPACK_IMPORTED_MODULE_3__.default,
          alt: "Disney Logo",
          width: 90,
          height: 50
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 32
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "account-info",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Welcome ", account.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "avatar",
        src: account.avatar.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");

var _jsxFileName = "C:\\Users\\Gonza\\Desktop\\disney-clone-graphcms\\components\\Section.js";


const Section = ({
  genre,
  videos
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "section",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: genre
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: videos.map(video => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: `/video/${video.slug}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
          thumbnail: video.thumbnail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Image */ "next/Image");
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _public_disney_button_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/disney-button.png */ "./public/disney-button.png");
/* harmony import */ var _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/marvel-button.png */ "./public/marvel-button.png");
/* harmony import */ var _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/natgeo-button.png */ "./public/natgeo-button.png");
/* harmony import */ var _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/star-wars-button.png */ "./public/star-wars-button.png");
/* harmony import */ var _public_pixar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/pixar.png */ "./public/pixar.png");


var _jsxFileName = "C:\\Users\\Gonza\\Desktop\\disney-clone-graphcms\\pages\\index.js";










const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    }
  });
  const videosQuery = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;
  const accountQuery = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query {
      account(where: { id: "ckw40nfug07540e90ur9oahom" }) {
        username
        avatar {
          url
        }
      }
    }
  `;
  const data = await graphQLClient.request(videosQuery);
  const videos = data.videos;
  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;
  return {
    props: {
      videos,
      account
    }
  };
};

const Home = ({
  videos,
  account
}) => {
  const randomVideo = videos => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const filterVideos = (videos, genre) => {
    return videos.filter(video => video.tags.includes(genre));
  };

  const unSeenVideos = videos => {
    return videos.filter(video => video.seen == false || video.seen == null);
  };

  console.log("not seen:", videos.filter(video => video.seen == false || video.seen == null));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__.default, {
      account: account
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "app",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "main-video",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: randomVideo(videos).thumbnail.url,
          alt: randomVideo(videos).title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "video-feed",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#disney",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "disney",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_disney_button_png__WEBPACK_IMPORTED_MODULE_6__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#pixar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "pixar",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_pixar_png__WEBPACK_IMPORTED_MODULE_10__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#star-wars",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "star-wars",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_9__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#nat-geo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "nat-geo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_8__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#marvel",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "marvel",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_7__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: "Recommended for you",
        videos: unSeenVideos(videos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: "Family",
        videos: filterVideos(videos, "family")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: "Thriller",
        videos: filterVideos(videos, "thriller")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: "Classic",
        videos: filterVideos(videos, "classic")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "pixar",
        genre: "Pixar",
        videos: filterVideos(videos, "pixar")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "marvel",
        genre: "Marvel",
        videos: filterVideos(videos, "thriller")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "nat-geo",
        genre: "National Geographic",
        videos: filterVideos(videos, "national-geographic")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "disney",
        genre: "Disney",
        videos: filterVideos(videos, "disney")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "star-wars",
        genre: "Star Wars",
        videos: filterVideos(videos, "star-wars")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./public/disney-button.png":
/*!**********************************!*\
  !*** ./public/disney-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/disney-button.bc19a795e61a418413a024cd9767f0ed.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdisney-button.bc19a795e61a418413a024cd9767f0ed.png&w=8&q=70"});

/***/ }),

/***/ "./public/disney.png":
/*!***************************!*\
  !*** ./public/disney.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/disney.70ae28de30bb96b5352336f0ed806064.png","height":522,"width":900,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdisney.70ae28de30bb96b5352336f0ed806064.png&w=8&q=70"});

/***/ }),

/***/ "./public/marvel-button.png":
/*!**********************************!*\
  !*** ./public/marvel-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/marvel-button.f2159ecf9fdb61e750754ce5a3e460b7.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmarvel-button.f2159ecf9fdb61e750754ce5a3e460b7.png&w=8&q=70"});

/***/ }),

/***/ "./public/natgeo-button.png":
/*!**********************************!*\
  !*** ./public/natgeo-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/natgeo-button.f92899572d42ba111727f9021d88e0ba.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fnatgeo-button.f92899572d42ba111727f9021d88e0ba.png&w=8&q=70"});

/***/ }),

/***/ "./public/pixar.png":
/*!**************************!*\
  !*** ./public/pixar.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/pixar.7e1aa55f59dca864204b6cf83757a4b4.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fpixar.7e1aa55f59dca864204b6cf83757a4b4.png&w=8&q=70"});

/***/ }),

/***/ "./public/star-wars-button.png":
/*!*************************************!*\
  !*** ./public/star-wars-button.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/star-wars-button.92957ee48a32d4683647e02c06230b6b.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstar-wars-button.92957ee48a32d4683647e02c06230b6b.png&w=8&q=70"});

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "next/Image":
/*!*****************************!*\
  !*** external "next/Image" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/Image");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsUUFBVDtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRERixlQTJERSw4REFBQyx3REFBRDtBQUNFLFVBQUUsRUFBQyxXQURMO0FBRUUsYUFBSyxFQUFFLFdBRlQ7QUFHRSxjQUFNLEVBQUVnQyxZQUFZLENBQUNoQyxNQUFELEVBQVMsV0FBVDtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxrQkFERjtBQXNFRCxDQXhGRDs7QUEwRkEsaUVBQWUwQixJQUFmOzs7Ozs7Ozs7Ozs7OztBQ3pKQSxpRUFBZSxDQUFDLGtQQUFrUDs7Ozs7Ozs7Ozs7Ozs7QUNBbFEsaUVBQWUsQ0FBQyxtT0FBbU87Ozs7Ozs7Ozs7Ozs7O0FDQW5QLGlFQUFlLENBQUMsa1BBQWtQOzs7Ozs7Ozs7Ozs7OztBQ0FsUSxpRUFBZSxDQUFDLGtQQUFrUDs7Ozs7Ozs7Ozs7Ozs7QUNBbFEsaUVBQWUsQ0FBQyxrT0FBa087Ozs7Ozs7Ozs7Ozs7O0FDQWxQLGlFQUFlLENBQUMsd1BBQXdQOzs7Ozs7Ozs7O0FDQXhROzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLWdyYXBoY21zLy4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL2Rpc25leS1jbG9uZS1ncmFwaGNtcy8uL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovL2Rpc25leS1jbG9uZS1ncmFwaGNtcy8uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUtZ3JhcGhjbXMvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUtZ3JhcGhjbXMvLi9wdWJsaWMvZGlzbmV5LWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLWdyYXBoY21zLy4vcHVibGljL2Rpc25leS5wbmciLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLWdyYXBoY21zLy4vcHVibGljL21hcnZlbC1idXR0b24ucG5nIiwid2VicGFjazovL2Rpc25leS1jbG9uZS1ncmFwaGNtcy8uL3B1YmxpYy9uYXRnZW8tYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUtZ3JhcGhjbXMvLi9wdWJsaWMvcGl4YXIucG5nIiwid2VicGFjazovL2Rpc25leS1jbG9uZS1ncmFwaGNtcy8uL3B1YmxpYy9zdGFyLXdhcnMtYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUtZ3JhcGhjbXMvZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIiIsIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUtZ3JhcGhjbXMvZXh0ZXJuYWwgXCJuZXh0L0ltYWdlXCIiLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLWdyYXBoY21zL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLWdyYXBoY21zL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2FyZCA9ICh7IHRodW1ibmFpbCB9KSA9PiB7XG4gICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiY2FyZFwiIHNyYz17dGh1bWJuYWlsLnVybH0gYWx0PXt0aHVtYm5haWwudGl0bGV9Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZCIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L0ltYWdlJ1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vcHVibGljL2Rpc25leS5wbmcnXG5cbmNvbnN0IE5hdkJhciA9ICh7YWNjb3VudH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxJbWFnZSBzcmM9e2xvZ299IGFsdD1cIkRpc25leSBMb2dvXCIgd2lkdGg9ezkwfSBoZWlnaHQ9ezUwfS8+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPHA+V2VsY29tZSB7YWNjb3VudC51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e2FjY291bnQuYXZhdGFyLnVybH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xuXG5jb25zdCBTZWN0aW9uID0gKHtnZW5yZSwgdmlkZW9zIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz57Z2VucmV9PC9oMz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3ZpZGVvcy5tYXAodmlkZW8gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e3ZpZGVvLmlkfSBocmVmPXtgL3ZpZGVvLyR7dmlkZW8uc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHRodW1ibmFpbD17dmlkZW8udGh1bWJuYWlsfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iLCJpbXBvcnQgeyBncWwsIEdyYXBoUUxDbGllbnQgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvSW1hZ2VcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgZGlzbmV5TG9nbyBmcm9tIFwiLi4vcHVibGljL2Rpc25leS1idXR0b24ucG5nXCI7XG5pbXBvcnQgbWFydmVsTG9nbyBmcm9tIFwiLi4vcHVibGljL21hcnZlbC1idXR0b24ucG5nXCI7XG5pbXBvcnQgbmF0Z2VvTG9nbyBmcm9tIFwiLi4vcHVibGljL25hdGdlby1idXR0b24ucG5nXCI7XG5pbXBvcnQgc3RhcndhcnNMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3Rhci13YXJzLWJ1dHRvbi5wbmdcIjtcbmltcG9ydCBwaXhhckxvZ28gZnJvbSBcIi4uL3B1YmxpYy9waXhhci5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVDtcbiAgY29uc3QgZ3JhcGhRTENsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHVybCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HUkFQSF9DTVNfVE9LRU59YCxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB2aWRlb3NRdWVyeSA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICB2aWRlb3Mge1xuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgc2VlblxuICAgICAgICBzbHVnXG4gICAgICAgIHRhZ3NcbiAgICAgICAgdGh1bWJuYWlsIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBtcDQge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IGFjY291bnRRdWVyeSA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICBhY2NvdW50KHdoZXJlOiB7IGlkOiBcImNrdzQwbmZ1ZzA3NTQwZTkwdXI5b2Fob21cIiB9KSB7XG4gICAgICAgIHVzZXJuYW1lXG4gICAgICAgIGF2YXRhciB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdCh2aWRlb3NRdWVyeSk7XG4gIGNvbnN0IHZpZGVvcyA9IGRhdGEudmlkZW9zO1xuICBjb25zdCBhY2NvdW50RGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdChhY2NvdW50UXVlcnkpO1xuICBjb25zdCBhY2NvdW50ID0gYWNjb3VudERhdGEuYWNjb3VudDtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aWRlb3MsXG4gICAgICBhY2NvdW50LFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBIb21lID0gKHsgdmlkZW9zLCBhY2NvdW50IH0pID0+IHtcbiAgY29uc3QgcmFuZG9tVmlkZW8gPSAodmlkZW9zKSA9PiB7XG4gICAgcmV0dXJuIHZpZGVvc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2aWRlb3MubGVuZ3RoKV07XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyVmlkZW9zID0gKHZpZGVvcywgZ2VucmUpID0+IHtcbiAgICByZXR1cm4gdmlkZW9zLmZpbHRlcigodmlkZW8pID0+IHZpZGVvLnRhZ3MuaW5jbHVkZXMoZ2VucmUpKTtcbiAgfTtcblxuICBjb25zdCB1blNlZW5WaWRlb3MgPSAodmlkZW9zKSA9PiB7XG4gICAgcmV0dXJuIHZpZGVvcy5maWx0ZXIoKHZpZGVvKSA9PiB2aWRlby5zZWVuID09IGZhbHNlIHx8IHZpZGVvLnNlZW4gPT0gbnVsbCk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXG4gICAgXCJub3Qgc2VlbjpcIixcbiAgICB2aWRlb3MuZmlsdGVyKCh2aWRlbykgPT4gdmlkZW8uc2VlbiA9PSBmYWxzZSB8fCB2aWRlby5zZWVuID09IG51bGwpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXZpZGVvJz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3JhbmRvbVZpZGVvKHZpZGVvcykudGh1bWJuYWlsLnVybH1cbiAgICAgICAgICAgIGFsdD17cmFuZG9tVmlkZW8odmlkZW9zKS50aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tZmVlZCc+XG4gICAgICAgICAgPExpbmsgaHJlZj0nI2Rpc25leSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJhbmNoaXNlJyBpZD0nZGlzbmV5Jz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZGlzbmV5TG9nb30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScjcGl4YXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZyYW5jaGlzZScgaWQ9J3BpeGFyJz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cGl4YXJMb2dvfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9JyNzdGFyLXdhcnMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZyYW5jaGlzZScgaWQ9J3N0YXItd2Fycyc+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N0YXJ3YXJzTG9nb30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScjbmF0LWdlbyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJhbmNoaXNlJyBpZD0nbmF0LWdlbyc+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e25hdGdlb0xvZ299IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nI21hcnZlbCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJhbmNoaXNlJyBpZD0nbWFydmVsJz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bWFydmVsTG9nb30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWN0aW9uIGdlbnJlPXtcIlJlY29tbWVuZGVkIGZvciB5b3VcIn0gdmlkZW9zPXt1blNlZW5WaWRlb3ModmlkZW9zKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9e1wiRmFtaWx5XCJ9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgXCJmYW1pbHlcIil9IC8+XG4gICAgICAgIDxTZWN0aW9uIGdlbnJlPXtcIlRocmlsbGVyXCJ9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgXCJ0aHJpbGxlclwiKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9e1wiQ2xhc3NpY1wifSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsIFwiY2xhc3NpY1wiKX0gLz5cbiAgICAgICAgPFNlY3Rpb25cbiAgICAgICAgICBpZD0ncGl4YXInXG4gICAgICAgICAgZ2VucmU9e1wiUGl4YXJcIn1cbiAgICAgICAgICB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsIFwicGl4YXJcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWN0aW9uXG4gICAgICAgICAgaWQ9J21hcnZlbCdcbiAgICAgICAgICBnZW5yZT17XCJNYXJ2ZWxcIn1cbiAgICAgICAgICB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsIFwidGhyaWxsZXJcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWN0aW9uXG4gICAgICAgICAgaWQ9J25hdC1nZW8nXG4gICAgICAgICAgZ2VucmU9e1wiTmF0aW9uYWwgR2VvZ3JhcGhpY1wifVxuICAgICAgICAgIHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgXCJuYXRpb25hbC1nZW9ncmFwaGljXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8U2VjdGlvblxuICAgICAgICAgIGlkPSdkaXNuZXknXG4gICAgICAgICAgZ2VucmU9e1wiRGlzbmV5XCJ9XG4gICAgICAgICAgdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCBcImRpc25leVwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlY3Rpb25cbiAgICAgICAgICBpZD0nc3Rhci13YXJzJ1xuICAgICAgICAgIGdlbnJlPXtcIlN0YXIgV2Fyc1wifVxuICAgICAgICAgIHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgXCJzdGFyLXdhcnNcIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Rpc25leS1idXR0b24uYmMxOWE3OTVlNjFhNDE4NDEzYTAyNGNkOTc2N2YwZWQucG5nXCIsXCJoZWlnaHRcIjo3MjAsXCJ3aWR0aFwiOjEyODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGZGlzbmV5LWJ1dHRvbi5iYzE5YTc5NWU2MWE0MTg0MTNhMDI0Y2Q5NzY3ZjBlZC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9kaXNuZXkuNzBhZTI4ZGUzMGJiOTZiNTM1MjMzNmYwZWQ4MDYwNjQucG5nXCIsXCJoZWlnaHRcIjo1MjIsXCJ3aWR0aFwiOjkwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZkaXNuZXkuNzBhZTI4ZGUzMGJiOTZiNTM1MjMzNmYwZWQ4MDYwNjQucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvbWFydmVsLWJ1dHRvbi5mMjE1OWVjZjlmZGI2MWU3NTA3NTRjZTVhM2U0NjBiNy5wbmdcIixcImhlaWdodFwiOjcyMCxcIndpZHRoXCI6MTI4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZtYXJ2ZWwtYnV0dG9uLmYyMTU5ZWNmOWZkYjYxZTc1MDc1NGNlNWEzZTQ2MGI3LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL25hdGdlby1idXR0b24uZjkyODk5NTcyZDQyYmExMTE3MjdmOTAyMWQ4OGUwYmEucG5nXCIsXCJoZWlnaHRcIjo3MjAsXCJ3aWR0aFwiOjEyODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGbmF0Z2VvLWJ1dHRvbi5mOTI4OTk1NzJkNDJiYTExMTcyN2Y5MDIxZDg4ZTBiYS5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9waXhhci43ZTFhYTU1ZjU5ZGNhODY0MjA0YjZjZjgzNzU3YTRiNC5wbmdcIixcImhlaWdodFwiOjcyMCxcIndpZHRoXCI6MTI4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZwaXhhci43ZTFhYTU1ZjU5ZGNhODY0MjA0YjZjZjgzNzU3YTRiNC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9zdGFyLXdhcnMtYnV0dG9uLjkyOTU3ZWU0OGEzMmQ0NjgzNjQ3ZTAyYzA2MjMwYjZiLnBuZ1wiLFwiaGVpZ2h0XCI6NzIwLFwid2lkdGhcIjoxMjgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRnN0YXItd2Fycy1idXR0b24uOTI5NTdlZTQ4YTMyZDQ2ODM2NDdlMDJjMDYyMzBiNmIucG5nJnc9OCZxPTcwXCJ9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkNhcmQiLCJ0aHVtYm5haWwiLCJ1cmwiLCJ0aXRsZSIsIkxpbmsiLCJJbWFnZSIsImxvZ28iLCJOYXZCYXIiLCJhY2NvdW50IiwidXNlcm5hbWUiLCJhdmF0YXIiLCJTZWN0aW9uIiwiZ2VucmUiLCJ2aWRlb3MiLCJtYXAiLCJ2aWRlbyIsInNsdWciLCJpZCIsImdxbCIsIkdyYXBoUUxDbGllbnQiLCJkaXNuZXlMb2dvIiwibWFydmVsTG9nbyIsIm5hdGdlb0xvZ28iLCJzdGFyd2Fyc0xvZ28iLCJwaXhhckxvZ28iLCJnZXRTdGF0aWNQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJFTkRQT0lOVCIsImdyYXBoUUxDbGllbnQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkdSQVBIX0NNU19UT0tFTiIsInZpZGVvc1F1ZXJ5IiwiYWNjb3VudFF1ZXJ5IiwiZGF0YSIsInJlcXVlc3QiLCJhY2NvdW50RGF0YSIsInByb3BzIiwiSG9tZSIsInJhbmRvbVZpZGVvIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZmlsdGVyVmlkZW9zIiwiZmlsdGVyIiwidGFncyIsImluY2x1ZGVzIiwidW5TZWVuVmlkZW9zIiwic2VlbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9