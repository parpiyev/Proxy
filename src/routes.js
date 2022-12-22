const ROUTES = [
    {
        url: '/sample',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:3000/sample",
            changeOrigin: true,
            pathRewrite: {
                [`^/sample`]: '',
            },
        }
    },
    {
        url: '/ceo',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3001/ceo",
            changeOrigin: true,
            pathRewrite: {
                [`^/ceo`]: '',
            },
        }
    },
    {
        url: '/company',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3002/company",
            changeOrigin: true,
            pathRewrite: {
                [`^/company`]: '',
            },
        }
    },
    {
        url: '/employee',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3003/employee",
            changeOrigin: true,
            pathRewrite: {
                [`^/employee`]: '',
            },
        }
    },
    {
        url: '/client',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3004/client",
            changeOrigin: true,
            pathRewrite: {
                [`^/client`]: '',
            },
        }
    },
    {
        url: '/load',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3005/load",
            changeOrigin: true,
            pathRewrite: {
                [`^/load`]: '',
            },
        }
    },
    {
        url: '/product',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3006/product",
            changeOrigin: true,
            pathRewrite: {
                [`^/product`]: '',
            },
        }
    },
    {
        url: '/market',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3007/market",
            changeOrigin: true,
            pathRewrite: {
                [`^/market`]: '',
            },
        }
    },
    {
        url: '/daily-work',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3008/daily-work",
            changeOrigin: true,
            pathRewrite: {
                [`^/daily-work`]: '',
            },
        }
    },
    {
        url: '/expense',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3009/expense",
            changeOrigin: true,
            pathRewrite: {
                [`^/expense`]: '',
            },
        }
    },
    {
        url: '/salary',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3010/salary",
            changeOrigin: true,
            pathRewrite: {
                [`^/salary`]: '',
            },
        }
    },
    {
        url: '/paid-wages',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3006/paid-wages",
            changeOrigin: true,
            pathRewrite: {
                [`^/paid-wages`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;