import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={s.brandContainer}></div>
          </div>
          <div className="col-md-12">
            <div className={s.socialWrapper}>
              <span>Follow Us</span>
            </div>
          </div>
          <div className="col-md-12 align-center">
            <Link href="#">
              <a className={s.links}>Menu 1</a>
            </Link>
            <Link href="#">
              <a className={s.links}>Menu 1</a>
            </Link>
          </div>
        </div>
        <p className={s.copyright}>Copyright ©ABC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
