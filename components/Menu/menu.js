import Image from "next/image"

export default function Menu() {
    return(
        <nav>
            <div>
                <Image alt="Website Logo"/>
                <button>
                    {/* Navbar button kiedy będzie mobile view, użyć Button z Nexta czyli <Button></Button> */}
                </button>
                <div>
                    <ul>
                        <li>LINK 1</li>
                        <li>LINK 2</li>
                        <li>LINK 3</li>
                        <li>LINK 4</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}