import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ReactComponent as ArrowL } from "../images/icon-arrow-light.svg";

const MediumDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover as="div" className="relative">
      <Popover.Button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center gap-2"
      >
        <p
          className={`font-ubuntu text-[16px]  font-medium ${
            open ? "text-white underline" : "text-gblue"
          }`}
        >
          Connect
        </p>
        <ArrowL className={`mt-1 ${open ? "rotate-180" : "null"}`} />
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
        <Popover.Panel className="absolute z-10 bg-white rounded-md shadow-md text-left py-6 pl-4 font-ubuntu text-vdgblue pr-12 mt-4">
          <div className="flex flex-col">
            <p className="py-1 hover:cursor-pointer hover:text-vdbblue">
              Contact
            </p>
            <p className="py-1 hover:cursor-pointer hover:text-vdbblue">
              Newsletter
            </p>
            <p className="py-1 hover:cursor-pointer hover:text-vdbblue">
              LinkedIn
            </p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default MediumDropdown;
