import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ReactComponent as ArrowD } from "../images/icon-arrow-dark.svg";
import { ReactComponent as ArrowL } from "../images/icon-arrow-light.svg";

const MobileDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-center">
      <Menu.Button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex gap-2 items-center hover:cursor-pointer"
      >
        <p className="text-[16px] font-ubuntu font-medium text-vdbblue">
          Product
        </p>
        {open ? <ArrowD className="mt-1" /> : <ArrowL className="" />}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col justify-center w-full bg-vdgblue px-12 py-4">
          <Menu.Item>
            <p>Contact</p>
          </Menu.Item>
          <Menu.Item>
            <p>Newsletter</p>
          </Menu.Item>
          <Menu.Item>
            <p>LinkedIn</p>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileDropdown;
