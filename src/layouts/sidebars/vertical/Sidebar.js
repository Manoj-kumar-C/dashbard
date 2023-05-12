import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Home",
    href: "/ui/home",
    icon: "bi bi-house",
  },
  {
    title: "Music",
    href: "/ui/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Exercise",
    href: "/ui/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Hospitals",
    href: "/ui/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Food",
    href: "/ui/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Shop",
    href: "/ui/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Schemes",
    href: "/ui/tables",
    icon: "bi bi-layout-split",
  },
  {
    title: "Profile",
    href: "/ui/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Baby Monitoring",
    href: "/ui/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "Blog",
    href: "/ui/blog",
    icon: "bi bi-people",
  },
  {
    title: "Youtube",
    href: "/ui/youtube",
    icon: "bi bi-people",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  }

];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          <Button
            color="success"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://api.whatsapp.com/send?phone=+916381559549&amp;text=&amp;source=&amp;data="
          >
            Whatsapp 
          </Button>
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href=""
          >
            Ambulance Alert
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
