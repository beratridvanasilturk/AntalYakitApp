import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization : 'Bearer 9ar_tRZmuJjYFGetMvdWTmjOSj4Cjn4l_HHFn9LNu36GDRSw0REJu30L6BJcOAjkrSoBBs9NUftmcDnOQDe5m7Ynf8v2kIvK8WaUpAFjwoGoHPxzZYJU0dVFe6KTZXYx'
    },
});