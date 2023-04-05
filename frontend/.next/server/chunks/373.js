"use strict";
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 29556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2766);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50050);


const link = (0,apollo_link_error__WEBPACK_IMPORTED_MODULE_0__/* .onError */ .qQ)(({ graphQLErrors , networkError  })=>{
    if (graphQLErrors) graphQLErrors.forEach(({ message , locations , path  })=>console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError) console.log(`[Network error]: ${networkError}`);
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([
        new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({
            uri: "http://localhost:8000/graphql/"
        })
    ])
});


/***/ }),

/***/ 18479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sM": () => (/* binding */ FetchProductDocument)
/* harmony export */ });
/* unused harmony exports DupaDocument, useDupaQuery, useDupaLazyQuery, useFetchProductQuery, useFetchProductLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2766);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const DupaDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query dupa {
  __typename
}
    `;
/**
 * __useDupaQuery__
 *
 * To run a query within a React component, call `useDupaQuery` and pass it any options that fit your needs.
 * When your component renders, `useDupaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDupaQuery({
 *   variables: {
 *   },
 * });
 */ function useDupaQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(DupaDocument, options);
}
function useDupaLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(DupaDocument, options);
}
const FetchProductDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query FetchProduct($id: ID) {
  product(id: $id, channel: "default-channel") {
    id
    name
    description
    isAvailable(address: {country: PL})
    category {
      name
    }
    media {
      id
      alt
      url
    }
    pricing(address: {country: PL}) {
      priceRange {
        start {
          currency
          gross {
            amount
          }
        }
      }
    }
  }
}
    `;
/**
 * __useFetchProductQuery__
 *
 * To run a query within a React component, call `useFetchProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */ function useFetchProductQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(FetchProductDocument, options);
}
function useFetchProductLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(FetchProductDocument, options);
}


/***/ })

};
;