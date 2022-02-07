const smartgrid = require('smart-grid');

smartgrid('./src/css', {
    mobileFirst: false,
    columns: 24,
    offset: "20px",
    outputStyle: "scss",
    container: {
        maxWidth: "1180px",
        fields: "20px",
    },
    breakPoints: {
        xlg: {
            width: "1919.98px",
            fields: "20px",
        },
        lg: {
            width: "1279.98px",
            fields: "20px",
        },
        md: {
            width: "991.98px",
            fields: "20px",
        },
        sm: {
            width: "767.98px",
            fields: "10px",
            offset: "10px",
        },
        xs: {
            width: "575.98px",
            fields: "10px",
            offset: "10px",
        }
    },
});