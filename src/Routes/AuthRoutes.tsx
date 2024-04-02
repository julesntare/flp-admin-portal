import ForgetPassword from "../Components/Pages/Others/Authentication/ForgetPassword";
import LoginSimple from "../Components/Pages/Others/Authentication/LoginSimple";
import LoginSweetAlert from "../Components/Pages/Others/Authentication/LoginSweetAlert";
import LoginWithBgImage from "../Components/Pages/Others/Authentication/LoginWithBgImage";
import LoginWithImageTwo from "../Components/Pages/Others/Authentication/LoginWithImageTwo";
import LoginWithTooltip from "../Components/Pages/Others/Authentication/LoginWithTooltip";
import LoginWithValidation from "../Components/Pages/Others/Authentication/LoginWithValidation";
import Maintenance from "../Components/Pages/Others/Authentication/Maintenance";
import RegisterSimple from "../Components/Pages/Others/Authentication/RegisterSimple";
import RegisterWithBgImage from "../Components/Pages/Others/Authentication/RegisterWithBgImage";
import RegisterWithImageTwo from "../Components/Pages/Others/Authentication/RegisterWithImageTwo";
import RegisterWizard from "../Components/Pages/Others/Authentication/RegisterWizard";
import ResetPassword from "../Components/Pages/Others/Authentication/ResetPassword";
import UnlockUser from "../Components/Pages/Others/Authentication/UnlockUser";
import ComingWithBgImage from "../Components/Pages/Others/ComingSoon/ComingWithBgImage";
import ComingWithBgVideo from "../Components/Pages/Others/ComingSoon/ComingWithBgVideo";
import SimpleComingSoon from "../Components/Pages/Others/ComingSoon/SimpleComingSoon";
import ErrorPage1 from "../Components/Pages/Others/ErrorPages/ErrorPage1";
import ErrorPage2 from "../Components/Pages/Others/ErrorPages/ErrorPage2";
import ErrorPage3 from "../Components/Pages/Others/ErrorPages/ErrorPage3";
import ErrorPage4 from "../Components/Pages/Others/ErrorPages/ErrorPage4";
import ErrorPage5 from "../Components/Pages/Others/ErrorPages/ErrorPage5";
import ErrorPage6 from "../Components/Pages/Others/ErrorPages/ErrorPage6";

export const authRoutes = [
    //coming soon pages
    { path: `${process.env.PUBLIC_URL}/coming-soon/coming-simple`, element: <SimpleComingSoon /> },
    { path: `${process.env.PUBLIC_URL}/coming-soon/coming-bg-img`, element: <ComingWithBgImage /> },
    { path: `${process.env.PUBLIC_URL}/coming-soon/coming-bg-video`, element: <ComingWithBgVideo /> },
    { path: `${process.env.PUBLIC_URL}/auth/login`, element: <LoginSimple /> },
    { path: `${process.env.PUBLIC_URL}/auth/login-bg-img`, element: <LoginWithBgImage /> },
    { path: `${process.env.PUBLIC_URL}/auth/login-bg-img2`, element: <LoginWithImageTwo /> },
    { path: `${process.env.PUBLIC_URL}/auth/login-bs-validation`, element: <LoginWithValidation /> },
    { path: `${process.env.PUBLIC_URL}/auth/login-bs-tooltip`, element: <LoginWithTooltip /> },
    { path: `${process.env.PUBLIC_URL}/auth/login-sa-validation`, element: <LoginSweetAlert /> },
    { path: `${process.env.PUBLIC_URL}/auth/sign-up`, element: <RegisterSimple /> },
    { path: `${process.env.PUBLIC_URL}/auth/sign-up-one`, element: <RegisterWithBgImage /> },
    { path: `${process.env.PUBLIC_URL}/auth/sign-up-two`, element: <RegisterWithImageTwo /> },
    { path: `${process.env.PUBLIC_URL}/auth/unlock`, element: <UnlockUser /> },
    { path: `${process.env.PUBLIC_URL}/auth/forget-password`, element: <ForgetPassword /> },
    { path: `${process.env.PUBLIC_URL}/auth/reset-password`, element: <ResetPassword /> },
    { path: `${process.env.PUBLIC_URL}/auth/maintenance`, element: <Maintenance /> },
    { path: `${process.env.PUBLIC_URL}/auth/sign-up-wizard`, element: <RegisterWizard /> },
    // Error Pages
    { path: `${process.env.PUBLIC_URL}/others/error-page-400`, element: <ErrorPage1 /> },
    { path: `${process.env.PUBLIC_URL}/others/error-page-401`, element: <ErrorPage2 /> },
    { path: `${process.env.PUBLIC_URL}/others/error-page-403`, element: <ErrorPage3 /> },
    { path: `${process.env.PUBLIC_URL}/others/error-page-404`, element: <ErrorPage4 /> },
    { path: `${process.env.PUBLIC_URL}/others/error-page-500`, element: <ErrorPage5 /> },
    { path: `${process.env.PUBLIC_URL}/others/error-page-503`, element: <ErrorPage6 /> },

]