"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { linkItem } from "../styles/components/FloatingNav.css";

type NavItemProps = {
    href: string;
    label: string;
    icon?: string;
};

export function NavItem({ href, label, icon }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;
    
    return (
      <Link 
        href={href} 
        className={`${linkItem} ${isActive ? 'active' : ''}`} 
      >
        {icon ? <Image src={icon} alt={label} width={24} height={24} /> : label}
      </Link>
    );
  }