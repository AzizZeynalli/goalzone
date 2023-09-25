import logo from './assets/logo.svg'
import { navLinks } from './constants'

const Nav = () => {
    return (
        <header className="bg-[#CAE2CC] px-8 w-full text-xl font-mono sticky top-0 border-b-[1px] border-[#aecea5] border-solid pb-2 z-10">
            <nav className="flex justify-between items-center">
                <a href="/" className="ml-10">
                    <img src={logo} alt="logo" 
                        width={200} height={200} />
                </a>
                <ul className="text-lg flex-1 flex justify-end items-center gap-20 mr-10 font-medium pt-12 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label} className="hover:bg-[#d5ffdd9c] hover:rounded-lg p-2">
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;