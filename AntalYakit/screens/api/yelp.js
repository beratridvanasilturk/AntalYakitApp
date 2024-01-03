import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization : "Bearer oAGnxK58_dlRZ0pl_6eWVrnrVlzSvXFZC78_o2EeLfSwHgRmnF3qSk1oiUrqCMO6ySGNaF_Z5IRdngGm94sP8IFA67Mv2k0_KznabZgP9IwCAzzU3JTTnigA2muVZXYx",
    },
});