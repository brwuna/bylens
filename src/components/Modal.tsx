import Link from "next/link";
import { itemsMenu } from "./Header";
import { Search, User } from "lucide-react";

interface ModalProps {
    activeIndex: number | null;
    setActiveIndex: (index: number | null) => void;
}

export function Modal({activeIndex, setActiveIndex}: ModalProps) {
    return (
        <div className="md:hidden bg-zinc-900 w-full absolute top-full left-0 py-6 z-50">
                    <nav className="flex flex-col gap-2 items-center">
                        {itemsMenu.map((item, index) => (
                            <Link
                                href="#"
                                key={index}
                                className={`px-3 py-1 text-white hover:text-opacity-100 transition-all ${index === 0 ? 'border-b-lime-600' : 'text-opacity-50'}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                style={{
                                    borderBottom: activeIndex === index ? '2px solid #84cc16' : (activeIndex === null && index === 0 ? '2px solid #84cc16' : 'none'),
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col items-center gap-6 mt-4">
                        <button>
                            <Search className="text-white text-opacity-70" size={19} />
                        </button>

                        <button className="flex items-center gap-2">
                            <User className="text-white text-opacity-70" size={19} />
                            <span className="text-white font-medium pt-1">Criar Conta</span>
                            <span className="text-white">|</span>
                            <span className="font-medium pt-1 text-lime-500">Explorar</span>
                        </button>
                    </div>
                </div>
    )
}