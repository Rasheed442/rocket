import React, { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Message,
} from "@arco-design/web-react";
import {
  IconHome,
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
} from "@arco-design/web-react/icon";
import "@arco-design/web-react/dist/css/arco.css";
import "../../styles/layout.css";
import Head from "./Head";
import Logo from "../assets/logo.png.svg";
import { useNavigate } from "react-router-dom";

const { Sider, Header, Footer, Content } = Layout;
const { Item: MenuItem, SubMenu } = Menu;

const BodyLayout = ({ children, active }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  console.log(
    "🚀 ~ file: BodyLayout.jsx:28 ~ BodyLayout ~ window.location.pathname:",
    window.location.pathname.toString().replace("/", "")
  );

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layout-collapse-demo">
      <Sider
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        breakpoint="xl"
      >
        <div className="logo">
          <img src={Logo} style={{ height: "100%", width: "100%" }} />
        </div>
        <Menu
          defaultOpenKeys={[window.location.pathname.replace("/", "")]}
          defaultSelectedKeys={[window.location.pathname.replace("/", "")]}
          // onClickMenuItem={(key) =>
          //   Message.info({
          //     content: `You select ${key}`,
          //     showIcon: true,
          //   })
          // }
          style={{ width: "100%", height: "100%" }}
        >
          <MenuItem key="dashboard" onClick={() => navigate("/dashboard")}>
            <svg
              width="30"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 7.09984V3.3165C18.3333 2.1415 17.8 1.6665 16.475 1.6665H13.1083C11.7833 1.6665 11.25 2.1415 11.25 3.3165V7.0915C11.25 8.27484 11.7833 8.7415 13.1083 8.7415H16.475C17.8 8.74984 18.3333 8.27484 18.3333 7.09984Z"
                fill="#464F60"
              />
              <path
                d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
                fill="#464F60"
              />
              <path
                d="M8.75008 7.09984V3.3165C8.75008 2.1415 8.21675 1.6665 6.89175 1.6665H3.52508C2.20008 1.6665 1.66675 2.1415 1.66675 3.3165V7.0915C1.66675 8.27484 2.20008 8.7415 3.52508 8.7415H6.89175C8.21675 8.74984 8.75008 8.27484 8.75008 7.09984Z"
                fill="#464F60"
              />
              <path
                d="M8.75008 16.475V13.1083C8.75008 11.7833 8.21675 11.25 6.89175 11.25H3.52508C2.20008 11.25 1.66675 11.7833 1.66675 13.1083V16.475C1.66675 17.8 2.20008 18.3333 3.52508 18.3333H6.89175C8.21675 18.3333 8.75008 17.8 8.75008 16.475Z"
                fill="#464F60"
              />
            </svg>
            Dashboard
          </MenuItem>
          <MenuItem key="agent" onClick={() => navigate("/agent")}>
            <svg
              width="30"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93283 5.94238C8.02775 5.94238 7.4959 4.42512 7.45033 3.75488C7.40408 3.07468 7.44718 1.56738 9.00245 1.56738C10.5573 1.56738 10.6008 3.07468 10.5546 3.75488C10.5076 4.44532 9.97714 5.94293 8.93283 5.94238Z"
                fill="#464F60"
              />
              <path
                d="M13.375 10.4642C13.3751 10.479 13.3722 10.4936 13.3666 10.5073C13.3609 10.521 13.3527 10.5334 13.3422 10.5439C13.3317 10.5543 13.3193 10.5626 13.3056 10.5682C13.292 10.5739 13.2773 10.5767 13.2625 10.5767H12.6688C12.6906 10.1267 12.6844 9.73292 12.6813 9.42979L12.6781 9.22042C12.6769 9.06284 12.6271 8.90949 12.5353 8.78138C12.4436 8.65327 12.3144 8.55666 12.1656 8.50479C11.7549 8.36423 11.3352 8.25148 10.9094 8.16729C9.64958 7.90896 8.35045 7.90896 7.09064 8.16729C6.66479 8.25148 6.24509 8.36423 5.83439 8.50479C5.68559 8.55666 5.55647 8.65327 5.46472 8.78138C5.37297 8.90949 5.32308 9.06284 5.32189 9.22042L5.31876 9.42979C5.31565 9.73292 5.30939 10.1267 5.33126 10.5767H4.73751C4.72272 10.5767 4.70806 10.5739 4.69439 10.5682C4.68071 10.5626 4.66828 10.5543 4.65782 10.5439C4.64736 10.5334 4.63908 10.521 4.63345 10.5073C4.62782 10.4936 4.62495 10.479 4.62501 10.4642C4.62397 10.0777 4.68517 9.69364 4.80626 9.32667C4.98541 8.78623 5.28824 8.29508 5.69064 7.89229C6.02779 7.55373 6.42863 7.28526 6.87004 7.10237C7.31146 6.91947 7.78471 6.82577 8.26251 6.82667H9.73751C10.5035 6.8264 11.25 7.06793 11.8706 7.51684C12.4912 7.96575 12.9543 8.59912 13.1938 9.32667C13.3149 9.69364 13.3761 10.0777 13.375 10.4642Z"
                fill="#464F60"
              />
              <path
                d="M13.0512 4.69238C12.1462 4.69238 11.6143 3.17512 11.5687 2.50488C11.5225 1.82468 11.5656 0.317383 13.1209 0.317383C14.6757 0.317383 14.7192 1.82468 14.673 2.50488C14.626 3.19532 14.0955 4.69293 13.0512 4.69238Z"
                fill="#464F60"
              />
              <path
                d="M17.497 9.21416C17.4971 9.22895 17.4942 9.24361 17.4886 9.25728C17.483 9.27096 17.4747 9.28339 17.4642 9.29385C17.4538 9.30431 17.4413 9.31259 17.4276 9.31822C17.414 9.32385 17.3993 9.32672 17.3845 9.32666H13.8439C13.6197 8.52026 13.1634 7.79759 12.5316 7.24862C11.8998 6.69964 11.1206 6.34859 10.2908 6.23917C10.903 5.80634 11.6348 5.5748 12.3845 5.57667H13.8595C14.3372 5.5766 14.8103 5.67064 15.2516 5.85341C15.693 6.03619 16.094 6.30412 16.4318 6.6419C16.7696 6.97969 17.0375 7.38071 17.2203 7.82206C17.4031 8.26342 17.4971 8.73645 17.497 9.21416Z"
                fill="#464F60"
              />
              <path
                d="M4.80978 4.69238C3.9047 4.69238 3.37285 3.17512 3.32728 2.50488C3.28103 1.82468 3.32413 0.317383 4.87941 0.317383C6.43427 0.317383 6.47778 1.82468 6.43152 2.50488C6.38457 3.19532 5.85409 4.69293 4.80978 4.69238Z"
                fill="#464F60"
              />
              <path
                d="M4.1563 9.32667H0.615675C0.600883 9.32673 0.586226 9.32387 0.572548 9.31824C0.55887 9.31261 0.546443 9.30432 0.535983 9.29386C0.525524 9.2834 0.51724 9.27098 0.511609 9.2573C0.505978 9.24362 0.503111 9.22896 0.503175 9.21417C0.50338 8.24951 0.886681 7.32442 1.5688 6.6423C2.25092 5.96018 3.17601 5.57688 4.14067 5.57667H5.61567C6.36544 5.5748 7.0972 5.80634 7.70942 6.23917C6.87964 6.34859 6.10035 6.69964 5.46858 7.24862C4.83681 7.7976 4.38044 8.52027 4.1563 9.32667Z"
                fill="#464F60"
              />
              <path
                d="M12.0531 9.22362C12.0528 9.1956 12.0439 9.16835 12.0277 9.14548C12.0115 9.1226 11.9888 9.10517 11.9625 9.09549C11.5779 8.96547 11.1855 8.86005 10.7875 8.77987C9.6081 8.53822 8.39193 8.53822 7.21252 8.77987C6.81456 8.86005 6.4221 8.96547 6.03752 9.09549C6.01123 9.10517 5.98848 9.1226 5.9723 9.14548C5.95612 9.16835 5.94726 9.1956 5.9469 9.22362C5.94377 9.54237 5.92815 10.0205 5.95315 10.5767C6.0219 12.008 6.3594 13.9611 7.88127 15.0486C8.2115 15.296 8.56905 15.5047 8.9469 15.6705C8.96355 15.6782 8.98168 15.6822 9.00002 15.6822C9.01837 15.6822 9.0365 15.6782 9.05315 15.6705C9.43099 15.5047 9.78854 15.296 10.1188 15.0486C11.6406 13.9611 11.9781 12.008 12.0469 10.5767C12.0719 10.0205 12.0563 9.54236 12.0531 9.22362ZM10.488 10.7936L8.80866 12.7705C8.77179 12.8147 8.72567 12.8502 8.67356 12.8745C8.62145 12.8989 8.56463 12.9115 8.50711 12.9115C8.44959 12.9115 8.39277 12.8989 8.34068 12.8745C8.28859 12.8501 8.24248 12.8145 8.20563 12.7704L7.51258 11.96C7.48591 11.9288 7.46564 11.8927 7.45293 11.8537C7.44022 11.8146 7.43532 11.7735 7.43851 11.7326C7.4417 11.6917 7.45291 11.6518 7.47151 11.6153C7.49011 11.5787 7.51573 11.5461 7.54691 11.5195C7.57809 11.4928 7.61422 11.4725 7.65323 11.4598C7.69224 11.4471 7.73338 11.4422 7.77428 11.4454C7.81519 11.4486 7.85507 11.4598 7.89164 11.4784C7.92821 11.497 7.96076 11.5226 7.98743 11.5538L8.50654 12.1608L10.012 10.3889C10.0656 10.3258 10.1422 10.2866 10.2248 10.2799C10.3073 10.2732 10.3892 10.2996 10.4523 10.3532C10.5155 10.4069 10.5547 10.4834 10.5614 10.566C10.5681 10.6486 10.5417 10.7305 10.488 10.7936Z"
                fill="#464F60"
              />
            </svg>
            Agent
          </MenuItem>
          <SubMenu
            key="2"
            title={
              <span>
                <svg
                  width="30"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="#464F60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1176 6.18653C14.1176 8.49869 12.4585 10.3731 10.4118 10.3731C8.36506 10.3731 6.70588 8.49869 6.70588 6.18653C6.70588 3.87437 8.36506 2 10.4118 2C12.4585 2 14.1176 3.87437 14.1176 6.18653Z"
                    fill="#464F60"
                  />
                  <path
                    d="M17.8235 16.6529C17.8235 19.1962 14.0503 18.3275 10.4118 18.3275C6.77318 18.3275 3 19.1962 3 16.6529C3 14.1095 6.77318 12.0477 10.4118 12.0477C14.0503 12.0477 17.8235 14.1095 17.8235 16.6529Z"
                    fill="#464F60"
                  />
                  <path
                    d="M14.1176 6.18653C14.1176 8.49869 12.4585 10.3731 10.4118 10.3731C8.36506 10.3731 6.70588 8.49869 6.70588 6.18653C6.70588 3.87437 8.36506 2 10.4118 2C12.4585 2 14.1176 3.87437 14.1176 6.18653Z"
                    stroke="white"
                    stroke-width="0.588235"
                  />
                  <path
                    d="M17.8235 16.6529C17.8235 19.1962 14.0503 18.3275 10.4118 18.3275C6.77318 18.3275 3 19.1962 3 16.6529C3 14.1095 6.77318 12.0477 10.4118 12.0477C14.0503 12.0477 17.8235 14.1095 17.8235 16.6529Z"
                    stroke="white"
                    stroke-width="0.588235"
                  />
                </svg>
                Manage_Customers
              </span>
            }
            // title='Navigation 2'
          >
            <MenuItem key="2_1" onClick={() => navigate("/customers")}>
              Customers
            </MenuItem>
            <MenuItem key="2_2" onClick={() => navigate("/actionrequired")}>
              Action Required
            </MenuItem>
            <MenuItem
              key="2_3"
              onClick={() => navigate("/incompleteregistration")}
            >
              Incomplete Registration
            </MenuItem>
          </SubMenu>

          <MenuItem key="0_4" onClick={() => navigate("/sendmoney")}>
            <svg
              width="30"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3072 5.69288L7.7071 10.2753L0.803747 7.97383C0.321882 7.81288 -0.00275487 7.36078 1.76209e-05 6.85287C0.00282659 6.34496 0.331184 5.89563 0.81491 5.7403L18.4644 0.0565164C18.8839 -0.0783506 19.3444 0.0323301 19.6561 0.34398C19.9677 0.655629 20.0784 1.11608 19.9435 1.53564L14.2597 19.1851C14.1044 19.6688 13.6551 19.9972 13.1472 20C12.6392 20.0028 12.1871 19.6781 12.0262 19.1963L9.71361 12.2595L14.3072 5.69288Z"
                fill="#464F60"
              />
            </svg>
            Send Money
          </MenuItem>
          <MenuItem key="0_4" onClick={() => navigate("/beneficiary")}>
            <svg
              width="30"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7647 6.31273C16.7647 8.41845 15.3162 10.1255 13.5294 10.1255C11.7426 10.1255 10.2941 8.41845 10.2941 6.31273C10.2941 4.20702 11.7426 2.5 13.5294 2.5C15.3162 2.5 16.7647 4.20702 16.7647 6.31273Z"
                fill="#464F60"
              />
              <path
                d="M20 15.8446C20 18.1609 16.706 17.3697 13.5294 17.3697C10.3529 17.3697 7.05884 18.1609 7.05884 15.8446C7.05884 13.5283 10.3529 11.6506 13.5294 11.6506C16.706 11.6506 20 13.5283 20 15.8446Z"
                fill="#464F60"
              />
              <path
                d="M11.9411 5.69819C11.9411 8.15486 10.282 10.1464 8.23525 10.1464C6.18855 10.1464 4.52937 8.15486 4.52937 5.69819C4.52937 3.24152 6.18855 1.25 8.23525 1.25C10.282 1.25 11.9411 3.24152 11.9411 5.69819Z"
                fill="#464F60"
              />
              <path
                d="M15.647 16.8187C15.647 19.521 11.8738 18.5979 8.23525 18.5979C4.59667 18.5979 0.823486 19.521 0.823486 16.8187C0.823486 14.1163 4.59667 11.9257 8.23525 11.9257C11.8738 11.9257 15.647 14.1163 15.647 16.8187Z"
                fill="#464F60"
              />
              <path
                d="M11.9411 5.69819C11.9411 8.15486 10.282 10.1464 8.23525 10.1464C6.18855 10.1464 4.52937 8.15486 4.52937 5.69819C4.52937 3.24152 6.18855 1.25 8.23525 1.25C10.282 1.25 11.9411 3.24152 11.9411 5.69819Z"
                stroke="white"
                stroke-width="0.588235"
              />
              <path
                d="M15.647 16.8187C15.647 19.521 11.8738 18.5979 8.23525 18.5979C4.59667 18.5979 0.823486 19.521 0.823486 16.8187C0.823486 14.1163 4.59667 11.9257 8.23525 11.9257C11.8738 11.9257 15.647 14.1163 15.647 16.8187Z"
                stroke="white"
                stroke-width="0.588235"
              />
            </svg>
            Beneficiary
          </MenuItem>

          <MenuItem>
            <svg
              width="30"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.61397 3.33363C6.67569 3.33312 6.73686 3.3502 6.794 3.3839C6.85113 3.41759 6.90309 3.46725 6.94691 3.53L9.76043 7.59278C9.80389 7.65605 9.83828 7.73109 9.86161 7.81359C9.88495 7.89609 9.89677 7.98443 9.89642 8.07354C9.89716 8.16158 9.88602 8.24898 9.86359 8.33085C9.82811 8.45558 9.76765 8.56216 9.68996 8.63696C9.61226 8.71175 9.52087 8.75135 9.4275 8.75067H8.02074V14.8448C8.02074 15.0244 7.97133 15.1967 7.88339 15.3236C7.79545 15.4506 7.67618 15.522 7.55182 15.522H5.67613C5.55177 15.522 5.4325 15.4506 5.34456 15.3236C5.25662 15.1967 5.20721 15.0244 5.20721 14.8448V8.75067H3.80045C3.70771 8.75011 3.61717 8.70985 3.54027 8.63499C3.46338 8.56012 3.40358 8.45401 3.36845 8.33008C3.33332 8.20614 3.32442 8.06994 3.34289 7.9387C3.36136 7.80747 3.40636 7.68709 3.47221 7.59278L6.28573 3.53C6.37307 3.40491 6.49096 3.33438 6.61397 3.33363Z"
                fill="#464F60"
              />
              <path
                d="M14.0122 16.4594C13.9505 16.46 13.8894 16.4416 13.8322 16.4053C13.7751 16.369 13.7231 16.3155 13.6793 16.2479L10.8658 11.8726C10.8223 11.8045 10.7879 11.7237 10.7646 11.6348C10.7413 11.546 10.7294 11.4508 10.7298 11.3549C10.7291 11.2601 10.7402 11.166 10.7626 11.0778C10.7981 10.9435 10.8586 10.8287 10.9363 10.7481C11.014 10.6676 11.1053 10.6249 11.1987 10.6257H12.6055V4.06271C12.6055 3.86931 12.6549 3.68383 12.7428 3.54708C12.8308 3.41032 12.95 3.3335 13.0744 3.3335L14.9501 3.3335C15.0745 3.3335 15.1937 3.41032 15.2817 3.54708C15.3696 3.68383 15.419 3.86931 15.419 4.06271V10.6257H16.8258C16.9185 10.6263 17.0091 10.6696 17.0859 10.7502C17.1628 10.8309 17.2226 10.9451 17.2578 11.0786C17.2929 11.2121 17.3018 11.3588 17.2833 11.5001C17.2649 11.6414 17.2199 11.7711 17.154 11.8726L14.3405 16.2479C14.2531 16.3826 14.1353 16.4586 14.0122 16.4594Z"
                fill="#464F60"
              />
            </svg>
            Update Rates & Fees
          </MenuItem>
          <SubMenu
            key="1"
            title={
              <span>
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4915 1.00349C5.40153 0.86349 1.23153 4.95349 1.23153 10.0035H0.581513C0.131513 10.0035 -0.268494 10.0035 0.231513 10.8535L1.88153 13.6535C2.08153 13.8535 2.39153 13.8535 2.59153 13.6535L4.09151 10.8535C4.16061 10.783 4.2073 10.6936 4.2257 10.5966C4.24409 10.4996 4.23336 10.3994 4.19486 10.3085C4.15636 10.2176 4.09182 10.1401 4.00936 10.0858C3.9269 10.0316 3.83023 10.0029 3.73151 10.0035H3.23153C3.23153 6.10349 6.41153 2.95349 10.3315 3.00349C14.0515 3.05349 17.1815 6.18349 17.2315 9.90349C17.2815 13.8135 14.1315 17.0035 10.2315 17.0035C8.62153 17.0035 7.13153 16.4535 5.95153 15.5235C5.76 15.3726 5.51968 15.2974 5.2763 15.3121C5.03292 15.3269 4.80344 15.4306 4.63153 15.6035C4.21153 16.0235 4.24153 16.7335 4.71153 17.0935C6.28266 18.336 8.2285 19.0092 10.2315 19.0035C15.2815 19.0035 19.3715 14.8335 19.2315 9.74349C19.1015 5.05349 15.1815 1.13349 10.4915 1.00349ZM9.98153 6.00349C9.57153 6.00349 9.23153 6.34349 9.23153 6.75349V10.4335C9.23153 10.7835 9.42153 11.1135 9.72153 11.2935L12.8415 13.1435C13.2015 13.3535 13.6615 13.2335 13.8715 12.8835C14.0815 12.5235 13.9615 12.0635 13.6115 11.8535L10.7315 10.1435V6.74349C10.7315 6.34349 10.3915 6.00349 9.98153 6.00349Z"
                    fill="#464F60"
                  />
                </svg>
                Transfers
              </span>
            }
          >
            <MenuItem key="1_1">Menu 1</MenuItem>
            <MenuItem key="1_2">Menu 2</MenuItem>
            <SubMenu key="2" title="Navigation 2">
              <MenuItem key="2_1">Menu 1</MenuItem>
              <MenuItem key="2_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="3" title="Navigation 3">
              <MenuItem key="3_1">Menu 1</MenuItem>
              <MenuItem key="3_2">Menu 2</MenuItem>
              <MenuItem key="3_3">Menu 3</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="4"
            title={
              <span>
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8125 7.00014C13.95 7.00014 13.25 7.65209 13.25 8.45537V18.5449C13.25 19.3482 13.95 20.0001 14.8125 20.0001H15.4375C16.3 20.0001 17 19.3482 17 18.5449V8.45537C17 7.65131 16.3 7.00014 15.4375 7.00014H14.8125ZM7.625 4.50015C7.625 3.69609 8.325 3.04492 9.1875 3.04492H9.8125C10.6758 3.04492 11.375 3.69686 11.375 4.50015V18.5449C11.375 19.3482 10.675 20.0001 9.8125 20.0001H9.1875C8.7731 20.0001 8.37567 19.8468 8.08264 19.5739C7.78962 19.301 7.625 18.9309 7.625 18.5449V4.50015ZM2 12.4554C2 11.6513 2.7 11.0001 3.5625 11.0001H4.1875C5.05083 11.0001 5.75 11.6521 5.75 12.4554V18.5449C5.75 19.3482 5.05 20.0001 4.1875 20.0001H3.5625C3.1481 20.0001 2.75067 19.8468 2.45765 19.5739C2.16462 19.301 2 18.9309 2 18.5449V12.4554Z"
                    fill="#464F60"
                  />
                </svg>
                Report
              </span>
            }
          >
            <MenuItem key="4_1">Menu 1</MenuItem>
            <MenuItem key="4_2">Menu 2</MenuItem>
            <MenuItem key="4_3">Menu 3</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 20 }}>
          <Head />
        </Header>
        <Layout style={{ padding: "0 24px", height: "100%" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content
            style={{ overflowY: "scroll", background: "none", width: "100%" }}
          >
            {children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BodyLayout;
