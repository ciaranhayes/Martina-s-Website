import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Education', href: '#' },
    { name: 'Arts Management', href: '#' },
    { name: 'Flute', href: '#' },
    { name: 'Research', href: '#' }
]

export default function Example() {
    return (
        <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center text-base font-semibold text-[#EFF0E2]">
                Portfolio
                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-6 text-[#EFF0E2]" />
            </MenuButton>

            <MenuItems
                transition
                className="absolute right-0 left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#8A2BE2] shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    {navigation.map((item) => 
                    <MenuItem>
                        <a
                            href={item.href}
                            className="block px-4 py-2 text-base text-[#EFF0E2] data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            {item.name}
                        </a>
                    </MenuItem>)}

                </div>
            </MenuItems>
        </Menu>
    )
}
