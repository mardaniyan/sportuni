"use strict";
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelectorAll(".fixed-slider .caption").forEach((caption)=>{
                caption.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
                caption.style.opacity = 1 - scrolled / 600;
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);


/***/ }),

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelector(".swiper-pagination")) {
        document.querySelector(".swiper-pagination").innerHTML = document.querySelector(".swiper-pagination").innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 2206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_us1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"wp":"/img/intro/1.jpg","Lx":"/img/intro/3.jpg","_g":"/img/intro/2.jpg","bH":"About Us","TN":{"P":"We are more than just","E":"a Univercity"},"kQ":"The Sports University was established in 2010 to improve the performance of athletes, and the mission of this group is to promote and grow students in various fields.","R2":[{"id":1,"icon":"gleam","name":{"first":"Preparation","second":"Practice"},"wowDelay":".3s"},{"id":2,"icon":"gym","name":{"first":"professional","second":"tournament"},"wowDelay":".5s"},{"id":3,"icon":"medal","name":{"first":"a valid","second":"Certification"},"wowDelay":".8s"}]}');
;// CONCATENATED MODULE: ./src/components/About-us1/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const AboutUs1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "about section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-mons",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-5 cmd-padding valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img1 wow imago",
                                            "data-wow-delay": ".5s",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: about_us1_namespaceObject.wp,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-7 cmd-padding",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img2 wow imago",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us1_namespaceObject.Lx,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img3 wow imago",
                                                "data-wow-delay": ".8s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us1_namespaceObject._g,
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: about_us1_namespaceObject.bH
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: "words chars splitting main-title wow",
                                        "data-splitting": true,
                                        children: [
                                            about_us1_namespaceObject.TN.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            }),
                                            " ",
                                            about_us1_namespaceObject.TN.E
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "words chars splitting wow txt",
                                        "data-splitting": true,
                                        children: about_us1_namespaceObject.kQ
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ftbox mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: about_us1_namespaceObject.R2.map((feature)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `wow fadeIn ${feature.id == 2 ? "space" : ""}`,
                                                "data-wow-delay": feature.wowDelay,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `icon color-font pe-7s-${feature.icon}`
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                        className: "custom-font",
                                                        children: [
                                                            feature.name.first,
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                            }),
                                                            " ",
                                                            feature.name.second
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "dots",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, feature.id)
                                        )
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About_us1 = (AboutUs1);


/***/ }),

/***/ 6275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);






const BlogsTwoColumnSlider = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog-curs section-padding sub-bg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sec-head custom-font text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "wow fadeIn",
                            "data-wow-delay": ".5s",
                            children: "Latest News"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "wow",
                            "data-splitting": true,
                            children: "Our Blogs."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "tbg",
                            children: "Blogs"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "blg-swipe wow fadeInUp",
                            "data-wow-delay": ".5s",
                            dots: false,
                            infinite: true,
                            arrows: false,
                            autoplay: true,
                            slidesToScroll: 1,
                            slidesToShow: 2,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 2
                                    }
                                },
                                {
                                    breakpoint: 991,
                                    settings: {
                                        slidesToShow: 1
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1
                                    }
                                }, 
                            ],
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item-box",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bimg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img bg-img",
                                                    style: {
                                                        backgroundImage: "url(/img/blog/1.jpg)"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cont valign",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "full-width",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info custom-font",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "#0",
                                                                    className: "author",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "by / Admin"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "date",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    children: "06"
                                                                                }),
                                                                                " Aug"
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "How to have a healthy diet in the club?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "btn-more custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "simple-btn",
                                                                    children: "Read More"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item-box",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bimg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img bg-img",
                                                    style: {
                                                        backgroundImage: "url(/img/blog/2.jpg)"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cont valign",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "full-width",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info custom-font",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "#0",
                                                                    className: "author",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "by / Admin"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "date",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    children: "08"
                                                                                }),
                                                                                " Aug"
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "What could be the cause of a heart attack while training at the gym?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "btn-more custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "simple-btn",
                                                                    children: "Read More"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item-box",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bimg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img bg-img",
                                                    style: {
                                                        backgroundImage: "url(/img/blog/3.jpg)"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cont valign",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "full-width",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info custom-font",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "#0",
                                                                    className: "author",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "by / Admin"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "date",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    children: "07"
                                                                                }),
                                                                                " Aug"
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "Prepare your diet this way"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "btn-more custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "simple-btn",
                                                                    children: "Read More"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item-box",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bimg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img bg-img",
                                                    style: {
                                                        backgroundImage: "url(/img/blog/4.jpg)"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cont valign",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "full-width",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info custom-font",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "#0",
                                                                    className: "author",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "by / Admin"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "date",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    children: "10"
                                                                                }),
                                                                                " Aug"
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "Rock climbing competitions were held in Argentina"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "btn-more custom-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "simple-btn",
                                                                    children: "Read More"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogsTwoColumnSlider);


/***/ }),

/***/ 1098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5754);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8636);
/* harmony import */ var _common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6802);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay
]);
const IntroWithSlider1 = ({ sliderRef  })=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        setTimeout(()=>{
            setLoad(false);
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        ref: sliderRef,
        className: "slider slider-prlx fixed-slider text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 1000,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: true
                    },
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-7 col-md-9",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "caption center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "words chars splitting",
                                                            children: typeof slide.title === "object" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    slide.title.first,
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                    }),
                                                                    slide.title.second
                                                                ]
                                                            }) : slide.title
                                                        })
                                                    }),
                                                    (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: slide.content
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                        href: "/about/about-dark",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "btn-curve btn-lit mt-30",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Look More"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id));
                    })
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone setwo",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: paginationRef,
                    className: "swiper-pagination top botm custom-font"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "social-icon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-twitter"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-behance"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-pinterest-p"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithSlider1);

});

/***/ }),

/***/ 4412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Numbers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/data/sections/numbers1.json
const numbers1_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","txt":"Happy student","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","txt":"graduates","value":"133"},{"id":3,"icon":"pe-7s-cloud-download","txt":"Online courses","value":"254"},{"id":4,"icon":"pe-7s-medal","txt":"Award Win","value":"46"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Numbers/index.jsx






const Numbers1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "number-sec section-padding sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: numbers1_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `item ${item.id == 1 ? "no-bord" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `icon ${item.icon}`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "custom-font",
                                    children: [
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            redraw: true,
                                            end: item.value,
                                            duration: "3",
                                            children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                                    onChange: start,
                                                    delayedCall: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "count",
                                                                ref: countUpRef
                                                            }),
                                                            " ",
                                                            item.id == 3 ? "K" : ""
                                                        ]
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: item.txt
                                    })
                                })
                            ]
                        })
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const Numbers = (Numbers1);


/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);




const Services1 = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "Our best service"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Services."
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "tbg",
                                children: "Services"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box bg-img wow fadeInLeft",
                                "data-wow-delay": ".3s",
                                style: {
                                    backgroundImage: "url(/img/1.jpg)"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "custom-font",
                                        children: [
                                            "Best Of ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            }),
                                            " Our Features"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "btn-curve btn-bord btn-lit mt-40",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "See All Services"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon pe-7s-map-2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Dedicated land"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "As far as possible, exclusive ground is available for each sport"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".7s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon pe-7s-users"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                        children: [
                                            "Experienced coaches & ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            }),
                                            "Professors"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "University with a high level of technical knowledge to upgrade"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".9s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon pe-7s-settings"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                        children: [
                                            "The latest system  ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            }),
                                            " equipment"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "All the equipment used is provided by well-known companies"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "half-bg bottom"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services1);


/***/ }),

/***/ 5745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_works1Slider_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9590);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




// import Swiper core and required modules





swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
]);
const Works1Slider = ()=>{
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "work-carousel section-padding pt-0 metro position-re",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container ontop",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12 no-padding",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "swiper-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                className: "swiper-wrapper",
                                slidesPerView: 2,
                                centeredSlides: true,
                                loop: true,
                                navigation: {
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current
                                },
                                onBeforeInit: (swiper)=>{
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                },
                                onSwiper: (swiper)=>{
                                    setTimeout(()=>{
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                        swiper.navigation.destroy();
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                },
                                autoplay: {
                                    delay: 2500,
                                    disableOnInteraction: false
                                },
                                speed: 1000,
                                breakpoints: {
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    },
                                    767: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                        centeredSlides: false
                                    },
                                    991: {
                                        slidesPerView: 2
                                    }
                                },
                                children: _data_sections_works1Slider_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "content wow noraidus fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item-img bg-img wow imago",
                                                    style: {
                                                        backgroundImage: `url(${slide.image})`
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "color-font",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                href: "/works/works-dark",
                                                                children: slide.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                href: "/project-details2/project-details2-dark",
                                                                children: slide.secTex
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, slide.id)
                                )
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: navigationNextRef,
                                className: "swiper-button-next swiper-nav-ctrl simp-next cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "simple-btn right",
                                    children: "Next"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: navigationPrevRef,
                                className: "swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "simple-btn",
                                    children: "Prev"
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works1Slider);

});

/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @next/next/no-css-tags */ 

const DarkTheme = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/dark.css"
                })
            }),
            children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);


/***/ }),

/***/ 3507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_About_us1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2206);
/* harmony import */ var _components_Blogs_two_column_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6275);
/* harmony import */ var _components_Call_to_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
/* harmony import */ var _components_Clients1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6224);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1690);
/* harmony import */ var _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1098);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/* harmony import */ var _components_Numbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4412);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5715);
/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5222);
/* harmony import */ var _components_Video_with_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3205);
/* harmony import */ var _components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5745);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2532);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















const Homepage1 = ()=>{
    const fixedSlider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedSlider.current) {
                var slidHeight = fixedSlider.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        fixedSlider,
        MainContent,
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                sliderRef: fixedSlider
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Numbers__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Video_with_testimonials__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skills_circle__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        theme: "dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Clients1__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        theme: "dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blogs_two_column_slider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Call_to_action__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        subBG: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage1);

});

/***/ }),

/***/ 5754:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Sports","second":"Univercity"},"content":"The Sports University was established in 2010 to improve the performance of athletes, and the mission of this group is to promote and grow students in various fields.","image":"/img/slid/01.jpg"},{"id":2,"title":{"first":"Present","second":"Certificate of validity"},"content":"The Sports University was established in 2010 to improve the performance of athletes, and the mission of this group is to promote and grow students in various fields.","image":"/img/slid/03.jpg"},{"id":3,"title":"Original Updated equipment","content":"The Sports University was established in 2010 to improve the performance of athletes, and the mission of this group is to promote and grow students in various fields.","image":"/img/slid/02.jpg"}]');

/***/ }),

/***/ 9590:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Tennis Tournament","secTex":"International Tennis Tournament","image":"/img/portfolio/metro/01.jpg","slug":"/project-details2/project-details2-dark"},{"id":2,"title":"Fencing Tournament","secTex":"International Fencing Tournament","image":"/img/portfolio/metro/02.jpg","slug":"/project-details2/project-details2-dark"},{"id":3,"title":"Karate Tournament","secTex":"International Karate Tournament","image":"/img/portfolio/metro/03.jpg","slug":"/project-details2/project-details2-dark"},{"id":4,"title":"FIFA World Cup 2020","secTex":"International football matches","image":"/img/portfolio/metro/04.jpg","slug":"/project-details2/project-details2-dark"},{"id":5,"title":"Rock Climbing","secTex":"International Rock Climbing Competition","image":"/img/portfolio/metro/05.jpg","slug":"/project-details2/project-details2-dark"}]');

/***/ })

};
;