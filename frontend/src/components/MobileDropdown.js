import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ReactComponent as ArrowD } from "../images/icon-arrow-dark.svg";

const MobileDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover as="div" className="relative flex flex-col justify-center w-full">
      <Popover.Button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex gap-2 items-center justify-center hover:cursor-pointer"
      >
        <p
          className={`text-[18px] font-ubuntu font-normal text-vdbblue ${
            open ? "text-vdgblue" : ""
          }`}
        >
          Connect
        </p>
        <ArrowD className={`mt-1 ${open ? "rotate-180" : ""}`} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="flex flex-col items-center origin-center justify-center w-full my-4 bg-gblue rounded-md px-12 py-4">
          <div className="flex flex-col font-overpass text-[16px] text-vdgblue">
            <p className="p-2">Contact</p>
            <p className="p-2">Newsletter</p>
            <p className="p-2">LinkedIn</p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default MobileDropdown;
